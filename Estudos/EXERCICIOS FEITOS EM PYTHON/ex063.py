print('-'*30)
print('SEQUENCIA DE FIBONACCI')
print('-'*30)
n = int(input('Quantos termos voce quer mostrar'))
t1 = 0
t2 = 1
cont = 3
print('~'*30)
print('{} → {} '.format(t1, t2),end=' ')
while cont <= n:
    t3 = t1 + t2
    print('{}'.format(t3),end= '')
    print(' → 'if n else ' ',end= ' ')
    cont += 1
    t1 = t2
    t2 = t3
print('FIM')