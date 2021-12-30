algoritmo "lermatriz"
var
  mat: vetor[1..3, 1..2] de inteiro
  linha,coluna: inteiro
inicio
   para linha <- 1 ate 3 faca
       para coluna <- 1 ate 2 faca
          escreva ("Digite o valor da posicao [ Linha", linha, ", Coluna", coluna, "]: ")
          leia(mat[linha,coluna])
       fimpara
   fimpara
   
   para linha <- 1 ate 3 faca
      para coluna <- 1 ate 2 faca
          escreva (mat[linha,coluna])
      fimpara
      escreval()
   fimpara
fimalgoritmo