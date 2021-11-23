aluno = dict()
aluno['nome'] = str(input('Nome : ')),
aluno['media']= float(input('Qual a média: '))
if aluno['media'] >= 7:
    aluno['situação'] = 'Aprovado'
elif 5 <= aluno['media'] < 7:
    aluno['situacao'] = 'Recuperação'
else:
    aluno['situacao'] = 'Reprovado'
print('='*30)
for k, v in aluno.items():
    print(f'  -{k} é igual a {v}')