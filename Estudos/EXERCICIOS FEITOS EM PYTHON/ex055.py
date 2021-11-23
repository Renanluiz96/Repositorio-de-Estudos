maior = 0
menor = 0
for p in range(1, 6):
    peso = float(input('Qual o peso da {}º pessoa :'.format(p)))
    if p == 1:
        maior = peso
        menor = peso
    else:
        if peso > maior:
            maior = peso
        if peso < menor:
            menor = peso
print('Maior peso lido foi {}Kg'.format(maior))
print('Menor peso lido foi {}Kg '.format(menor))
