num = (int(input('Digite um valor : ')),
       int(input('Digite outro valor valor :' )),
       int(input('Digite mais um valor : ')),
       int(input('Digite o ultimo valor :' )))
print(f'Voce digitou {num} valores')
print(f'O valor 9 apareceu {num.count(9)} vezes')
if 3 in num:
    print(f'O numero 3 apareceu na {num.index(3)+1}ª posição ')
else:
    print('O valor 3 nao foi digitado em nenhuma posição!')
print('Os valores pares digitados foram',end=' ')
for n in num:
    if n % 2 == 0:
        print(n,end=' ')