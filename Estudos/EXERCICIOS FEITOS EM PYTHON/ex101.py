def voto(ano):
    from datetime import date
    atual = date.today().year
    idade = atual - ano
    if idade < 18:
        return f'Com {idade} anos: NÃO VOTA.'
    elif 16 <= idade < 18 or idade > 65:
        return f'Com {idade} anos: O VOTO É OPCIONAL.'
    else:
        return f'Com {idade} anos: O VOTO É OBRIGATORIO.'


nasc = int(input('Que ano você nasceu ?'))
print(voto(nasc))