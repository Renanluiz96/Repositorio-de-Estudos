let idade = 5;

//Condição dupla ou mais . Caso voce faça um if e ele não satisfaca a primeira condição voce pode a seguir usar o comando else if e passar uma outra condição e se essa condição for satisfeita ele vai passar. se a primeira condição for satisfeita ele nem tenta o restante ele so vai tentar os outros else if caso a primeira e as em diante não forem satisfeita , ele vai tentar as outras condições que voce passou até dar certo
if (idade < 18) {
   console.log("Voce é uma crianca")
} else if (idade >= 18 && idade < 60) {
   console.log("Voce é um adulto")
} else if (idade >= 60) {
   console.log("voce é um idoso")
}