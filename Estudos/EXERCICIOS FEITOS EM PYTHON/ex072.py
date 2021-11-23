numero = ('zero', 'um', 'dois', 'tres', 'quatro', 'cinco', 'seis','sete',
          'oito', 'nove', 'dez', 'onze', 'doze','treeze','quatorze','quinze',
          'dezesseis','dezesete','dezoito','dezenove', 'vinte')
while True:
    cont = int(input('Digite um numero :'))
    if 0 <= cont <= 20:
        break
    print('Tente novamente !',end=' ')
print(f'Voce digitou o numero {numero[cont]}.')

