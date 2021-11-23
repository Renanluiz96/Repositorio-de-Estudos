algoritmo "conversordemoedas"
var
r,d:real
c,q:inteiro
inicio
      c <- 1
      escreva(" Quantas vezes voce quer converter? ")
      leia(q)
      enquanto (c <= q) faca
               escreva("Qual o valor em R$ ? ")
               leia(r)
               d <- r/2.20
               escreval(" o valor convertido e US$ " , d:5:2)
               c <- c + 1
      Fimenquanto
fimalgoritmo