function main() { 
    const num1 = parseFloat(document.getElementById('num1').value)
    const num2 = parseFloat(document.getElementById('num2').value)
    const resp = document.getElementById('resp')
    var texto = ''

    if(document.getElementById('soma').checked) { 
        texto = soma(num1, num2)
    } else if (document.getElementById('sub').checked) { 
        texto = sub(num1, num2)
    } else if (document.getElementById('multi').checked) { 
        texto = multi(num1, num2)
    } else if (document.getElementById('divisao').checked) { 
        texto = divisao(num1, num2)
    }
    resp.innerHTML = `
    Resposta = ${texto}`
}

function soma(x, y) { 
    return (x+y)
}

function sub(x, y) { 
    return (x-y)
}

function multi(x, y) {
    return (x*y)
}

function divisao(x, y) {
    return (x/y)
}
