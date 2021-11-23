algoritmo "ContaNegativos"
var
   c,n,totn:inteiro
inicio
    c <- 1
    totn <- 0
    repita
      escreva("Digite um numero: ")
      leia(n)
      se (n<0) entao
        totn <- totn + 1
      Fimse
      c <- c + 1
    ate (c > 5)
    escreval("Foram digitados ", totn , " valores negativos")
fimalgoritmo