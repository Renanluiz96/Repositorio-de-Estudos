jogador = dict()
jogador['nome'] = str(input("Nome do jogador :"))
partida = int(input(f'Quantas partidas {jogador["nome"]}  jogou :'))
lista = list()
for c in range(0, partida):
    lista.append(int(input(f'Quantos gols na partida {c} :')))
jogador['gols'] = lista[:]
jogador['total'] = sum(lista)
print('-=' *30)
print(jogador)
print('-='*30)
for i, v in jogador.items():
    print(f'No campo {i} tem o valor: {v}')
print('-='*30)
print(f'O jogador {jogador["nome"]} jogou {len(lista)} partidas: ')
for i, v in enumerate(jogador['gols']):
    print(f'     => na partida {i + 1} fez : {v} gols')
print(f'Foi um total de {jogador["total"]} gols')