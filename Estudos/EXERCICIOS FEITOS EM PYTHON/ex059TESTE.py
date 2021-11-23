n1 = int(input('Primeiro valor'))
n2 = int(input('Segundo valor'))
opcao = 0
while opcao != 5:
    print('''    [ 1 ]Somar
    [ 2 ] Multiplicar
    [ 3 ]Maior
    [ 4 ]Novos numeros
    [ 5 ]Sair do programa''')
    opcao = int(input('Digite Sua Opção :'))
    if opcao == 1:
        soma = n1 + n2
        print('A soma entre {} + {} , resulta em {}'.format(n1, n2, soma))
    elif opcao == 2:
        multi = n1 * n2
        print('A Multiplicação entre {} x {} , resulta em {} '.format(n1, n2,multi))
    elif opcao == 3:
        if n1 > n2:
            maior = n1
        else:
            maior = n2
        print('O maior valor entre {} e {} , o numero {} é o maior'.format(n1, n2, maior))
    elif opcao == 4:
        print('Digite novamente seus valores')
        n1 = int(input('Primeiro valor'))
        n2 = int(input('Segundo valor'))
    elif opcao == 5:
        print('Finalizando')
    else:
        print('Opcao invalida , por favor digite novamente')
print('=-=' * 10)
print('Fim do programa , Volte sempre')


