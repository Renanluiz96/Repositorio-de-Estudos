galera = list()
pessoa = dict()
soma = media = 0
while True:
    pessoa.clear()
    pessoa['nome'] = str(input('Nome: '))
    while True:
        pessoa['sexo'] = str(input('Digite o sexo : [M/F]')).upper()[0]
        if pessoa['sexo'] in 'MF':
            break
        print('Erro , responda [M/F]')
    pessoa['idade'] = int(input('Qual a idade :'))
    soma += pessoa['idade']
    galera.append(pessoa.copy())
    while True:
        resp = str(input('Quer Continuar ? [S/N]')).upper()[0]
        if resp in 'SN':
            break
    if resp in 'N':
        break
print('='*30)
print(f'A) Foram cadastradas {len(galera)} pessoas')
media = soma / len(galera)
print(f'B) A media de pessoas foram {media:5.2f}')
print('C) A lista de mulheres foi : ', end='')
for p in galera:
    if p['sexo'] in 'F':
        print(f'{p["nome"]}',end='')
print(f'D) As pessoas que estão acima da média são:')
for p in galera:
    if p['idade'] >= media:
        print('    ')
        for k, v in p.items():
            print(f'{k} = {v}', end='')
        print()
