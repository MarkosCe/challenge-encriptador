const textarea = document.getElementById('textareamsg');
    const botonEncriptar = document.getElementById('encriptar');
    const botonDesencriptar = document.getElementById('desencriptar');
    const texto = document.getElementById('parrafo-texto');
    const notFound = document.getElementById('not-found');
    const botonCopiar = document.getElementById('button-copy');
    
    function encriptar(){
        const msg = textarea.value;
        let newmsg = '';
        for(let i=0; i<msg.length;i++){
            if(msg[i]==='e'){
                newmsg += 'enter';
            }else if(msg[i]==='i'){
                newmsg += 'imes';
            }else if(msg[i]==='a'){
                newmsg += 'ai';
            }else if(msg[i]==='o'){
                newmsg += 'ober';
            }else if(msg[i]==='u'){
                newmsg += 'ufat';
            }else{
                newmsg += msg[i];
            }
        }
        
    }

    function displayNotFound(){
        texto.textContent = '';
        botonCopiar.style.display = 'none';
        notFound.style.display = 'block';
    }

    function copiarTexto(){
        navigator.clipboard.writeText(texto.textContent)
            .then(() => {
                console.log('Texto copiado al portapapeles')
            })
        .catch(err => {
        console.error('Error al copiar al portapapeles:', err)
        })
    }

    function encriptarv2(){
        const msg = textarea.value;
        if(msg.length == 0){
            displayNotFound();
            return;
        } 
        var nuevoTexto = msg.replace(/[aeiou]/g, function(letra) {
            if(letra === 'e'){
                return 'enter';
            }else if(letra === 'i'){
                return 'imes';
            }else if(letra === 'a'){
                return 'ai';
            }else if(letra === 'o'){
                return 'ober';
            }else if(letra === 'u'){
                return 'ufat';
            }else{
                return letra
            }
        });
        texto.textContent = nuevoTexto;
        notFound.style.display = 'none';
        botonCopiar.style.display = 'inline';
    }

    function desEncriptar(){
        const msg = textarea.value;
        if(msg.length == 0){
            displayNotFound();
            return;
        }
        var nuevoTexto = msg.replace(/(enter|imes|ai|ober|ufat)/g, function(match, grupo) {
            if(grupo === 'enter'){
                return 'e';
            }else if(grupo === 'imes'){
                return 'i';
            }else if(grupo === 'ai'){
                return 'a';
            }else if(grupo === 'ober'){
                return 'o';
            }else if(grupo === 'ufat'){
                return 'u';
            }
        });
        texto.textContent = nuevoTexto;
        notFound.style.display = 'none';
        botonCopiar.style.display = 'inline';
    }

    botonEncriptar.onclick = encriptarv2;
    botonDesencriptar.onclick = desEncriptar;
    botonCopiar.onclick = copiarTexto;