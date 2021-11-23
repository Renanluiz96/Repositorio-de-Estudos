algoritmo "SomadorNumerico"
var
cont,n,s,maior:inteiro
inicio
      cont <- 1
      s <- 0
      enquanto (cont <= 5) faca
      escreva(" Digite o ", cont, "o. valor: ")
      leia(n)
      se (n > maior) entao
           maior <- n
      Fimse
      s <- s+n
      cont <- cont + 1
      Fimenquanto
      escreval("A soma de todos os valores foi " , s)
      escreval("O Maior valor digitado foi ", maior)
fimalgoritmo