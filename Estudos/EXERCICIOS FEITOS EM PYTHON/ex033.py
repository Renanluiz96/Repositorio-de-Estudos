a = int(input(' Digite o primeiro valor:'))
b = int(input(' Digite o segundo valor:'))
c = int(input(' Digite o terceiro valor:'))
# Verificando quem e menor
menor = a
if b < a and b < c:
    menor = b
if c < a and c < b:
    menor = c
# Verificando quem e o maior
maior = a
if b > a and b > c:
    maior = b
if c > a and c > b:
    maior = c
print(' O menor valor digitado foi {}'.format(menor))
print('O Maior valor digitado foi {}'.format(maior))
