soma = 0
cont = 0
for c in range(0,6):
    num = int(input('Digite o {}º valor :'.format(c)))
    if num % 2 == 0:
        soma += num
        cont += 1
print('Voce informou  {} numeros PARES e a soma foi {}'.format(cont, soma))
