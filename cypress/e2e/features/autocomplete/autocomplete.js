import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import desafioAmazonQA from '../pagesObjects/autocompletePageObjects';

Given(`Estou na pagina da Amazon`, () => {
  desafioAmazonQA.visit();
  cy.title().should("include", "Amazon");
});

When("Clico no campo de pesquisa e digito o termo liv", () => {
  desafioAmazonQA.getAutocomplete();
  desafioAmazonQA.pesquisar("liv")
});

Then("Eu devo ver as 10 sugestoes e a palavra livros", () => {
  desafioAmazonQA.contadorVerificacaoSugestoes(10);
  desafioAmazonQA.verificaSugestoes("livros")
  desafioAmazonQA.limparPesquisa();
});

Given(`Retorno na pagina da Amazon`, () => {
  desafioAmazonQA.visit();
  cy.title().should("include", "Amazon");
});

When("Estou na pagina da Amazon e irei fazer uma nova pesquisa", () => {
  desafioAmazonQA.getAutocomplete();
  desafioAmazonQA.pesquisar("livro")
});

Then("Eu devo ver as 10 sugestoes", () => {
  desafioAmazonQA.contadorVerificacaoSugestoes(10);
  desafioAmazonQA.verificaSugestoes("livros")
  desafioAmazonQA.limparPesquisa();
});


