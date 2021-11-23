algoritmo "CriancaEsperanca"
var
 D:Inteiro
 valor:real
inicio
escreval("-----------------------")
escreval("   Crianca Esperanca   ")
escreval("-----------------------")
escreval(" Muito obrigado por ajudar")
escreval(" [1] Para doar R$ 10")
escreval(" [2] Para doar R$ 25")
escreval(" [3] Para doar R$ 50")
escreval(" [4] Para doar outros valores")
escreval(" [5] Para cancelar ")
leia (D)
escolha D
   caso 1
        valor <- 10
   caso 2
        valor <- 25
   caso 3
        valor <- 50
   caso 4
        escreva (" Qual o valor da doacao? R$ ")
        leia (valor)
   caso 5
   valor <- 0
   Fimescolha
   escreval("--------------------------")
   escreval(" SUA DOACAO FOI DE R$" , VALOR)
   escreval(" MUITO OBRIGADO!")
fimalgoritmo