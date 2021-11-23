num = cont = soma = 0
num = int(input('Digite um numero [Digite 999 para parar]'))
while num != 999:
    cont += 1
    soma += num
    num = int(input('Digite um numero [Digite 999 para sair]'))
print('Voce digitou {} numeros e a soma total desses numeros foi {}'.format(cont, soma))