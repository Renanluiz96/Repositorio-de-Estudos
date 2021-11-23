algoritmo "MatrizPar"
var
    valores: vetor[1..3, 1..3] de inteiro
    l,c:inteiro
inicio
     para l <- 1 ate 3 faca
        para c <- 1 ate 3 faca
           escreva(" Digite um valor da posicao [Linha ", l , ", Coluna ", c ,"]: ")
              leia (valores[l,c])
        fimpara
     fimpara
     
     escreval()
     escreval("Matriz: ")
     escreval("-------------")
     
     para l <- 1 ate 3 faca
        para c <- 1 ate 3 faca
        se(valores[l,c] % 2 = 0) entao
            escreval("{", valores[l,c]:2, "}")
        senao
             escreval(valores[l,c]:4)
        fimse
        fimpara
        escreval()
     fimpara
fimalgoritmo