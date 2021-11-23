algoritmo "Aluno"
var
 N1,N2,M:real
inicio
escreva("Primeira nota: ")
leia(N1)
escreva("Segunda nota: ")
leia(N2)
 M <- (N1+N2) /2
 escreval(" A MEDIA DO ALUNO FOI " , M:4:2)
se (M >= 7) entao
    escreval ("ALUNO APROVADO")
 senao
      se (M >= 5) e (M < 7) entao
           escreval("ALUNO EM RECUPERACAO")
      senao
           escreval("ALUNO REPROVADO")
      fimse
fimse
fimalgoritmo
