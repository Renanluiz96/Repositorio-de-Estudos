print('Gerador de PA')
print('=-'*10)
primeiro = int(input('Digite o primeiro termo'))
razao = int(input('Razao'))
termo = primeiro
cont = 1
while cont <= 10:
    print('{} → '.format(termo),end= '')
    print(' → ' if cont <= 9 else ' ', end='')
    termo += razao
    cont += 1
print('FIM')