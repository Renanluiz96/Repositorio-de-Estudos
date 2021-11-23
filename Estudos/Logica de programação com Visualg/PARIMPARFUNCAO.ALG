algoritmo "ParImparFuncao"
var
   n:inteiro
   r:caractere
   funcao parouimpar(v:inteiro):caractere
   inicio
         se(v%2 = 0) entao
                retorne "PAR"
         senao
              retorne "IMPAR"
         fimse
   fimfuncao
inicio
      escreva("Digite um numero: ")
      leia(n)
      R <- parouimpar (n)
      escreva("O numero ", n  , "e um valor ",r)
fimalgoritmo