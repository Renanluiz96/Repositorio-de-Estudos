from random import  randint
from time import sleep
cumputador = randint(0,5) # faz o computador "PENSAR"
print('-=-' * 20)
print('Vou pensar em um numero entre 0 e 5, tente adivinhar ...')
print('-=-' * 20)
jogador = int(input('em que numero eu pensei? ')) #jogador tenta adivinha#
print('PROCESSANDO...')
sleep(2)
if jogador == cumputador:
    print('Parabens voce conseguiu me vencer')
else:
    print('Ganhei! eu pensei no numero {} e  nao no numero {}'.format(cumputador, jogador))