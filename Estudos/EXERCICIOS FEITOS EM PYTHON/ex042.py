l1 = float(input('Qual o primeiro lado do triangulo :'))
l2 = float(input('Qual o segundo lado do triangulo :'))
l3 = float(input('Qual o terceiro lado do triangulo :'))
if l1 < l2 + l3 and l2 < l1 + l3 and l3 < l1 + l2:
    print('Os segmentos acima nao podem formar um triangulo', end=' ')
    if l1 == l2 == l3:
        print('EQUILATERO!')
    elif l1 != l2 != l3 != l1:
        print('ESCALENO!')
    else:
        print('ISOSCELES!')
else:
    print('Os segmentos acima podem formar um triangulo')
