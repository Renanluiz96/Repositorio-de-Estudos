nome = str(input('Digite uma frase :')).upper().strip()
print('A letra A aparece {} vezes  na frase '.format(nome.count('A')))
print('A primeira letra A apareceu na posicao {}'.format(nome.find('A')+1))
print('A ultimaa letra A apareceu na posicao {}'.format(nome.rfind('A')+1))