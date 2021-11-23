from datetime import date
atual = date.today().year
totmaior = 0
totmenor = 0
for pess in range(1,8):
    nasc = int(input('Em que ano a {}º pessoa nasceu?'.format(pess)))
    idade = atual - nasc
    if idade >= 21:
       totmaior += 1
    else:
        totmenor += 1
print('Ao total de {} pessoas, {} são maiores de idade'.format(pess, totmaior))
print('Ao total de {} pessoas, {} são menores de idade '.format(pess, totmenor))