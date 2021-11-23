from ex109 import moeda

p = float(input('Digite o preço : R$ '))
print(f'o dobro de {moeda.moeda(p)} é {moeda.dobro(p, True)}')
print(f'a metade de {moeda.moeda(p)} é {moeda.metade(p, True)}')
print(f'Aumentando 10% de {moeda.moeda(p)} , ficara {moeda.aumentar(p, 10, True)}')
print(f'Diminuindo 37% de {moeda.moeda(p)} ,ficara {moeda.diminuir(p, 37, True)}')