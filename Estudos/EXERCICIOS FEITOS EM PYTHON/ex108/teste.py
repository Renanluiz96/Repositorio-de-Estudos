from ex108 import moeda

p = float(input('Digite o preço : R$ '))
print(f'o dobro de {moeda.moeda(p)} é {moeda.moeda(moeda.dobro(p))}')
print(f'a metade de {moeda.moeda(p)} é {moeda.moeda(moeda.metade(p))}')
print(f'Aumentando 10% de {moeda.moeda(p)} , ficara {moeda.moeda(moeda.aumentar(p, 10))}')
print(f'Diminuindo 37% de {moeda.moeda(p)} ,ficara {moeda.moeda(moeda.diminuir(p, 37))}')