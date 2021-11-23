n1 = float(input('Digite Primeira nota'))
n2 = float(input('Digite sua Segunda nota'))
resul = (n1 + n2) / 2
if resul > 7:
    print('Seu media foi {}, e voce foi Aprovado!'.format(resul))
elif resul > 5:
    print('Sua media foi {} , e voce esta em Recuperacao!'.format(resul))
elif resul < 3:
    print('Sua media foi {} , e voce foi Reprovado'.format(resul))