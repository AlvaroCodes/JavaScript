

function mute (){
    let audio = document.getElementById('adudio_pepas');

    if (audio.muted == false){
        audio.muted = true;
    }else {
        audio.muted = false;
    }
    
}

function play (){
    let audio = document.getElementById('adudio_pepas');
    audio.play();
}

function pause (){
    let audio = document.getElementById('adudio_pepas');
    audio.pause();
}


function volumen (){
    let audio = document.getElementById('adudio_pepas');
    let volumen = document.getElementById('volumen').value;
    console.log(volumen/100);
    audio.volume = (volumen/100);
}


function avanzar (){
    let audio = document.getElementById('adudio_pepas');
    audio.currentTime+= 10;
}

function reducir (){
    let audio = document.getElementById('adudio_pepas');
    audio.currentTime-= 10;
}