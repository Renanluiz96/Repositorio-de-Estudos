list = []
for c in range(1,6):
    list.append(int(input(f'Digite o {c}º numero para adicionar a sua lista ')))
print(f'Foram digitados {len(list)} Elementos na Lista')
list.sort(reverse=True)
print(f'Foi digitado em ordem decrescente {list}')
if 5 in list:
    print('Valor 5 foi encontrado na lista')
else:
    print('Valor 5 Não foi encontrado na lista!')