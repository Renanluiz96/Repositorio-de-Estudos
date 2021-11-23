import math
lado1 = int(input('Qual a medida do primeiro cateto de um triangulo: '))
lado2 = int(input('Qual a medida do segundo cateto do triangulo'))
hipo = math.hypot(lado1 , lado2)
print(' O medida do cateto oposto e {} \n a medida do cateto adjacente e {} \n e a hipotenusa desse triangulo e {:.2f}'.format(lado1, lado2, hipo))
