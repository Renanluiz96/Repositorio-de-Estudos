from ex107 import moeda

p = float(input('Digite o preço : R$ '))
print(f'o dobro de R${p:.2f} é R${moeda.dobro(p):.2f}')
print(f'a metade de R${p:.2f} é R${moeda.metade(p):.2f}')
print(f'Aumentando 10% de R${p:.2f} , ficara R${moeda.aumentar(p, 10):.2f}')
print(f'Diminuindo 37% de R${p:.2f} ,ficara R${moeda.diminuir(p, 37):.2f}')