from random import randint
from time import sleep
from operator import itemgetter
jogo = {'jogador 1': randint(1, 7),
        'jogador 2': randint(1, 7),
        'jogador 3': randint(1, 7),
        'jogador 4': randint(1, 7)}
ranking = list()
print('VALORES SORTEADOS:')
for i , v in jogo.items():
    print(f'{i} jogou : {v}')
    sleep(1)
ranking = sorted(jogo.items(), key=itemgetter(1), reverse=True)
print('-='*30)
print('RANKINGS:')
for i ,v in enumerate(ranking):
    print(f'{i +1}º lugar {v[0]} : jogou {v[1]} ')
    sleep(1)