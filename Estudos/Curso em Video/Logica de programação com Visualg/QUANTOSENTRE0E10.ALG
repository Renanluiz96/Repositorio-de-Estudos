algoritmo "quantosentre0e10"
var
  c,v,tot010,simp :inteiro
inicio
      tot010 <- 0
      simp <- 0
   para c <- 1 ate 6 faca
      escreva("Digite um valor: ")
      leia(v)
      se (v >=0) e (v<=10) entao
         tot010 <- tot010 + 1
         se (v%2=1) entao
           simp <- simp + v
           fimse
         fimse
   fimpara
   escreval("Ao todo foram ", tot010 , " valores entre 0 e 10 ")
   escreval("Nesse intervalo, a soma de impares foi ",simp)
fimalgoritmo