algoritmo "calculoidade"
var
ano,nasc,idade:inteiro
nome: caractere
inicio
  escreva("Qual seu nome? ")
  leia(nome)

  escreva (" em que ano estamos ? ")
  leia(ano)
  escreva (" em que ano voce nasceu ? ")
  leia(nasc)
  idade<- ano-nasc
  escreva ("Seu nome e " , nome , " e em ",ano, " voce tera " , idade, " anos ")
  se ( idade>= 21) entao
  escreval ("e  ja tera atingido a maioridade. ")
  FimSe
fimalgoritmo