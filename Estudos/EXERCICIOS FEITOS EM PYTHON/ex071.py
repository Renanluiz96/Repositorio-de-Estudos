print('='*30)
print('{:^30}'.format('Banco do Renan'))
print('='*30)
valor = int(input('Qual valor voce deseja sacar: R$ '))
total = valor
totced = 0
ced = 50
while True:
    if total >= ced:
        total -= ced
        totced += 1
    else:
        if totced > 0:
            print(f'Total de {totced} cedulas de R${ced}')
        if ced == 50:
            ced = 20
        elif ced == 20:
            ced = 10
        elif ced == 10:
            ced = 1
        totced = 0
    if total == 0:
            break
print('Volte sempre , muito obrigado')
