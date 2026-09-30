# Acessa+ — Documentação do Projeto

## 1. Identificação
**Nome:** Acessa+

**Tipo:** Web App / protótipo de aplicação web

**Projeto:** Eureca

**Tema:** Acessibilidade e inclusão

## 2. Resumo
O Acessa+ é uma plataforma web que permite ao usuário encontrar lugares de acordo com suas necessidades de acessibilidade. O sistema foi pensado para transformar a informação genérica “local acessível” em informações práticas sobre recursos disponíveis, como entrada acessível, banheiro adaptado, elevador, vaga acessível, piso tátil e atendimento em Libras.

Além da busca e dos filtros, o protótipo permite visualizar a origem das informações, cadastrar novos lugares e compartilhar experiências por meio de avaliações.

## 3. Problema
Pessoas com deficiência ou mobilidade reduzida podem precisar de informações específicas antes de visitar um estabelecimento. Uma classificação genérica de acessibilidade não mostra necessariamente quais recursos estão presentes.

O problema trabalhado pelo projeto é a dificuldade de encontrar, organizar e comparar informações de acessibilidade de forma simples e orientada à necessidade do usuário.

## 4. Objetivo geral
Desenvolver um protótipo web que facilite a descoberta de lugares considerando diferentes necessidades de acessibilidade.

## 5. Objetivos específicos
- Permitir busca por nome, categoria e bairro.
- Permitir filtros por tipo de necessidade.
- Permitir filtros por recursos específicos de acessibilidade.
- Exibir detalhes de cada estabelecimento.
- Informar se os dados foram confirmados pelo estabelecimento, pela comunidade ou ainda não foram verificados.
- Permitir avaliações de usuários.
- Permitir cadastro de novos locais.
- Aplicar recursos básicos de acessibilidade na própria interface.

## 6. Público-alvo
- Pessoas com deficiência.
- Pessoas com mobilidade reduzida.
- Pessoas que acompanham familiares com deficiência.
- Usuários que precisam planejar uma visita considerando acessibilidade.
- Estabelecimentos interessados em divulgar seus recursos de acessibilidade.

## 7. Funcionalidades do MVP
### 7.1 Busca
Pesquisa por nome, categoria, bairro ou termo relacionado ao local.

### 7.2 Filtros
O usuário pode combinar filtros por necessidade e por recurso específico.

### 7.3 Página do estabelecimento
Mostra descrição, endereço, nota, recursos de acessibilidade e avaliações.

### 7.4 Verificação
Cada local possui um status demonstrativo:
- Confirmado pelo estabelecimento.
- Confirmado pela comunidade.
- Não verificado.

### 7.5 Avaliação
O usuário informa uma nota, seleciona recursos encontrados e registra um comentário.

### 7.6 Cadastro de local
Permite adicionar um novo estabelecimento ao catálogo do protótipo.

## 8. Recursos de acessibilidade da própria plataforma
O projeto também busca ser acessível para quem utiliza o sistema. O protótipo inclui:
- link “Pular para o conteúdo”;
- foco visível para teclado;
- controles de aumento e redução de fonte;
- modo de alto contraste;
- suporte básico a leitores de tela com semântica HTML e rótulos;
- respeito à preferência do sistema por redução de movimento.

## 9. Tecnologias
- HTML5 para estrutura e semântica.
- CSS3 para layout, responsividade e identidade visual.
- JavaScript para lógica e interatividade.
- LocalStorage para salvar preferências simples do usuário.
- Arquivo JavaScript local como fonte de dados demonstrativos.

## 10. Arquitetura simplificada
Usuário → Interface HTML → Estilos CSS → Lógica JavaScript → Dados demonstrativos

Em uma versão futura, a camada de dados poderá ser substituída por uma API e banco de dados em nuvem.

## 11. Divisão sugerida da dupla
### Integrante 1
- Home.
- Busca e filtros.
- Lógica JavaScript.
- Testes de funcionamento.

### Integrante 2
- Página do estabelecimento.
- Formulários.
- Avaliações.
- Ajustes de responsividade e visual.

### Trabalho conjunto
- Definição de funcionalidades.
- Revisão do código.
- Teste final.
- Apresentação.

## 12. Fluxo do usuário
1. O usuário entra na Home.
2. Pesquisa um local ou escolhe uma necessidade.
3. O sistema abre a área de exploração.
4. O usuário combina filtros.
5. O sistema exibe os locais compatíveis.
6. O usuário abre os detalhes.
7. O usuário consulta os recursos e a origem das informações.
8. Depois da visita, pode registrar uma avaliação.

## 13. Limitações do protótipo
- Os dados dos estabelecimentos são demonstrativos.
- Não há autenticação real de usuários.
- Não há banco de dados em nuvem.
- Não há geolocalização real.
- O mapa e as rotas acessíveis ficam previstos para uma evolução futura.

## 14. Evolução futura
- Integração com mapas e geolocalização.
- Conta de usuário.
- Banco de dados real.
- Validação dos dados pelos estabelecimentos.
- Sistema de denúncias/correções de informações.
- Rotas com critérios de acessibilidade.
- Painel administrativo.
- Aplicação mobile.

## 15. Critérios de sucesso do MVP
O protótipo cumpre seu objetivo quando um usuário consegue:
1. localizar um estabelecimento;
2. filtrar recursos de acessibilidade;
3. entender quais recursos estão disponíveis;
4. verificar a origem da informação;
5. registrar uma experiência.

## 16. Observação
O Acessa+ é um protótipo acadêmico. Informações de acessibilidade mostradas na demonstração não devem ser tratadas como garantia de acessibilidade real sem confirmação atualizada.


### Preferências de acessibilidade da interface
A versão atual também permite ajustar tamanho do texto, alto contraste, contraste reforçado no texto, preto e branco, sublinhado de ações, redução de animações e modos visuais para protanopia, deuteranopia e tritanopia.

### Catálogo demonstrativo
O protótipo foi ampliado para 18 locais demonstrativos, distribuídos em categorias como restaurantes, cinema, shopping, escola, hospital, biblioteca, parque, transporte, serviços públicos, academia, museu e centros culturais.
