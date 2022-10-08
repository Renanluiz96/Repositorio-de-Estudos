/*
function calcPct(x, y) {
   return (y / x) * 100
}

let x = 40
let y = 10
let pct = calcPct(40,10)
console.log(`${pct}% de ${x} é ${y}`)*/

/*
function calcularImovel(metragem, quartos) {
   let m2 = 3000
   let preco = 0 
   
   switch (quartos) {
      case 1:
      default:
         preco = metragem * m2
         break
      case 2 :
         preco = metragem * (m2 * 1.2)
         break
      case 3:
         preco = metragem * (m2 * 1.5)
         break
   }

   return preco
}

let metragem = 63;
let quartos = 2;
let preco = calcularImovel(metragem , quartos)
console.log(`A casa custa R$ ${preco}`)
*/

function validar (usuario , senha) {
   if((usuario === "pedro") && (senha === '123')) {
      return true
   }else {
      return false
   }
}

let usuario = "pedro"
let senha = '123'
let validacao = validar(usuario , senha)
if (validacao) {
   console.log('Acesso Concedido')
} else {
   console.log('Acesso NEGADO!')
}