n1 = int(input('Primeiro valor:'))
n2 = int(input('Segundo valor:'))
final = 0
opcao = 0
while opcao != 5:
    print('''    [ 1 ] Somar
    [ 2 ] Multiplicar
    [ 3 ] Maior
    [ 4 ] Novos numeros
    [ 5 ] Sair do programa''')
    opcao = int(input('Qual é a sua opção ?'))
    if opcao == 1:
        soma = n1 + n2
        print('A soma entre {} + {} o resultado é {}'.format(n1, n2, soma))
    elif opcao == 2:
        multiplicacao = n1 * n2
        print('A Multiplicacao de {} x {} , resulta em {}'.format(n1, n2, multiplicacao))
    elif opcao == 3:
        if n1 > n2:
            maior = n1
        else:
            maior = n2
        print('Entre {} e {} , o maior numero é {}'.format(n1, n2, maior))
    elif opcao == 4:
        print('Informe os numeros novamente :')
        n1 = int(input('Primeiro valor'))
        n2 = int(input('Segundo valor'))
    elif opcao == 5:
        print('Finalizando...')
    else:
        print('Opção invalida , tente novamente mais tarde!')
    print ('=-=' * 10)
print('Fim do programa volte sempre!')