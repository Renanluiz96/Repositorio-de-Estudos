algoritmo "DetectordePesados"
var
i:inteiro
n,pesado:caractere
p,mai:real
procedimento topo()
inicio
 limpatela
      Escreval("----------------------------------")
      Escreval("D E T E C T O R   DE   P E S A D O")
      Escreval("Maior peso ate agora: ",mai, " Kg")
      Escreval("----------------------------------")
 fimprocedimento
inicio
      topo()
      para i <- 1 ate 5 faca
           escreva("Digite o nome: ")
           leia(n)
           escreva("Digite o peso de ", n , ": ")
           leia(p)
           se (p>mai) entao
              MAI <- p
              pesado <- n
           fimse
         topo()
      fimpara
     topo()
      escreval("A pessoa mais pesada foi ", pesado, ", com ", mai, " quilos.")
fimalgoritmo