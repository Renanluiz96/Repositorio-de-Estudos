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
