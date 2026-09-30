# Como vocês dois vão trabalhar no Acessa+

## 1. Criar o repositório
No GitHub, um de vocês cria um repositório chamado `acessa-plus-eureca`.

Sugestão para a descrição:
`Protótipo de plataforma web de acessibilidade para o projeto Eureca.`

## 2. Adicionar o colega
No repositório: **Settings → Collaborators → Add people**. Procurem o usuário do colega e enviem o convite. No GitHub Free é possível adicionar colaboradores em repositórios públicos ou privados. Depois que o convite for aceito, ele terá acesso para contribuir. 

## 3. Clonar no computador de cada um
No botão **Code**, copiem a URL HTTPS e executem:

```bash
git clone https://github.com/SEU-USUARIO/acessa-plus-eureca.git
cd acessa-plus-eureca
```

## 4. Regra principal
Nunca trabalhem diretamente na `main` para uma funcionalidade nova.

Cada pessoa cria uma branch:

```bash
git checkout main
git pull origin main
git checkout -b feat/busca-filtros
```

ou:

```bash
git checkout -b feat/pagina-local
```

Branches isolam mudanças e facilitam a revisão antes de juntar tudo em `main`.

## 5. Enviar seu trabalho

```bash
git add .
git commit -m "feat: adiciona filtros de acessibilidade"
git push -u origin feat/busca-filtros
```

Depois abram um **Pull Request** para `main`.

## 6. Divisão recomendada
**Pessoa A:** busca, filtros, cards e parte da lógica de dados.

**Pessoa B:** página de detalhes, formulário de avaliação, cadastro de locais e acabamento visual.

**Evitem:** os dois editarem exatamente o mesmo arquivo ao mesmo tempo. Se precisarem mexer no mesmo arquivo, façam mudanças pequenas e sincronizem a branch primeiro.

## 7. Antes de começar uma tarefa
Sempre:

```bash
git checkout main
git pull origin main
```

Depois crie sua branch nova.

## 8. Antes de entregar
- Abrir o site.
- Testar busca.
- Testar filtros.
- Testar detalhes.
- Testar avaliação.
- Testar cadastro.
- Testar no celular.
- Revisar links e textos.
