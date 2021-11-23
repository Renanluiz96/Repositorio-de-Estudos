num = list()
pares = list()
impares = list()
while True:
    num.append(int(input('Digite um valor :')))
    resp = str(input('Voce quer continuar [S/N]'))
    if resp in 'Nn':
        break
for i, v in enumerate(num):
    if v % 2 == 0:
        pares.append(v)
    elif v % 2 == 1:
        impares.append(v)
print('-='*30)
num.sort()
print(f'Sua Lista completa são : {num}')
print(f'Os pares da sua lista são : {pares}')
print(f'Os impares da sua lista são : {impares}')