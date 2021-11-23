from datetime import  date
atual = date.today().year
nasc = int(input('Ano de nascimento :'))
idade = atual - nasc
print('Quem nasceu em {} tem {} em {}.'.format(nasc, idade, atual))
if idade == 18:
    print('Voce tem que se alistar imediatamente !!!')
elif idade < 18:
    saldo = 18 - idade
    print('Voce ainda não tem 18 anos . Ainda faltam {} anos para o alistamento'.format(saldo))
    ano = atual + saldo
    print('Seu alistamento sera em {}'.format(ano))
elif idade > 18:
    saldo = idade - 18
    print('Voce ja deveria ter se alistado , há {} anos. '.format(saldo))
    ano = atual - saldo
    print('Seu alistamento foi em {}'.format(ano))
