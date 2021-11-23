jogador = dict()
time = list()
gols = list()
while True:
    jogador.clear()
    jogador['nome'] = str(input('Nome: '))
    gols.clear()
    partida = int(input('Quantas partidas jogou :'))
    for c in range(0, partida):
        gols.append(int(input(f'Quantos gols fez na partida {c} : ')))
    jogador['gols'] = gols[:]
    jogador['total'] = sum(gols)
    time.append(jogador.copy())
    while True:
        resp = str(input('Quer continuar ? [S/N]')).upper()[0]
        if resp in 'SN':
            break
    if resp in 'N':
        break
print('=-'*40)
print('cod ', end='')
for i in jogador.keys():
    print(f'{i:<15}', end='')
print()
print('='*50)
for k, v in enumerate(time):
    print(f'{k:>3}', end='')
    for d in v.values():
        print(f'{str(d):<15}', end='')
    print()
print('-'*40)
while True:
    busca = int(input('Mostrar dados de qual jogador?   [Digite 999 para parar]'))
    if busca == 999:
        break
    if busca >= len(time):
        print(f'Erro! não existe jogador com codigo {busca}')
    else:
        print(f' -- LEVANTAMENTO DO JOGADOR {time[busca]["nome"]}:')
        for i, g in enumerate(time[busca]['gols']):
            print(f'    No jogo {i + 1} fez {g} gols')
        print('='*40)
print(' << VOLTE SEMPRE >>')
