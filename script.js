function Resultado(){

    const altura = document.getElementById("altura")
    const peso = document.getElementById("peso")

    const valor1 = Number(altura.value)
    const valor2 = Number(peso.value)
    
    const resultado = valor2 / (valor1 * valor1)

    document.getElementById("resultado").innerText = "Resultado: " + resultado.toFixed(2) // innerText: adicionar texto no html

    let mensagem = ""

    if(resultado < 16.9){
        mensagem = "Muito abaixo do peso"
    }
    else if (resultado >= 17 && resultado <= 18.4) {
        mensagem = " Abaixo do peso."
    } 
    else if (resultado >= 18.5 && resultado <= 24.9) {
        mensagem = " Seu peso está normal."
    } 
    else if (resultado >= 25 && resultado <= 29.9) {
        mensagem = " Acima do peso."
    } 
    else if (resultado >= 30 && resultado <= 34.9) {
        mensagem = " Obesidade grau 1."
    } 
    else if (resultado >= 35 && resultado <= 39.9) {
        mensagem = " Obesidade grau 2."
    } 
    else if (resultado >= 40) {
        mensagem = " Obesidade grau 3."
    }
    else{
        mensagem = "Digite as informações corretamente"
    }
    
    
    document.getElementById("categoria").innerText = "Categoria: " + mensagem
}
