class desafioAmazonQA {
    // URL da página
    visit() {
      cy.visit("https://www.amazon.com.br/");
    }

    verificaTitulo(){
      cy.title().should("include", "Amazon");
    }

  
    // Elementos
    getAutocomplete() {
      return cy.get('#twotabsearchtextbox').click();
    }

    getAutocompleteResponse(){
      cy.intercept({
        method: 'GET',
        url: "https://completion.amazon.com.br/api/2017/suggestions*"
      }).as('getAutocomplete');
      
    }

    validaRetorno(){
      return cy.wait('@getAutocomplete').then((interception) => {
        // Verifica se o status da resposta é 200 (sucesso)
        expect(interception.response.statusCode).to.eq(200);
      });
    }
  
    getContainerSugestoes() {
      return cy.get('.left-pane-results-container');
    }
  
    getSugestoes() {
      return this.getContainerSugestoes().find('.s-suggestion-container');
    }
  
    // Métodos
    pesquisar(term) {
      this.getAutocomplete().type(term);
      this.getAutocomplete().should('have.value', term); // Verificando o valor do campo
    }

 //   verificarValorCampo(valorEsperado) {
      
   // }
  
    limparPesquisa() {
      this.getAutocomplete().clear();
    }
  
    // Validar número de sugestões
    contadorVerificacaoSugestoes(count) {
      this.getSugestoes().should('have.length', count);
    }
  
    // Validar tempo de resposta
    validarTempoDeResposta(temporizador, maxTime) {
      const fimTeporizador = performance.now();
      const contador = fimTeporizador - temporizador;
      expect(contador).to.be.lessThan(maxTime);
    }
  
    // Verificar se a sugestão específica está presente
    verificaSugestoes(text) {
      this.getSugestoes().then(($suggestions) => {
        const suggestionsText = $suggestions.map((index, el) => Cypress.$(el).text()).get();
        expect(suggestionsText).to.include(text);
      });
    }
  
    // Verifica o tamanho da string no campo de pesquisa
    tamanhoDoInput(length) {
      this.getAutocomplete().invoke('val').should('have.length.greaterThan', length);
    }
  }
  
  export default new desafioAmazonQA();