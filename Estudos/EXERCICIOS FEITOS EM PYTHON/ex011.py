a = int(input('Qual a altura? '))
c = int(input('Qual o comprimento'))
area = a*c
tinta = area/2
print('A area da parede e ',area, 'm²')
print('e para pintar a parede que mede {} m² \neu vou precisar de {} latas para pintar tudo'.format(area,tinta))