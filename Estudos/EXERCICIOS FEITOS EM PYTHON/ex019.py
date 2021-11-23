import random
n1 = str(input('primeiro aluno ?'))
n2 = str(input('segundo aluno ?'))
n3 = str(input('teceiro aluno ?'))
n4 = str(input('terceiro aluno ?'))
lista = [n1, n2, n3, n4]
escolhido = random.choice(lista)
print('um professor pediu de maneira aleatoria para um de seus 4 alunos apagasse o quadro\n e ele aleatoriamente chamou '
      'o {} '.format(escolhido))