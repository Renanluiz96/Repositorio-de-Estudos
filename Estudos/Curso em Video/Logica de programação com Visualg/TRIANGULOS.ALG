Algoritmo "triangulos"

Var
l1,l2,l3:real
eq,es,tri:logico


Inicio
  Escreva("digite o primeiro lado: ")
   leia(l1)
  escreva("digite o segundo lado: ")
  leia(l2)
  escreva("digite o terceiro lado: ")
  leia(l3)
  tri<-(l1<l2+l3) e (l2<l1+l3) e(l3<l1+l2)
  eq<- (l1=l2) e (l2=l3)
  es<- (l1<>l2) e (l2<>l3) e(l1<>l3)
  escreval("pode formar um triangulo? ", tri)
  escreval ("O triangulo e equilatero? " , eq)
  escreval ("O triangulo e escaleno? " , es)
Fimalgoritmo