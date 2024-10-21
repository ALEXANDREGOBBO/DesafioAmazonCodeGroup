import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import desafioAmazonQA from '../pagesObjects/autocompletePageObjects';
import { testData } from '../features/dados/testData';

Given(`Que estou na pagina da Amazon e irei fazer uma pesquisa de uma palavra incompleta`, () => {
  desafioAmazonQA.visit();
  desafioAmazonQA.verificaTitulo();
});

When("Clico no campo de pesquisa e digito o termo {string}", (string) => {
  desafioAmazonQA.getAutocomplete();
  desafioAmazonQA.getAutocompleteResponse();
  desafioAmazonQA.pesquisar(string); 
});

Then('Eu devo ver {string} sugestoes e a palavra {string}', (string1, string2) => {
  desafioAmazonQA.contadorVerificacaoSugestoes(string1);
  desafioAmazonQA.limparPesquisa();
  desafioAmazonQA.verificaSugestoes(string2); 
});


Given("Que retorno na pagina da Amazon para validar a palavra completa", () => {
  desafioAmazonQA.visit();
  desafioAmazonQA.verificaTitulo()
});

When("Estou na pagina da Amazon e irei fazer uma nova pesquisa com a palavra completa {string}", (string) => {
  desafioAmazonQA.getAutocomplete();
  desafioAmazonQA.getAutocompleteResponse();
  desafioAmazonQA.pesquisar(string);
});

Then("Eu devo ver as 10 sugestoes e tambem a palavra {string}", (string) => {
  desafioAmazonQA.contadorVerificacaoSugestoes(10);
  desafioAmazonQA.verificaSugestoes(string)
  desafioAmazonQA.limparPesquisa();
});

Given("Que retorno na pagina da Amazon para validar uma entrada invalida", () => {
  desafioAmazonQA.visit();
  desafioAmazonQA.verificaTitulo()
});

When("Clico no campo de pesquisa e digito uma entrada invalida *******", () => {
  desafioAmazonQA.getAutocomplete();
  desafioAmazonQA.getAutocompleteResponse();
  desafioAmazonQA.pesquisar("*******");
});

Then(`Eu devo ver 0 sugestoes`, () => {
  desafioAmazonQA.contadorVerificacaoSugestoes(0);
});

// Scenario: Verificacao autocomplete entrada incomum

Given("Que retorno na pagina da Amazon para validar uma entrada incomum", () => {
  desafioAmazonQA.visit();
  desafioAmazonQA.verificaTitulo()
});

When("Clico no campo de pesquisa e digito uma entrada incomum {string}", (string) => {
  desafioAmazonQA.getAutocomplete();
  desafioAmazonQA.getAutocompleteResponse();
  desafioAmazonQA.pesquisar(string);
});

Then(`Eu nao devo ver sugestoes pois a entrada e incomum`, () => {
  desafioAmazonQA.contadorVerificacaoSugestoes(0);
});

// Cenário: Verificação autocomplete entrada numerica
Given("Que retorno na pagina da Amazon para validar uma entrada numerica", () => {
  desafioAmazonQA.visit();
  desafioAmazonQA.verificaTitulo()
});

When(`Clico no campo de pesquisa e digito uma entrada numerica {string}`, (string) => {
  desafioAmazonQA.getAutocomplete(string);
});

Then(`Eu nao devo ver sugestoes pois a entrada e numerica`, () => {
  desafioAmazonQA.contadorVerificacaoSugestoes(0);
});

// Cenário: Verificação do tempo de resposta

Given("Que retorno na pagina da Amazon para validar o tempo de resposta do autocomplete", () => {
  desafioAmazonQA.visit();
  desafioAmazonQA.verificaTitulo()
});


When(`Clico no campo de pesquisa e di33gito o termo Notebook`, () => {
  cy.clock();
  cy.wrap({ start: Date.now() }).as('temporizador');
  desafioAmazonQA.getAutocomplete();
  desafioAmazonQA.getAutocompleteResponse();
  desafioAmazonQA.pesquisar("Notebook")
});

When('Verifico qual foi o tempo de resposta', () => {
  cy.get('@temporizador').then(timer => {
    const tempoFinal = Date.now();
    const tempoDeResposta = tempoFinal - timer.start;
    expect(tempoDeResposta).to.be.lessThan(2000);
    cy.log(`Tempo de resposta: ${tempoDeResposta}ms`);
  });
});

When('Completo a busca com o termo Gamer', () => {
  cy.clock();
  cy.wrap({ start: Date.now() }).as('temporizador');
  desafioAmazonQA.pesquisar(" Gamer");
});

Then('Com o tempo de resposta verifico se obtive 10 opcoes', () => {
  cy.get('@temporizador').then(timer => {
    const tempoFinal = Date.now();
    const tempoDeResposta = tempoFinal - timer.start;
    expect(tempoDeResposta).to.be.lessThan(2000);
    cy.log(`Tempo de resposta: ${tempoDeResposta}ms`);
  });
  desafioAmazonQA.contadorVerificacaoSugestoes(10);
});
