from time import sleep
from random import randint
def sorteia(lista):
    print('Sorteando 5 valores')
    for cont in range(0, 5):
        n = randint(0, 20)
        numeros.append(n)
        print(f'{n} ', end='')
        sleep(0.3)
    print('Fim')


def somapar(lista):
    soma = 0
    for valor in lista:
        if valor % 2 == 0:
            soma += valor
    print(f'A soma dos valores {lista} pares  são {soma}!')



numeros = list()
sorteia(numeros)
somapar(numeros)