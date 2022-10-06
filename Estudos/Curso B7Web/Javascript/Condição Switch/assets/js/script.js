//Condicional Switch é basicamente uma condicional que eu tenho multiplos resultados.

let profession = "ve" //Voce faz uma variavel com o que voce quer testar aqui eu vou fazer por exemplo com 3 profissões cada 1 vai executar um codigo diferente

console.log("Profissão: " + profession)

switch(profession) { //Uso o switch somente passando a "variavel"
   case 'fiscal' : // e logo abaixo eu uso o comando case "caso"  para caso for : ai do lado em aspas voce coloca o resultado caso o que tiver na variavel for o que esta nesta situação do case , por exemplo se a variavel profession for fiscal ele vai executar o codigo abaixo
      console.log("Sua camisa sera Verde")// Aqui é o codigo aqui basicamente so coloquei um console log mostrand a cor da camisa em determinada profissão
      break; // E voce sempre tem que colocar o comando break e ; em todos os cases para que se caso a condição deste case for satisfeita ou seja foi este case que executo , ele não deixa ir para o proxima condição encerrando o codigo por aqui mesmo
   case 'policial' :
      console.log("Sua camisa sera Azul")
      break;
   case 'bombeiro' :
      console.log("Sua camisa sera Vemelha")
      break;
   default : // E esta condição para que se por acas nenhuma das condição do switch que eu mencionei acima não forem atendidas ele executara o default (padrão) que seria a condição padrão . O default por padrão sempre fica por ultimo no switch
      console.log("Sua camisa sera Preta")
      break;
}