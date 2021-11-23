print('-'*26)
print('    LOJA SUPER BARATÃO')
print('-'*26)
totalpreco = 0
pcaro = 0
cont = menor = 0
barato = ''
while True:
    produto = str(input(' Nome do produto : '))
    preco = float(input(' Preço do produto : R$  '))
    cont += 1
    totalpreco += preco
    if preco >= 1000:
        pcaro += 1
    if cont == 1 or preco < menor:
        menor = preco
        barato = produto
    resp = ' '
    while resp not in 'SN':
        resp = str(input('Quer continuar: [S/N]')).strip().upper()[0]
    if resp == 'N':
        break
print('{:-^40}'.format(' FIM DO PROGRAMA '))
print(f'Total de dos preço dos produtos sao {totalpreco:.2f}')
print(f'Teve {pcaro} de produtos acima de R$1000 ')
print(f'O produto mais barato foi o {barato}, que custava R$ {menor:.2f}')