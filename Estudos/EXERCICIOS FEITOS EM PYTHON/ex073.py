print('-='*50)
times = ('vasco', 'flamengo','santos','sao paulo', 'gremio','palmeiras',
         'avai','figueirense','fluminense','corintians','atletico-MG',
         'Fortaleza','bragantino','internacional','atletico-PR','Atlético-GO',
         'Americo','Americo-MG','Cuiaba','Ceara')
print(f'Lista de Times do Brasileirão: {times}')
print('-='*50)
print(f'Os 5 Primeiros sao : {times[:5]}')
print('-='*50)
print(f'Os ultimos 4 times são : {times[-4:]}')
print('-='*50)
print(f'A ordem alfabetica dos times sao: {sorted(times)}')
print('-='*50)
print(f'O fortaleza esta na {times.index("Fortaleza")+1}ª posição!')