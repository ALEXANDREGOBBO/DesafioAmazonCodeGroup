class desafioAmazonQA {
    // URL da página
    visit() {
      cy.visit("https://www.amazon.com.br/");
    }
  
    // Elementos
    getAutocomplete() {
      return cy.get('#twotabsearchtextbox');
    }
  
    getContainerSugestoes() {
      return cy.get('.left-pane-results-container');
    }
  
    getSugestoes() {
      return this.getContainerSugestoes().find('.s-suggestion-container');
    }
  
    // Métodos
    pesquisar(term) {
      this.getAutocomplete().click().type(term);
    }
  
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