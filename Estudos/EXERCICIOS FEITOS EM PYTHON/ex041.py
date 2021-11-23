from datetime import date
atual = date.today().year
nasc = int((input('Qual ano o atleta nasceu  :')))
idade = atual - nasc
print('O atleta tem {} anos.'.format(idade))
if idade <= 9:
    print('O atleta é um nadador MIRIM.')
elif 9 <= idade <= 14:
    print('O atleta é um nadador INFANTIL.')
elif 14 <= idade <= 19:
    print('O atleta é um nadador JUNIOR.')
elif 19 <= idade <= 24:
    print('O atleta é um nadador SÊNIOR.')
elif idade >= 25:
    print('O atleta é um nadador MASTER.')