(() => {
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  const featureLabels = {
    entrada: 'Entrada acessível',
    banheiro: 'Banheiro adaptado',
    elevador: 'Elevador',
    vaga: 'Vaga acessível',
    piso_tatil: 'Piso tátil',
    libras: 'Atendimento em Libras',
    audiodescricao: 'Audiodescrição',
    sinalizacao: 'Sinalização acessível',
    ambiente_calmo: 'Ambiente calmo',
    cardapio_acessivel: 'Cardápio acessível'
  };

  const featureIcons = {
    entrada:'♿', banheiro:'🚻', elevador:'↕', vaga:'P', piso_tatil:'⠿', libras:'🦻',
    audiodescricao:'◉', sinalizacao:'⌖', ambiente_calmo:'◌', cardapio_acessivel:'☰'
  };

  const state = {
    selectedPlaceId: null,
    currentNeed: null,
    fontScale: Number(localStorage.getItem('acessaFontScale') || 1),
    preferences: {
      highContrast: localStorage.getItem('acessaContrast') === '1',
      textContrast: localStorage.getItem('acessaTextContrast') === '1',
      grayscale: localStorage.getItem('acessaGrayscale') === '1',
      underline: localStorage.getItem('acessaUnderline') === '1',
      reduceMotion: localStorage.getItem('acessaReduceMotion') === '1',
      vision: localStorage.getItem('acessaVision') || 'normal'
    }
  };

  const storageKey = 'acessaPlacesV2';
  const loadPlaces = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
      return Array.isArray(saved) && saved.length ? saved : window.LOCAIS;
    } catch {
      return window.LOCAIS;
    }
  };
  let places = loadPlaces();

  function persistPlaces() {
    localStorage.setItem(storageKey, JSON.stringify(places));
  }

  function escapeHTML(value) {
    return String(value ?? '').replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
  }

  function getPlace(id) {
    return places.find(place => String(place.id) === String(id));
  }

  function showView(name) {
    $$('.view').forEach(view => {
      const active = view.id === `view-${name}`;
      view.hidden = !active;
      view.classList.toggle('active-view', active);
    });
    $$('.main-nav button').forEach(button => {
      button.classList.toggle('nav-active', button.dataset.view === name);
    });
    window.scrollTo({ top: 0, behavior: state.preferences.reduceMotion ? 'auto' : 'smooth' });
  }

  function renderVerification(place) {
    const map = {
      confirmado: ['verified', '✓ Informação confirmada'],
      comunidade: ['community', '● Relatada pela comunidade'],
      pendente: ['pending', '○ Não verificado']
    };
    const [klass, label] = map[place.verificacao] || map.pendente;
    return `<span class="verification-badge ${klass}">${label}</span>`;
  }

  function renderTags(place) {
    return place.recursos.slice(0, 4).map(key => `<span class="tag">${escapeHTML(featureLabels[key])}</span>`).join('');
  }

  function renderCard(place, index = 0) {
    const rating = place.nota ? place.nota.toFixed(1) : '—';
    const delay = Math.min(index * 35, 280);
    return `
      <article class="place-card" style="animation-delay:${delay}ms">
        <div class="place-visual">
          <span aria-hidden="true">${escapeHTML(place.nome.charAt(0))}</span>
          <b>${escapeHTML(place.categoria)}</b>
        </div>
        <div class="place-card-body">
          <div class="place-topline"><span>${escapeHTML(place.bairro)}</span><span>★ ${rating}</span></div>
          <h3>${escapeHTML(place.nome)}</h3>
          <p>${escapeHTML(place.descricao)}</p>
          <div class="tag-row">${renderTags(place)}</div>
          <div class="card-footer">
            ${renderVerification(place)}
            <button class="text-button" type="button" data-detail-id="${place.id}">Ver detalhes →</button>
          </div>
        </div>
      </article>`;
  }

  function renderHome() {
    const sorted = [...places].sort((a,b) => (b.nota || 0) - (a.nota || 0));
    $('#featured-grid').innerHTML = sorted.slice(0, 6).map((place, index) => renderCard(place, index)).join('');
  }

  function currentFilters() {
    return {
      query: $('#explore-search').value.trim().toLowerCase(),
      needs: $$('[data-access-filter]:checked').map(input => input.value),
      features: $$('[data-feature-filter]:checked').map(input => input.value)
    };
  }

  function renderResults() {
    const filters = currentFilters();
    let filtered = places.filter(place => {
      const haystack = `${place.nome} ${place.categoria} ${place.bairro} ${place.endereco}`.toLowerCase();
      const matchesQuery = !filters.query || haystack.includes(filters.query);
      const matchesNeeds = !filters.needs.length || filters.needs.every(need => place.necessidades.includes(need));
      const matchesFeatures = !filters.features.length || filters.features.every(feature => place.recursos.includes(feature));
      return matchesQuery && matchesNeeds && matchesFeatures;
    });

    filtered = filtered.sort((a,b) => (b.nota || 0) - (a.nota || 0));
    $('#results-count').textContent = `${filtered.length} ${filtered.length === 1 ? 'local' : 'locais'}`;
    $('#results-grid').innerHTML = filtered.map((place,index) => renderCard(place,index)).join('');
    $('#empty-state').hidden = filtered.length !== 0;
  }

  function renderDetail(place) {
    const missing = Object.keys(featureLabels).filter(key => !place.recursos.includes(key));
    const reviews = place.avaliacoes.map(review => `
      <article class="review-item">
        <div class="review-topline"><strong>${escapeHTML(review.autor)}</strong><span aria-label="${review.nota} de 5 estrelas">${'★'.repeat(review.nota)}${'☆'.repeat(5-review.nota)}</span></div>
        <p>${escapeHTML(review.texto)}</p>
      </article>`).join('');

    $('#detail-content').innerHTML = `
      <div class="detail-header">
        <div>
          <p class="eyebrow">${escapeHTML(place.categoria)} · ${escapeHTML(place.bairro)}</p>
          <h1 id="detail-title">${escapeHTML(place.nome)}</h1>
          <p class="detail-address">${escapeHTML(place.endereco)}</p>
        </div>
        <div class="detail-rating" aria-label="Avaliação ${place.nota ? place.nota.toFixed(1) : 'não disponível'} de 5">
          <span>★★★★★</span>
          <strong>${place.nota ? place.nota.toFixed(1) : '—'}</strong>
          <small>${place.avaliacoes.length} avaliação${place.avaliacoes.length === 1 ? '' : 'ões'}</small>
        </div>
      </div>

      <div class="detail-layout">
        <div class="detail-main">
          <div class="detail-banner" aria-hidden="true"><span>${escapeHTML(place.nome.charAt(0))}</span></div>
          <div class="detail-section"><h2>Sobre o local</h2><p>${escapeHTML(place.descricao)}</p></div>
          <div class="detail-section">
            <div class="section-heading compact"><div><h2>Recursos de acessibilidade</h2><p class="muted">Veja exatamente o que foi informado sobre este local.</p></div></div>
            <div class="accessibility-list">
              ${Object.entries(featureLabels).map(([key,label]) => {
                const available = place.recursos.includes(key);
                return `<div class="access-item ${available ? 'available' : 'unavailable'}"><span class="access-icon" aria-hidden="true">${available ? escapeHTML(featureIcons[key] || '✓') : '×'}</span><div><strong>${escapeHTML(label)}</strong><span>${available ? 'Disponível no cadastro' : 'Não informado'}</span></div></div>`;
              }).join('')}
            </div>
          </div>
          <div class="detail-section"><h2>Comentários da comunidade</h2><div class="review-list">${reviews || '<p class="muted">Ainda não existem avaliações.</p>'}</div></div>
        </div>

        <aside class="detail-side">
          <div class="side-card"><h2>Verificação</h2>${renderVerification(place)}<p class="muted">A classificação mostra de onde veio a informação neste protótipo.</p></div>
          <div class="side-card"><h2>O que ainda falta confirmar?</h2>${missing.length ? `<ul class="missing-list">${missing.map(key => `<li>${escapeHTML(featureLabels[key])}</li>`).join('')}</ul>` : '<p>Todos os recursos disponíveis no protótipo estão preenchidos.</p>'}</div>
          <button class="primary-button full-width" type="button" id="open-rate">Avaliar este local</button>
        </aside>
      </div>`;

    $('#open-rate').addEventListener('click', () => {
      $('#rate-subtitle').textContent = `Você está avaliando: ${place.nome}`;
      $('#rate-form').reset();
      $('#rate-feedback').textContent = '';
      showView('rate');
    });
  }

  function openDetail(id) {
    const place = getPlace(id);
    if (!place) return;
    state.selectedPlaceId = place.id;
    renderDetail(place);
    showView('detail');
  }

  function resetFilters() {
    $('#explore-search').value = '';
    $$('[data-access-filter], [data-feature-filter]').forEach(input => { input.checked = false; });
    state.currentNeed = null;
    renderResults();
  }

  function applyQuickFilter(need) {
    state.currentNeed = need;
    $$('[data-access-filter]').forEach(input => { input.checked = input.value === need; });
    $$('[data-feature-filter]').forEach(input => { input.checked = false; });
    $('#explore-search').value = '';
    renderResults();
    showView('explore');
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const features = data.getAll('features');
    const newPlace = {
      id: Date.now(), nome:data.get('name'), categoria:data.get('category'), bairro:data.get('neighborhood'), endereco:data.get('address'),
      descricao:data.get('notes') || 'Local cadastrado pela comunidade.', recursos:features, necessidades:features.includes('entrada') ? ['mobilidade'] : [], verificacao:'pendente', nota:0, avaliacoes:[]
    };
    places.push(newPlace);
    persistPlaces();
    $('#submit-feedback').textContent = 'Cadastro adicionado ao protótipo. Ele aparecerá como “não verificado”.';
    form.reset();
    renderHome(); renderResults();
    showToast('Local cadastrado com sucesso.');
  }

  function handleRate(event) {
    event.preventDefault();
    const place = getPlace(state.selectedPlaceId);
    if (!place) return;
    const data = new FormData(event.currentTarget);
    const rating = Number(data.get('rating'));
    const comment = String(data.get('comment') || '').trim();
    place.avaliacoes.unshift({ nota:rating, autor:'Você', texto:comment });
    place.nota = place.avaliacoes.reduce((sum, item) => sum + item.nota, 0) / place.avaliacoes.length;
    persistPlaces();
    $('#rate-feedback').textContent = 'Avaliação publicada no protótipo.';
    renderDetail(place);
    renderHome(); renderResults();
    showToast('Obrigado por compartilhar sua experiência!');
    setTimeout(() => showView('detail'), 250);
  }

  function savePreference(key, value) {
    const map = { highContrast:'acessaContrast', textContrast:'acessaTextContrast', grayscale:'acessaGrayscale', underline:'acessaUnderline', reduceMotion:'acessaReduceMotion', vision:'acessaVision' };
    localStorage.setItem(map[key], typeof value === 'boolean' ? (value ? '1' : '0') : value);
  }

  function applyAccessibilityPreferences() {
    const p = state.preferences;
    document.documentElement.style.setProperty('--font-scale', state.fontScale);
    document.body.classList.toggle('high-contrast', p.highContrast);
    document.body.classList.toggle('text-contrast', p.textContrast);
    document.body.classList.toggle('grayscale', p.grayscale);
    document.body.classList.toggle('underline-actions', p.underline);
    document.body.classList.toggle('reduce-motion', p.reduceMotion);
    ['protanopia','deuteranopia','tritanopia'].forEach(mode => document.body.classList.remove(`vision-${mode}`));
    if (p.vision !== 'normal') document.body.classList.add(`vision-${p.vision}`);

    $('#contrast-toggle').checked = p.highContrast;
    $('#text-contrast-toggle').checked = p.textContrast;
    $('#grayscale-toggle').checked = p.grayscale;
    $('#links-toggle').checked = p.underline;
    $('#motion-toggle').checked = p.reduceMotion;
    $$('.vision-button').forEach(button => button.classList.toggle('active', button.dataset.vision === p.vision));
  }

  function changeFont(delta) {
    state.fontScale = Math.min(1.28, Math.max(.88, Number((state.fontScale + delta).toFixed(2))));
    applyAccessibilityPreferences();
    localStorage.setItem('acessaFontScale', String(state.fontScale));
  }

  function resetAccessibility() {
    state.fontScale = 1;
    state.preferences = { highContrast:false, textContrast:false, grayscale:false, underline:false, reduceMotion:false, vision:'normal' };
    localStorage.removeItem('acessaFontScale');
    ['acessaContrast','acessaTextContrast','acessaGrayscale','acessaUnderline','acessaReduceMotion','acessaVision'].forEach(key => localStorage.removeItem(key));
    applyAccessibilityPreferences();
    showToast('Preferências de acessibilidade restauradas.');
  }

  function showToast(message) {
    const dialog = $('#toast-dialog');
    $('#toast-message').textContent = message;
    if (typeof dialog.show === 'function') dialog.show(); else dialog.setAttribute('open','');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => { if (dialog.open) dialog.close(); }, 2600);
  }

  $('#access-menu-toggle').addEventListener('click', () => {
    const panel = $('#accessibility-panel');
    const opening = panel.hidden;
    panel.hidden = !opening;
    $('#access-menu-toggle').setAttribute('aria-expanded', String(opening));
  });
  $('#access-menu-close').addEventListener('click', () => {
    $('#accessibility-panel').hidden = true;
    $('#access-menu-toggle').setAttribute('aria-expanded','false');
  });

  document.addEventListener('click', event => {
    const viewTrigger = event.target.closest('[data-view]');
    const detailTrigger = event.target.closest('[data-detail-id]');
    const quickFilter = event.target.closest('[data-quick-filter]');
    if (viewTrigger) {
      showView(viewTrigger.dataset.view);
      if (viewTrigger.dataset.view === 'explore') renderResults();
      return;
    }
    if (detailTrigger) { openDetail(detailTrigger.dataset.detailId); return; }
    if (quickFilter) { applyQuickFilter(quickFilter.dataset.quickFilter); return; }
  });

  $('#hero-search-form').addEventListener('submit', event => {
    event.preventDefault();
    $('#explore-search').value = $('#hero-search').value;
    renderResults();
    showView('explore');
  });
  $('#explore-search').addEventListener('input', renderResults);
  $$('[data-access-filter], [data-feature-filter]').forEach(input => input.addEventListener('change', renderResults));
  $('#clear-filters').addEventListener('click', resetFilters);
  $('#reset-from-empty').addEventListener('click', resetFilters);
  $('#submit-form').addEventListener('submit', handleSubmit);
  $('#rate-form').addEventListener('submit', handleRate);
  $('#increase-font').addEventListener('click', () => changeFont(.05));
  $('#decrease-font').addEventListener('click', () => changeFont(-.05));
  $('#reset-font').addEventListener('click', () => { state.fontScale = 1; applyAccessibilityPreferences(); localStorage.setItem('acessaFontScale','1'); });

  $('#contrast-toggle').addEventListener('change', event => { state.preferences.highContrast = event.target.checked; savePreference('highContrast', event.target.checked); applyAccessibilityPreferences(); });
  $('#text-contrast-toggle').addEventListener('change', event => { state.preferences.textContrast = event.target.checked; savePreference('textContrast', event.target.checked); applyAccessibilityPreferences(); });
  $('#grayscale-toggle').addEventListener('change', event => { state.preferences.grayscale = event.target.checked; savePreference('grayscale', event.target.checked); applyAccessibilityPreferences(); });
  $('#links-toggle').addEventListener('change', event => { state.preferences.underline = event.target.checked; savePreference('underline', event.target.checked); applyAccessibilityPreferences(); });
  $('#motion-toggle').addEventListener('change', event => { state.preferences.reduceMotion = event.target.checked; savePreference('reduceMotion', event.target.checked); applyAccessibilityPreferences(); });
  $$('.vision-button').forEach(button => button.addEventListener('click', () => { state.preferences.vision = button.dataset.vision; savePreference('vision', state.preferences.vision); applyAccessibilityPreferences(); }));
  $('#reset-accessibility').addEventListener('click', resetAccessibility);
  $('#toast-close').addEventListener('click', () => $('#toast-dialog').close());

  applyAccessibilityPreferences();
  renderHome();
  renderResults();
})();
