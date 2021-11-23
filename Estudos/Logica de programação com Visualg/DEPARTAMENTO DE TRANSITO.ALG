algoritmo "Departamento de Transito"
var
  ano,nasc,idade: inteiro
inicio
escreval("------------------------")
escreval("DEPARTAMENTO DE TRANSITO")
escreval("------------------------")
escreval("ano atual: ")
leia(ano)
escreval("ano de nascimento: ")
leia(nasc)
idade <- ano - nasc
escreval("-------- STATUS --------")
escreval(idade , " ANOS")
se(idade >= 18) entao
         escreval(" VOCE ESTA APTO A TIRAR A CARTEIRA DE MOTORISTA")
         SENAO(idade < 18)
         escreval(" VOCE ESTA INAPTO A TIRAR A CARTEIRA DE MOTORISTA")
FimSe
escreval("------------------------")
fimalgoritmo