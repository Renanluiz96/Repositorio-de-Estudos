resp = 'Ss'
soma = quant = num = maior = menor = 0
while resp in 'Ss':
    num = int(input('Digite um numero :'))
    quant += 1
    soma += num
    if quant == 1:
        maior = menor = num
    else:
        if num > maior:
            maior = num
        if num < menor:
            menor = num
    resp = str(input('Voce quer continuar ? [S/N]')).upper().strip()[0]
media = soma / quant
print('A soma de {} numeros foi {}'.format(quant, soma))
print('A media dos {} numeros foi {:.2f}'.format(quant, media))
print('E o maior numero foi {} , e o menor foi {}'.format(maior, menor))