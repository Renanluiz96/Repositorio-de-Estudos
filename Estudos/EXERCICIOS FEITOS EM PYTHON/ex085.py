princ = [[],[]]
valor = 0
for c in range(1,8):
    valor = int(input(f'Digite o {c}º numero: '))
    if valor % 2 == 0:
        princ[0].append(valor)
    else:
        princ[1].append(valor)
princ[0].sort()
princ[1].sort()
print(f'Os numeros impares são: {princ[1]}')
print(f'Os numeros pares são : {princ[0]}')