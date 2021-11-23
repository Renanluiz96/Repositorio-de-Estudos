primeiro = int(input('Digite o primeiro termo:'))
razao = int(input('Razao :'))
cont = 1
termo = primeiro
total = 0
mais = 10
while mais != 0:
    total = total + mais
    while cont <= total:
        print('{}'.format(termo),end='')
        print(' → ' if cont <= total - 1 else ' ',end='')
        termo += razao
        cont += 1
    print('Pausa')
    mais = int(input('Voce quer adicionar mais quantos termos?'))
print('Progresso finalizado com {} Termos mostrados na tela'.format(total))