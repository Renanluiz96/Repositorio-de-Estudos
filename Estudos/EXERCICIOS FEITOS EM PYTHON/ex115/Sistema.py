from ex115.lib.funcao import *
from ex115.lib.arquivo import *
from time import sleep

arq = 'cursoemvideo.txt'

if not arquivoexiste(arq):
    criararquivo(arq)

while True:
    resposta = menu(['Ver pessoas cadastradas', 'Cadastrar novas pessoas', 'Sair do programa'])
    if resposta == 1:
        #Opção de listar um arquivo
        lerarquivo(arq)
    elif resposta == 2:
        # Opção de cadastrar nova pessoa
        cabecalho('NOVO CADASTRO')
        nome = str(input('Nome :'))
        idade = leiaint('Idade : ')
        cadastrar(arq, nome, idade)
    elif resposta == 3:
        cabecalho('Saindo do sistema ... Até logo!')
        break
    else:
        print('\033[31mERRO , Digite uma opção valida!\033[m')
    sleep(2)