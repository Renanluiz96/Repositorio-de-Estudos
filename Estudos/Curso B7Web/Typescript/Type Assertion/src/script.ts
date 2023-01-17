// Type Assertion = Seria como dar um auxilio para o typescript quando ele fica na duvida sobre algum elemento , ai voce usa a propriedade "as" ao lado da variavel , e coloca por exemplo se especificando mais para o typescript entender.

// Exemplo o HTMLElement - que seria para o type de elementos html , mais elementos html existem diversos, então tem alguns que o typescript pode não intender o que voce quer , e pode apresentar um erro , voce usa o as para auxiliar
let idadeField = document.getElementById('idade') as HTMLInputElement;

// Aqui por exemplo quero a propriedade value , mais somente o tipo input tem esta propriedade value, então para auxiliar o typescript a entender o que voce quer, voce coloca um -  as HTMLInputElement ; ai o typescript vai entender que voce esta querendo um elemento html do tipo  input.
console.log( idadeField.value);