Feature: Amazon autocomplete
  Scenario: Verificacao autocomplete palavra incompleta
    Given Estou na pagina da Amazon
    When Clico no campo de pesquisa e digito o termo liv
    Then Eu devo ver as 10 sugestoes e a palavra livros
  
  Scenario: Verificacao autocomplete palavra completa
    Given Retorno na pagina da Amazon
    When Estou na pagina da Amazon e irei fazer uma nova pesquisa
    Then Eu devo ver as 10 sugestoes

   Scenario: Verificacao autocomplete palavra completa
    Given Retorno na pagina da Amazon
    When Estou na pagina da Amazon e irei fazer uma nova pesquisa
    Then Eu devo ver as 10 sugestoes

