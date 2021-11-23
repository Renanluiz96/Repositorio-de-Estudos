km = float(input('quantos km rodados ?'))
dias = int(input('Quantos dias alugados ?'))
aluguel = (km * 0.15) + (dias * 60)

print('Voce alugou carro por {} dias \n e rodou {} km  \n  e o valor total a pagar e : R$ {}'.format(dias, km,aluguel))
