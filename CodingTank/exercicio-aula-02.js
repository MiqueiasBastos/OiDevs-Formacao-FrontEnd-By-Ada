function calcularIMC(peso, altura) {
    if(typeof peso !== 'number' || peso <= 0){
        return "Dados inválidos"
    }
    if(typeof altura !== 'number' || altura <= 0){
        return "Dados inválidos"
    }

    const resultado = (peso/(altura * altura)).toFixed(2)

    if(resultado < 18.5) {
        return "Seu IMC é: "+resultado+" - Você está abaixo do peso"
    }
    if(resultado >= 18.5 && resultado <= 24.9) {
        return "Seu IMC é: "+resultado+" - Você está no peso ideal"
    }
    if(resultado >= 25 && resultado <= 29.9) {
        return "Seu IMC é: "+resultado+" - Você está pré-obeso"
    }
    if(resultado >= 30 && resultado <= 34.9) {
        return "Seu IMC é: "+resultado+" - Você está com ovesidade grau 1"
    }
    if(resultado >= 35 && resultado <= 39.9) {
        return "Seu IMC é: "+resultado+" - Você está com ovesidade grau 2"
    }
    if(resultado >= 40) {
        return "Seu IMC é: "+resultado+" - Você está com ovesidade grau 3"
    }

    return "Desculpe, não conseguimos calcular seu IMC"
}

console.log(calcularIMC(78, 1.77))