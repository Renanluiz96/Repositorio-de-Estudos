homem = mulher = maior = idmulher = 0
cont = 1
while True:
    print('-'*30)
    print('    CADASTRAMENTO DE PESSOA')
    print('-'*30)
    idade = int(input('Idade: '))
    if idade >= 18:
        maior += 1
    sexo = str(input('Sexo: [M/F]')).upper().strip()[0]
    if sexo == 'M':
        homem += 1
    elif sexo == 'F':
        mulher += 1
        if idade  <= 20:
            idmulher += 1
    continua = str(input('Quer continuar? [S/N]')).strip().upper()[0]
    if continua == 'S':
        cont += 1
    elif continua == 'N':
        break
    else:
        print('Dados invalidos , tente novamente')
print(f'''Voce tem {maior} Pessoas maiores de idade
Dessas {cont} , Apenas {homem} Homens foram cadastrado
Dessas {cont} , Tem {mulher} Mulheres , e {idmulher} Sao menores de 20 anos''')
