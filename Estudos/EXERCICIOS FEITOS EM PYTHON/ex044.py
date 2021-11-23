print('-=' * 7, 'LOJA RENAN ', '-=' * 7)
preco = float(input('PREÇO DAS COMPRAS : R$'))
print('''''FORMAS DE PAGAMENTO :
[ 1 ] Á VISTA DINHEIRO / CHEQUE
[ 2 ] Á VISTA CARTAO
[ 3 ] 2X NO CARTAO
[ 4 ] 3X NO CARTAO''''')
fpag = int(input('Qual é a sua opção ?'))
if fpag == 1:
    total = preco - (preco * 10 / 100)
elif fpag == 2:
    total = preco - (preco * 5 / 100)
elif fpag == 3:
    total = preco
    parc = total / 2
    print('Sua compra sera parcelada em 2x de R$ {:.2f} SEM JUROS'.format(parc))
elif fpag == 4:
    total = preco + (preco * 20 / 100)
    totalparc = int(input('Quantas parcelas ?'))
    parcela = total / totalparc
    print('Sua compra sera parcelada em {}x de R$ {:.2f} COM JUROS'.format(totalparc, parcela))
else:
    total = preco
    print('Opcao invalida, tente novamente!')
print('Sua compra de R$ {:.2f} , vai custar {:.2f} no final '.format(preco , total))