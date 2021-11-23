peso = float(input('Qual é o seu peso  (Kg):'))
altura = float(input('Qual é a sua altura (M):'))
imc = peso / (altura**2)
print('Seu IMC é {:.2f} e voce esta '.format(imc), end=' ')
if imc < 18.5:
    print('Abaixo do peso!')
elif 18.5 <= imc  < 25:
    print('Peso Ideal!')
elif 25 <= imc < 30:
    print('Acima do peso!')
elif 30 <= imc < 40:
    print('Obesidade!')
else:
    print('Obesidade Mórbida!')