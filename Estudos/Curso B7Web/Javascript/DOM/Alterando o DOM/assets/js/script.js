//Alterando o conteudo do DOM

//a função innerHTML = voce "inseri" um novo conteudo html pelo dom no seu conteudo

//Aqui por exemplo vou acessar a id pelo getelementbyid e alterar o conteudo HTML deste id , com a função innerHTML. Depois coloca um igual e entre as aspas duplas se voce quiser voce pode colocar todo um html aqui.

//document.getElementById("teste").innerHTML = "Renan <button>Botão</button/> ";

//Esse comando altera somente no navegador , la no seu arquivo html ainda vai estar do jeito que era antes de voce usar o inner, só que voce não pode confundir o que esta na tela do navegador , com o que esta la no seu html. Se voce tirar o inner do seu javascript ali em cima , voce vai ver que na tela vai voltar como era antes

//Alterando o conteud de uma class com a função innerHTML . Como getelementsbyclassname é no plural ele vai retornar um array , então se voce quiser modificar um item somente do array voce coloca o item do array que voce quer alterar em colchetes para especificar qual voce quer alterar
document.getElementsByClassName("lista")[1].innerHTML = 'Item Alterado'


//Alterando o conteudo dentro de um queryselector , aqui usei uma tag dentro do query mais eu posso usar id ou class tambem
document.querySelector('button').innerHTML = 'Outro Botão'

//Alterando o conteudo de um query selectorall que se usa para achar itens que sejam mais de um no caso uma class ou uma tag que pode ter mais de um igual
document.querySelectorAll('.lista')[0].innerHTML = 'Lista 1'
