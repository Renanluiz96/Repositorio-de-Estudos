distancia = float(input(' Qual a distancia da sua viagem ?'))
print('Voce esta prestes a comecar uma viagem de {} km.'.format(distancia))
preco = distancia * 0.50 if distancia <= 200 else distancia *  0.45
print(' E o preco da sua passagem sera de R$ {:.2f}'.format(preco))