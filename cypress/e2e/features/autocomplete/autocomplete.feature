Feature: Amazon autocomplete
  Scenario Outline: Verificacao de autocomplete com diferentes termos de pesquisa
    Given Que estou na pagina da Amazon
    When Clico no campo de pesquisa e digito o termo "<termo>"
    Then Eu devo ver "<numero>" sugestoes e a palavra "<resultado>"

  Examples:
    | termo   | numero | resultado |
    | livros  | 10     | livros    |
    | livro   | 10     | livros    |

Scenario: Verificacao autocomplete palavra completa na Amazon
    Given Que retorno na pagina da Amazon para validar a palavra completa 2 
    When Estou na pagina da Amazon e irei fazer uma nova pesquisa com a palavra completa "livro"
    Then Eu devo ver as 10 sugestoes e tambem a palavra "livros"

Scenario: Verificacao autocomplete entrada invalida na Amazon
    Given Que retorno na pagina da Amazon para validar uma entrada invalida 3
    When Clico no campo de pesquisa e digito uma entrada invalida *******
    Then Eu devo ver 0 sugestoes

   Scenario: Verificacao autocomplete entrada incomum
    Given Que retorno na pagina da Amazon para validar uma entrada incomum
    When Clico no campo de pesquisa e digito uma entrada incomum "iafnijeanji"
    Then Eu nao devo ver sugestoes pois a entrada e incomum

   Scenario: Verificacao autocomplete entrada numerica
    Given Que retorno na pagina da Amazon para validar uma entrada numerica
    When Clico no campo de pesquisa e digito uma entrada numerica "788789898"
    Then Eu nao devo ver sugestoes pois a entrada e numerica

  
   Scenario: Verificacao autocomplete tempo de resposta
    Given Que retorno na pagina da Amazon para validar o tempo de resposta do autocomplete
    When Clico no campo de pesquisa e digito o termo "Notebook"
    When Verifico qual foi o tempo de resposta
    When Completo a busca com o termo Gamer
    Then Com o tempo de resposta verifico se obtive 10 opcoes

  
  
