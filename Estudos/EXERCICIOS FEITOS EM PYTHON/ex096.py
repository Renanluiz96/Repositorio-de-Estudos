def area(larg, comp):
    a = larg * comp
    print(f'A area de um terreno {larg}x{comp} é {a}')


#programa principal
print(' CONTROLE DE TERRENOS')
print('-' * 30)
l = float(input('Largura (m) :'))
c = float(input('Comprimento (m) :'))
area(l, c)