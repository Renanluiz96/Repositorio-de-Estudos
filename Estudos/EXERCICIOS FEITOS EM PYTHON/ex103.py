def ficha(jog='<desconhecido>', gol=0):
    print(f'O jogador {jog} fez {gol} no campeonato')


j = str(input('Nome do jogador : '))
g = str(input('Quantos gols :'))
if g.isnumeric():
    g = int(g)
else:
    g = 0
if j.strip() == '':
    ficha(gol=g)
else:
    ficha(j, g)