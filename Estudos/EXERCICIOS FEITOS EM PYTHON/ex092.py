from datetime import datetime
pessoa = {'nome': str(input('Nome: ')),
          'nasc': int(input('Ano de Nascimento: ')),
          'ctps': int(input('Carteira de trabalho (0 Não tem): '))}
if pessoa['ctps'] > 0:
    pessoa['contratação'] = int(input('Ano da Contratação :'))
    pessoa['salario'] = float(input('Salario : R$'))
pessoa['idade'] = datetime.now().year - pessoa['nasc']
pessoa['Aposentadoria'] = pessoa['idade'] + ((pessoa['contratação'] + 35) - datetime.now().year)
del pessoa['nasc']
print('=-' * 30)
for i, v in pessoa.items():
    print(f'{i} tem o valor {v}')
