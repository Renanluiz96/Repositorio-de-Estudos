from time import sleep
def maior(* num):
    print('=' *30)
    print('Analisando dados ...')
    cont = mai = 0
    for valor in num:
        print(f'{valor} ', end='')
        sleep(0.3)
        if cont == 0:
            mai = valor
        else:
            if valor > mai:
                mai = valor
        cont += 1
    print(f'Foram informados {cont} Valores!')
    print(f'E o maior valor foi {mai}!')



#programa principal
maior(7, 2, 4, 5, 3, 10)
maior(5, 0, 15, 23, 35)
