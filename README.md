Desafio Técnico - Automação de Testes da Página Inicial da Amazon Descrição do Projeto Este repositório contém a automação de testes para garantir a qualidade da página inicial da Amazon Brasil, focando nas seguintes funcionalidades:

Sugestões de Pesquisa (Autocomplete) Menu de Navegação Responsivo Desempenho de Carregamento A automação foi implementada utilizando Cypress com suporte para Cucumber e o padrão de design Page Objects, garantindo uma estrutura modular, reutilizável e de fácil manutenção para os testes.
Estrutura do Projeto O projeto está estruturado em três partes principais:
Features: Arquivos .feature que descrevem os cenários de teste em linguagem Gherkin, permitindo uma abordagem BDD (Behavior Driven Development).
Step Definitions: Implementação dos passos definidos nas features, mapeando os cenários para os testes reais.
Page Objects: Classes que representam páginas ou componentes da página da Amazon, encapsulando a lógica de interação com os elementos da interface, promovendo reutilização e isolamento.
Funcionalidades Testadas Sugestões de Pesquisa (Autocomplete)
Verifica se o sistema sugere resultados à medida que o usuário digita na barra de pesquisa. Testa diferentes entradas, incluindo pesquisas válidas, inválidas e vazias. Menu de Navegação Responsivo
Testa a funcionalidade do menu de navegação em diferentes resoluções (desktop, tablet e mobile). Verifica a presença e funcionalidade de links e submenus. Desempenho de Carregamento
Mede o tempo de carregamento da página inicial em diferentes navegadores e dispositivos. Verifica se o desempenho está dentro dos padrões aceitáveis. Ferramentas e Tecnologias Utilizadas Cypress: Framework de automação de testes end-to-end, focado em simplicidade e velocidade. Cucumber: Utilizado para permitir a escrita dos testes em Gherkin, facilitando a colaboração entre equipes técnicas e de negócios. Page Objects: Padrão de design que organiza os testes separando a lógica de interação com a interface de usuário, promovendo a reutilização de código.
