n = int(input('Digite um numero para calcular a sua fatorial:'))
f = 1
print('Calculando {}! = '.format(n), end='')
for c in range(5,0, -1):
    print('{}'.format(c), end=' ')
    print(' x 'if c > 1 else '= ',end='')
    f *= c
    c -= 1
print('{}'.format(f))