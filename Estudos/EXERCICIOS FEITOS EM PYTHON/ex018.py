import math
an = float(input('Digite o angulo que voce deseja:'))
seno = math.sin(math.radians(an))
print('O angulo de {} tem o seno de {:.2f}'.format(an, seno))
cosseno = math.cos(math.radians(an))
print('O angulo de {} tem o cosseno de {:.2f}'.format(an, cosseno))
tang = math.tan(math.radians(an))
print('O angulo de {} tem a tangente de {:.2f}'.format(an, tang))
