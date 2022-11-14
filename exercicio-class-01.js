// Desenvolver a classe StringMelhor que herda da classe String e implementa o método primeiraLetraMaiuscula

class StringMelhor extends String {
	constructor(string) {
		return super(string);
	}

    primeiraLetraMaiuscula(){
        const stringArray = this.toLowerCase().split('');
        stringArray[0] = stringArray[0].toLocaleUpperCase();
        return stringArray.join('');
    };
}

const str = new StringMelhor('exemplo')
console.log(str.primeiraLetraMaiuscula()) // Exemplo

const outraStr = new StringMelhor('exmPLO')
console.log(outraStr.primeiraLetraMaiuscula()) // Exemplo