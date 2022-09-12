var texto = document.getElementById("texto")
var txtMais = document.getElementById("txtMais")
var txtNumero = document.getElementById("txtNumero")
var txtResultado = document.getElementById("txtResultado")
var mais = document.getElementById("+")


function Porcentagem(){

    txtMais.value="%"

}

function Del(){

    texto.value = ""
    txtMais.value = ""
    txtNumero.value = ""
    txtResultado.value = ""

}

function Sete(){

    if(txtMais.value != ""){

        txtNumero.value += "7"

    }
    else{

        texto.value += "7"

    }

}

function Oito(){

    if(txtMais.value != ""){

        txtNumero.value += "8"

    }
    else{

        texto.value += "8"

    }
}

function Nove(){

    if(txtMais.value != ""){

        txtNumero.value += "9"

    }
    else{

        texto.value += "9"

    }

}

function Vezes(){

    txtMais.value = "X"

    if(txtResultado.value != ""){

        texto.value = txtResultado.value.replace('=','')
        txtNumero.value = ""
        txtResultado.value = ""
        
    }

}

function Quatro(){
    
    if(txtMais.value != ""){

        txtNumero.value += "4"

    }
    else{

        texto.value += "4"

    }

}

function Cinco(){
  
    if(txtMais.value != ""){

        txtNumero.value += "5"

    }
    else{

        texto.value += "5"

    }

}

function Seis(){

    if(txtMais.value != ""){

        txtNumero.value += "6"

    }
    else{

        texto.value += "6"

    }

}

function Menos(){

    txtMais.value = "-"

    if(txtResultado.value != ""){

        texto.value = txtResultado.value.replace('=','')
        txtNumero.value = ""
        txtResultado.value = ""
        
    }

}

function Um(){

    if(txtMais.value != ""){

        txtNumero.value += "1"

    }
    else{

        texto.value += "1"

    }
    
}

function Dois(){

    if(txtMais.value != ""){

        txtNumero.value += "2"

    }
    else{

        texto.value += "2"

    }

}

function Três(){

    if(txtMais.value != ""){

        txtNumero.value += "3"

    }
    else{

        texto.value += "3"

    }
}

function Mais(){
    
    txtMais.value = "+"

    if(txtResultado.value != ""){

        texto.value = txtResultado.value.replace('=','')
        txtNumero.value = ""
        txtResultado.value = ""
        
    }

}

function Barra(){

    txtMais.value = "/"

    if(txtResultado.value != ""){

        texto.value = txtResultado.value.replace('=','')
        txtNumero.value = ""
        txtResultado.value = ""
        
    }

}

function Zero(){

    if(txtMais.value != ""){

        txtNumero.value += "0"

    }
    else{

        texto.value += "0"

    }

}


function Virgula(){

    if(txtMais.value != ""){

        if(txtNumero.value != ""){

            var virgula = txtNumero.value.indexOf(',')

            if (virgula == -1){
                txtNumero.value += ","
            }

        }
        
    } 

    else{

        if(texto.value != ""){

            if(txtNumero.value == ""){

                var virgula = texto.value.indexOf(',')

                if(virgula == -1){

                    texto.value += ","

                }
                 

            }

        }

    }
        
}
function Igual(){

    if(txtMais.value == "+"){

        if(texto.value == ""){

            texto.value = "0"

        }

        if(txtNumero.value == ""){

            txtNumero.value = "0"

        }

        var conta = texto.value
        var conta2 = txtNumero.value
        var resultado = parseFloat(conta.replace(',','.',',')) + parseFloat(conta2.replace(',','.'))

        txtResultado.value = "= " + resultado

    }

    if(txtMais.value == "-"){

        if(texto.value == ""){

            texto.value = "0"

        }

        if(txtNumero.value == ""){

            txtNumero.value = "0"

        }

        var conta = texto.value
        var conta2 = txtNumero.value
        var resultado = parseFloat(conta.replace(',','.')) - parseFloat(conta2.replace(',','.'))

        txtResultado.value = "= " +  resultado

    }

    if(txtMais.value == "X"){

        if(texto.value == ""){

            texto.value = "0"

        }

        if(txtNumero.value == ""){

            txtNumero.value = "0"

        }

        var conta = texto.value
        var conta2 = txtNumero.value
        var resultado = parseFloat(conta.replace(',','.')) * parseFloat(conta2.replace(',','.'))

        txtResultado.value = "= " +  resultado

    }

    if(txtMais.value == "%"){

        if(texto.value == ""){

            texto.value = "0"

        }
        
        if(txtNumero.value == ""){

            txtNumero.value = "0"

        }

        var conta = texto.value
        var conta2 = txtNumero.value
        var resultado = parseFloat(conta.replace(',','.')) * parseFloat(conta2.replace(',','.')) / 100

        txtResultado.value = "= " + resultado

    }

    if(txtMais.value == "/"){

        if(texto.value == ""){

            texto.value = "0"

        }

        if(txtNumero.value == ""){

            txtNumero.value = "0"

        }

        var conta = texto.value
        var conta2 = txtNumero.value
        var resultado = parseFloat(conta.replace(',','.')) / parseFloat(conta2.replace(',','.'))

        txtResultado.value = "= " +  resultado

    }
    
    if(txtMais.value == ""){

        txtResultado.value = "= " + texto.value

    }

}
