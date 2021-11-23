def leiainteiro (msg) -> object:
    valido = False
    while not valido:
        entrada = str(input(msg)).replace(',','.').strip()
        if entrada.isalpha() or entrada == '':
            print(f'\033[0;31mERRO: \"{entrada}\" é um preço invalido !\033[m')
        else:
            valido = True
            return float(entrada)