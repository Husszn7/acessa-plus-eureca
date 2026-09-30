window.LOCAIS = [
  {
    id: 1,
    nome: 'Shopping Horizonte',
    categoria: 'Shopping',
    bairro: 'Tucuruvi',
    endereco: 'Av. Exemplo, 1000 - São Paulo/SP',
    descricao: 'Centro comercial com circulação ampla, acesso principal nivelado e sinalização em áreas de uso comum.',
    recursos: ['entrada','banheiro','elevador','vaga','piso_tatil','sinalizacao','ambiente_calmo'],
    necessidades: ['mobilidade','visual','cognitiva'],
    verificacao: 'confirmado', nota: 4.8,
    avaliacoes: [
      {nota:5, autor:'Marina', texto:'Entrada, elevador e banheiro estavam bem sinalizados. A circulação foi tranquila.'},
      {nota:5, autor:'Rafael', texto:'Boa sinalização e vaga acessível próxima à entrada.'},
      {nota:4, autor:'João', texto:'Local amplo. Em horário de pico fica mais movimentado.'}
    ]
  },
  {
    id: 2,
    nome: 'Café do Parque', categoria:'Restaurante', bairro:'Santana', endereco:'Rua das Flores, 220 - São Paulo/SP',
    descricao:'Café com acesso por rampa, mesas com espaço de circulação e atendimento prioritário.',
    recursos:['entrada','banheiro','vaga','ambiente_calmo','cardapio_acessivel'], necessidades:['mobilidade','cognitiva'], verificacao:'comunidade', nota:4.5,
    avaliacoes:[{nota:5,autor:'Lia',texto:'A rampa funciona bem e há espaço para cadeira de rodas entre as mesas.'},{nota:4,autor:'Pedro',texto:'Atendimento atencioso. Vale conferir a disponibilidade da vaga antes de ir.'}]
  },
  {
    id:3,
    nome:'Cine Luz', categoria:'Cinema', bairro:'Centro', endereco:'Praça Central, 45 - São Paulo/SP',
    descricao:'Cinema com sala acessível, espaços reservados, elevador e sessões com recursos específicos.',
    recursos:['entrada','banheiro','elevador','libras','audiodescricao','sinalizacao'], necessidades:['mobilidade','auditiva','visual'], verificacao:'confirmado', nota:4.6,
    avaliacoes:[{nota:5,autor:'Caio',texto:'A sala possui espaço reservado e o acesso entre os pisos foi tranquilo.'},{nota:4,autor:'Ana',texto:'Gostei do atendimento. Consulte a programação para recursos específicos.'}]
  },
  {
    id:4,
    nome:'Biblioteca Vila Nova', categoria:'Biblioteca', bairro:'Vila Maria', endereco:'Rua do Saber, 80 - São Paulo/SP',
    descricao:'Biblioteca com circulação acessível, sinalização tátil e espaço de estudo mais silencioso.',
    recursos:['entrada','banheiro','piso_tatil','sinalizacao','ambiente_calmo'], necessidades:['mobilidade','visual','cognitiva'], verificacao:'comunidade', nota:4.3,
    avaliacoes:[{nota:4,autor:'Bia',texto:'O acesso é tranquilo e a sinalização ajuda bastante na orientação.'}]
  },
  {
    id:5,
    nome:'Mercado Bairro Vivo', categoria:'Mercado', bairro:'Tremembé', endereco:'Av. do Bairro, 510 - São Paulo/SP',
    descricao:'Mercado de bairro com entrada plana, corredor acessível e atendimento prioritário.',
    recursos:['entrada','vaga','sinalizacao'], necessidades:['mobilidade'], verificacao:'pendente', nota:3.9,
    avaliacoes:[{nota:4,autor:'Davi',texto:'A entrada é plana. Os corredores ficam apertados quando está cheio.'}]
  },
  {
    id:6,
    nome:'Centro Cultural Norte', categoria:'Centro cultural', bairro:'Casa Verde', endereco:'Rua da Cultura, 140 - São Paulo/SP',
    descricao:'Espaço cultural com programação variada e áreas de circulação acessíveis.',
    recursos:['entrada','elevador','banheiro','piso_tatil','libras','sinalizacao'], necessidades:['mobilidade','visual','auditiva'], verificacao:'confirmado', nota:4.7,
    avaliacoes:[{nota:5,autor:'Lucas',texto:'Boa estrutura e equipe preparada para orientar o público.'}]
  },
  {
    id:7,
    nome:'Praça Verde Municipal', categoria:'Parque', bairro:'Vila Guilherme', endereco:'Av. das Árvores, 900 - São Paulo/SP',
    descricao:'Área pública com caminhos principais acessíveis, espaços de descanso e sanitários adaptados.',
    recursos:['entrada','banheiro','vaga','sinalizacao','ambiente_calmo'], necessidades:['mobilidade','cognitiva'], verificacao:'comunidade', nota:4.2,
    avaliacoes:[{nota:4,autor:'Rita',texto:'Os caminhos principais são fáceis de usar e há áreas mais tranquilas.'}]
  },
  {
    id:8,
    nome:'Hospital Vida Plena', categoria:'Hospital', bairro:'Santana', endereco:'Rua Saúde, 310 - São Paulo/SP',
    descricao:'Unidade de atendimento com entrada nivelada, elevadores e sinalização de circulação.',
    recursos:['entrada','banheiro','elevador','vaga','piso_tatil','sinalizacao','libras'], necessidades:['mobilidade','visual','auditiva'], verificacao:'confirmado', nota:4.4,
    avaliacoes:[{nota:4,autor:'Paulo',texto:'A entrada e os elevadores foram bem sinalizados.'}]
  },
  {
    id:9,
    nome:'Escola Caminhos', categoria:'Escola', bairro:'Vila Medeiros', endereco:'Rua Aprender, 72 - São Paulo/SP',
    descricao:'Escola com acesso por rampa e salas organizadas para facilitar a circulação.',
    recursos:['entrada','banheiro','sinalizacao','ambiente_calmo'], necessidades:['mobilidade','cognitiva'], verificacao:'comunidade', nota:4.1,
    avaliacoes:[{nota:4,autor:'Nina',texto:'O acesso principal é bom e os ambientes são bem identificados.'}]
  },
  {
    id:10,
    nome:'Loja Conecta', categoria:'Loja', bairro:'Vila Guilherme', endereco:'Av. Conectar, 205 - São Paulo/SP',
    descricao:'Loja de atendimento ao público com corredores amplos e balcão acessível.',
    recursos:['entrada','vaga','ambiente_calmo','sinalizacao'], necessidades:['mobilidade','cognitiva'], verificacao:'pendente', nota:4.0,
    avaliacoes:[]
  },
  {
    id:11,
    nome:'Restaurante Sabor de Casa', categoria:'Restaurante', bairro:'Tatuapé', endereco:'Rua das Panelas, 510 - São Paulo/SP',
    descricao:'Restaurante familiar com acesso nivelado e cardápio em formato digital ampliado.',
    recursos:['entrada','banheiro','cardapio_acessivel','sinalizacao'], necessidades:['mobilidade','visual'], verificacao:'comunidade', nota:4.4,
    avaliacoes:[{nota:4,autor:'Felipe',texto:'O espaço entre as mesas ajuda na circulação.'}]
  },
  {
    id:12,
    nome:'Museu Memória Viva', categoria:'Museu', bairro:'Centro', endereco:'Largo da História, 18 - São Paulo/SP',
    descricao:'Museu com elevador, circulação acessível e experiências com recursos de audiodescrição.',
    recursos:['entrada','elevador','banheiro','audiodescricao','piso_tatil','sinalizacao'], necessidades:['mobilidade','visual'], verificacao:'confirmado', nota:4.6,
    avaliacoes:[{nota:5,autor:'Diego',texto:'As informações de orientação são claras e o elevador facilita bastante.'}]
  },
  {
    id:13,
    nome:'Posto de Atendimento Cidadão', categoria:'Serviço público', bairro:'Jaçanã', endereco:'Av. Cidadania, 55 - São Paulo/SP',
    descricao:'Unidade de atendimento com balcão acessível e circulação sem degraus na entrada principal.',
    recursos:['entrada','banheiro','vaga','libras','sinalizacao'], necessidades:['mobilidade','auditiva'], verificacao:'confirmado', nota:4.3,
    avaliacoes:[{nota:4,autor:'Marta',texto:'O atendimento foi organizado e a entrada não possui degraus.'}]
  },
  {
    id:14,
    nome:'Academia Movimento+', categoria:'Academia', bairro:'Mandaqui', endereco:'Rua Energia, 88 - São Paulo/SP',
    descricao:'Espaço esportivo com circulação ampla e equipamentos em áreas de uso acessível.',
    recursos:['entrada','banheiro','vaga','elevador'], necessidades:['mobilidade'], verificacao:'pendente', nota:3.8,
    avaliacoes:[]
  },
  {
    id:15,
    nome:'Restaurante Ponto Leve', categoria:'Restaurante', bairro:'Mooca', endereco:'Rua do Ponto, 120 - São Paulo/SP',
    descricao:'Restaurante com ambiente menor, atendimento personalizado e espaço mais silencioso.',
    recursos:['entrada','banheiro','ambiente_calmo','cardapio_acessivel'], necessidades:['mobilidade','cognitiva','visual'], verificacao:'comunidade', nota:4.5,
    avaliacoes:[{nota:5,autor:'Clara',texto:'O ambiente é mais calmo e o atendimento foi cuidadoso.'}]
  },
  {
    id:16,
    nome:'Terminal Norte Integrado', categoria:'Transporte', bairro:'Santana', endereco:'Av. Integração, 100 - São Paulo/SP',
    descricao:'Espaço de transporte do protótipo com áreas reservadas e sinalização de circulação.',
    recursos:['entrada','elevador','piso_tatil','libras','sinalizacao'], necessidades:['mobilidade','visual','auditiva'], verificacao:'confirmado', nota:4.0,
    avaliacoes:[{nota:4,autor:'Renato',texto:'A sinalização ajuda, principalmente nos pontos de entrada e saída.'}]
  },
  {
    id:17,
    nome:'Centro Esportivo da Zona Norte', categoria:'Centro esportivo', bairro:'Parque Novo Mundo', endereco:'Rua Esporte, 410 - São Paulo/SP',
    descricao:'Espaço esportivo com entrada acessível, vestiário adaptado e áreas de convivência.',
    recursos:['entrada','banheiro','vaga','sinalizacao','ambiente_calmo'], necessidades:['mobilidade','cognitiva'], verificacao:'comunidade', nota:4.1,
    avaliacoes:[]
  },
  {
    id:18,
    nome:'Café Estação', categoria:'Restaurante', bairro:'Belenzinho', endereco:'Rua Estação, 33 - São Paulo/SP',
    descricao:'Café compacto com acesso nivelado e cardápio digital com ajuste de tamanho.',
    recursos:['entrada','cardapio_acessivel','ambiente_calmo'], necessidades:['mobilidade','visual','cognitiva'], verificacao:'pendente', nota:4.0,
    avaliacoes:[]
  }
];
