let numero1 = prompt('Insira o primeiro numero');
let operação = prompt('Escolha a operação');
let numero2 = prompt('Insirina o segundo numero');
if (operação ==='+'){
function soma(a, b){
    return a + b;
}
const x = soma(parseInt(numero1), parseInt (numero2));
    alert (`O resultado é ${x}`)
}
else if (operação ==='-'){
    function soma(a, b){
        return a - b;
    }
    const y = soma(parseInt(numero1), parseInt (numero2));
        alert (`O resultado é ${y}`)
}
else if (operação === 'x'){
    function soma(a, b){
        return a * b;
    }
    const w = soma(parseInt(numero1), parseInt (numero2));
        alert (`O resultado é ${w}`)
}
else if (operação === '÷'){
    function soma(a, b){
        return a / b;
    }
    const z = soma(parseInt(numero1), parseInt (numero2));
    alert(`O seu resultado é ${z}`)
}
else{
    alert('Ops! Parece que essa operação não existe')
}