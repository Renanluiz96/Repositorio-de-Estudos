ficha = list()
while True:
    nome = str(input('Nome do aluno :'))
    nota1 = float(input('Primeira nota :'))
    nota2 = float(input('Segunda nota :'))
    media = (nota1 + nota2) / 2
    ficha.append([nome, [nota1, nota2], media])
    resp = str(input('Voce quer continuar ? [S/N]'))
    if resp in 'Nn':
        break
print('-='* 30)
print(f'{"No.":.<4}{"NOME":<10}{"MEDIA":>8}')
print('-'* 26)
for i , a in enumerate(ficha):
    print(f'{i +1:<4}{a[0]:<10}{a[2]:>8}')
while True:
    print('-'*35)
    opc = int(input('Voce quer mostrar a nota de qual aluno ? (999 Interrompe)'))
    if opc == 999:
        print('FINALIZANDO')
        break
    if opc <= len(ficha) - 1:
        print(f'Notas de {ficha[opc][0]} são : {ficha[opc][1]}')
print('<<< VOLTE SEMPRE >>>')