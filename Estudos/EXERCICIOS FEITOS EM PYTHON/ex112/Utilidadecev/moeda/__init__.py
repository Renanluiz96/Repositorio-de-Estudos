def aumentar(preco, taxa, formato=False):
    res = preco + (preco * taxa / 100)
    return res if formato is False else moeda(res)


def diminuir(preco, taxa, formato=False):
    res = preco - (preco * taxa / 100)
    return res if formato is False else moeda(res)


def dobro(preco, formato=False):
    res = preco * 2
    return res if formato is False else moeda(res)


def metade(preco, formato=False):
    res = preco / 2
    return res if formato is False else moeda(res)


def moeda(preco=0, moeda='R$', formato=False):
    return f'{moeda}{preco:>.2f}'.replace('.', ',')

def resumo(preco=0, taxaa=10, taxar=5):
    print('-'*30)
    print('RESUMO DE VALOR'.center(30))
    print('-'*30)
    print(f'PREÇO ANALISANDO : \t{moeda(preco)}')
    print(f'DOBRO DO PREÇO : \t{dobro(preco, True)}')
    print(f'METADE DO PREÇO: \t{metade(preco, True)}')
    print(f'{taxaa}% de aumento : \t{aumentar(preco, taxaa, True)}')
    print(f'{taxar}% de redução : \t{diminuir(preco, taxar , True)}')
    print('-'*30)