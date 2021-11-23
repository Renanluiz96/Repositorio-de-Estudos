temp = []
princ = []
mai = men = 0
while True:
    temp.append(str(input('Nome: ')))
    temp.append(float(input('Peso:')))
    if len(princ) == 0:
        mai = men = temp[1]
    else:
        if temp[1] > mai:
            mai = temp[1]
        if temp[1] < men:
            men = temp[1]
    princ.append(temp[:])
    temp.clear()
    resp = str(input('Quer continuar ? [S/N]'))
    if resp in 'Nn':
        break
print(f'Ao total foram cadastradas {len(princ)} Pessoas')
print(f'A pessoa mais pesada pesa {mai} e são :',end='')
for p in princ:
    if p[1] == mai:
        print(f'[{p[0]}]',end=' ')
print()
print(f'A pessoa mais leve pesa {men} e são:',end=' ')
for p in princ:
    if p[1] == men:
        print(f'[{p[0]}]',end=' ')
print()