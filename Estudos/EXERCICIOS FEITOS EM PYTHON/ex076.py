listagem = ('Arroz', 3.99,
            'Macarrão', 2.89,
            'Açucar', 3.99,
            'Detergente', 2,
            'Sabão em pó', 5,
            'Refrigerante', 7.99,
            'Cerveja', 23)
print('-'*40)
print(f'{"Listagem de Preço":^40}')
print('-'*40)
for pos in range(0, len(listagem)):
    if pos % 2 == 0:
        print(f'{listagem[pos]:.<30}',end= ' ')
    else:
        print(f' R$ {listagem[pos]:>7.2f}')
print('-'*40)