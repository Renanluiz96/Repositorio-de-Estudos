nome = str(input('Digite seu nome completo'))
print('Analisando seus dados ...')

print('Seu nome em maiuscula e {}'.format(nome.upper()))
print('Seu nome em minuscula e {}'.format(nome.lower()))
print('Seu nome ao todo tem {}'.format(len(nome) - nome.count(' ')))
#print('Seu Primeiro nome tem {} letras'.format(nome.find(' ')))
separa = nome.split()
print('Sei primeiro nome tem {} letras'.format(separa[0], len(separa[0])))
