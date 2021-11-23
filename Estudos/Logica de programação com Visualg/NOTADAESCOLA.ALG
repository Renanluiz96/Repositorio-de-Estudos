algoritmo "NotaDaEscola"
var
 PN,SN,M:Real
inicio
      escreval("---------------")
      escreval("ESCOLA DO RENAN")
      ESCREVAL("---------------")
 escreval(" Primeira Nota: ")
 leia(PN)
 escreval(" Segunda Nota: ")
 leia(SN)
      ESCREVAL("---------------")
 M <- (PN+SN) /2
 escreval("Media " , M)
 se (M >= 7) entao
  escreval("ALUNO APROVADO ")
 SENAO
      escreval ("ALUNO REPROVADO")
 FimSe
      ESCREVAL("---------------")
fimalgoritmo