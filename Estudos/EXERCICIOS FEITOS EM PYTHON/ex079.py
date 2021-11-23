num = list()
while True:
    n = int(input('Digite um Valor para adicionar a lista :'))
    if n not in num:
        num.append(n)
        print('Valor adicionado com sucesso')
    else:
        print('Valor duplicado , Não vou adicionar')
    resp = str(input('Voce Deseja Continuar ? [S/N]')).strip().upper()
    if resp == 'N':
        break
print('-='*30)
num.sort()
print(f'Valores Da lista são {num}')