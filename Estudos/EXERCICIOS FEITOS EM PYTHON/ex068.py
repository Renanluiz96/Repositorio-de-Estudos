from random import randint
print('-='* 13)
print('VAMOS JOGAR PAR OU IMPAR')
print('-='*13)
v= 0
jogador = computador = 0
while True:
    jogador = int(input('Digite um valor:'))
    computador = randint(0, 10)
    total = jogador + computador
    escolha = ' '
    while escolha not in 'PI':
        escolha = str(input('Par ou Impar [P/I]')).strip().upper()[0]
    print(f'Voce jogou {jogador} e o computador jogou {computador} e o total deu {total}',end= ' ')
    print('DEU PAR' if total % 2 == 0 else 'DEU IMPAR')
    if escolha == 'P':
        if total % 2 == 0:
            print('VOCE GANHOU')
            v += 1
        else:
            print('VOCE PERDEU')
            break
    elif escolha == 'I':
        if total % 2 == 1:
            print('VOCE GANHOU')
            v += 1
        else:
            print('VOCE PERDEU')
            break
    print('Vamos Jogar novamente')
print(f'Voce Ganhou {v} Conscutivas')