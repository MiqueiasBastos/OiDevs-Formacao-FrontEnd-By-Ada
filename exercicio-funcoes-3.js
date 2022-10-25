/*
  Faça um programa que converta da notação de 24 horas para a notação de 12 horas.
  Por exemplo, o programa deve converter 14:25 em 2:25 P.M. 
  A entrada é dada em dois inteiros. 
  Deve haver pelo menos duas funções: uma para fazer a conversão e uma para a saída.
*/

function converterHora(hora){
  if(typeof hora !== 'number' || hora < 0 || hora > 24){
    return 'Insira uma hora válida';
  }
  if(hora > 12) {
    return hora - 12;
  }
  return hora;
}

function formatarHoraEmAmPm(hora, minuto){
  let horaConvertida = converterHora(hora);
  if(horaConvertida === 'Insira uma hora válida' || minuto < 0 || minuto > 59){
    return 'Insira uma hora válida';
  }
  let prefixo = hora > 12 ? 'P.M.' : 'A.M.'

  return `${horaConvertida.toString().padStart(2, '0')}:${minuto.toString().padStart(2,'0')} ${prefixo}`;
}

console.log(formatarHoraEmAmPm(23,59))
console.log(formatarHoraEmAmPm(1,30))
console.log(formatarHoraEmAmPm(22,22))
console.log(formatarHoraEmAmPm(0,0))
console.log(formatarHoraEmAmPm(0,60)) // Erro

