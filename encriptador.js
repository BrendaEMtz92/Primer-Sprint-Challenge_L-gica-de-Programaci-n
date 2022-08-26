

var buttonEncriptar = document.getElementById("buttonEncriptar");
buttonEncriptar.onclick = encriptandoMensaje;
var mensajeEncriptado = "";

var buttonDesencriptar = document.getElementById("buttonDesencriptar");
buttonDesencriptar.onclick = desencriptandoMensaje;
var mensajeDesencriptado = "";


var buttonCopiar = document.getElementById("buttonCopiar");
buttonCopiar.onclick = copiarMensaje;

var caracteresEspeciales= /[^a-z ]/g;


function encriptandoMensaje(){

    document.getElementById("figuraInicial").style.display = "none";

    mensajeEncriptado ="";
    var mensajeEntrada = document.getElementById("mensajeEntrada").value;
    var mensajeEntrada1= mensajeEntrada.toLowerCase();
    
    for (var i = 0 ; i<mensajeEntrada1.length ; i++ ){
       
        if(mensajeEntrada1 [i]== "a"){
            mensajeEncriptado = mensajeEncriptado + "ai";        
        }
        else if(mensajeEntrada1[i]=="e"){
            mensajeEncriptado = mensajeEncriptado + "enter";     
        }
        else if(mensajeEntrada1[i]=="i"){
            mensajeEncriptado = mensajeEncriptado + "imes";     
        }
        else if(mensajeEntrada1[i]=="o"){
            mensajeEncriptado = mensajeEncriptado + "ober";     
        }
        else if(mensajeEntrada1[i]=="u"){
            mensajeEncriptado = mensajeEncriptado + "ufat";  
        }
        else{
            mensajeEncriptado = mensajeEncriptado + mensajeEntrada1 [i];

        }
    }
        
        document.getElementById("mensajeSalida").value  = mensajeEncriptado;
      
}
       


function desencriptandoMensaje(){

    document.getElementById("figuraInicial").style.display = "none";

    mensajeDesencriptado ="";
    var mensajeSalida = document.getElementById("mensajeEntrada").value;
    var mensajeSalida1 = mensajeSalida.toLowerCase();
    var mensajeDesglosado = mensajeSalida1.split(" ");
    var palabraAdicional = ["ai","enter","imes","ober","ufat"];
        
        

    for (var palabra = 0 ; palabra<mensajeDesglosado.length ; palabra++){
        var palabraDesencriptada = mensajeDesglosado[palabra];
        if(palabraDesencriptada.includes(palabraAdicional[0])){
            var regex = /ai/g;
            palabraDesencriptada =  palabraDesencriptada.replace(regex,"a") +" ";
         }

         if (palabraDesencriptada.includes(palabraAdicional[1])) {
            var regex = /enter/g;
            palabraDesencriptada =  palabraDesencriptada.replace(regex,"e") +" ";
            }

            if (palabraDesencriptada.includes(palabraAdicional[2])) {
                var regex = /imes/g;
                palabraDesencriptada =  palabraDesencriptada.replace(regex,"i") +" ";
                }

                if (palabraDesencriptada.includes(palabraAdicional[3])) {
                    var regex = /ober/g;
                    palabraDesencriptada =  palabraDesencriptada.replace(regex,"o") +" ";
                    }

                    if (palabraDesencriptada.includes(palabraAdicional[4])) {
                        var regex = /ufat/g;
                        palabraDesencriptada =  palabraDesencriptada.replace(regex,"u") +" ";
                        }

            mensajeDesencriptado = mensajeDesencriptado + " " + palabraDesencriptada;
            document.getElementById("mensajeSalida").value  = mensajeDesencriptado;
        }
    }

    function copiarMensaje(){

        var mensajeSalida =document.getElementById("mensajeSalida");
        mensajeSalida.focus();
        document.execCommand("selectAll");
        document.execCommand("copy");
        mensajeSalida.value ="";
        
    }


    function validandoCaracteres() {
        var mensajeEntrada2 = mensajeEntrada1.value.trim().toLowerCase().replace(caracteresEspeciales, '');

        if (mensajeEntrada1.value) {
            mostrarError(error_entrada, 'Ingrese un texto primero!');
            limpiarEntrada();

            return false;
        } else{
            ocultarError($error_entrada);
            ocultarError($error_salida);
    
            return true;
        }
      
    }