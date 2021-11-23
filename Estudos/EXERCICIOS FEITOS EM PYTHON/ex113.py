def leiaint(msg):
    while True:
        try:
            n = int(input(msg))
        except (ValueError, TypeError):
            print('\033[31mERRO , Por favor digite um numero inteiro valido\033[m')
            continue
        except (KeyboardInterrupt):
            print('\033[31mERRO, programa encerrado pelo usuario\033[m')
            return 0
        else:
            return n


def leiafloat(msg):
    while True:
        try:
            n = float(input(msg))
        except (ValueError, TypeError):
            print('\033[31mERRO ,Por favor digite um numero real valido\033[m')
            continue
        except (KeyboardInterrupt):
            print('\033[31mERRO, Programa finalizado pelo usuario')
            return 0
        else:
            return n

n1 = leiaint('Digite um Valor inteiro : ')
n2 = leiafloat('Digite um Valor Real : ')
print(f'Valor digitado Inteiro foi {n1} , e o valor Real digitado foi {n2}')