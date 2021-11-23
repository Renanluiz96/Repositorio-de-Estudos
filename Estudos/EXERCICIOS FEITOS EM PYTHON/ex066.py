cont = soma = 0
while True:
    n = int(input('Digite um valor [999 para parar] :'))
    if n == 999:
        break
    cont += 1
    soma += n
print(f'Voce digitou {cont} e a soma de todos esses numero foram {soma}')