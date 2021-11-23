casa = float(input('Digite o valor da casa : R$'))
sala = float(input('Qual e o valor do seu salario : R$'))
anos = int(input('Em quantos Anos voce quer pagar : R$'))
minimo = sala * 30 / 100
prestacao = casa / (anos * 12)
print('Para  pagar uma casa de R$ {:.2f} em {} anos '.format(casa, anos),end='')
print(' a prestacao sera de R$ {:.2f} '.format(prestacao))
if prestacao <= minimo:
    print('O emprestimo pode ser CONCEDIDO')
else:
    print('Emprestimo NEGADO!')