// Reproductor  de video
const video = document.querySelector('#video1');
const sourceVideo = document.querySelector('#sourceVideo');
let barra_video = document.querySelector('#barra_repro');

// 1.- Botones Video
let play_video = document.querySelector('#play_video');
let pausa_video = document.querySelector('#pausa_video');
let soundOff_video = document.querySelector('#soundOff_video');
let soundOn_video = document.querySelector('#soundOn_video');


let videos = ['videoCorto.mp4', 'videoLargo.mp4'];

let posicionVideo = 0;

barra_video.max = Math.round(video.duration);
video.addEventListener('timeupdate', (event) => {
   barra_video.value = video.currentTime;
});


/* Metodos comunes, reproductor*/
const play = (multimedia, svgPausa, svgPlay) => {multimedia.play(); svgPausa.style.display='inline'; svgPlay.style.display='none';}
const pausa = (multimedia, svgPausa, svgPlay) => {multimedia.pause();  svgPlay.style.display='inline'; svgPausa.style.display='none';}
const atras = (multimedia) => {multimedia.currentTime-=10}
const delante = (multimedia) => {multimedia.currentTime+=10}
const bajarSonido = (multimedia) =>{(multimedia.volume < 0.2)?multimedia.volume = 0 :multimedia.volume-= 0.2;}
const masMusica = (multimedia) => {(multimedia.volume >= 1)?multimedia.volume = 1:multimedia.volume+= 0.2;}
const sonidoOff = (multimedia, soundOffSVG, soundOnSVG) => {multimedia.muted=true; soundOnSVG.style.display='inline'; soundOffSVG.style.display='none';}
const sonidoOn = (multimedia, soundOffSVG, soundOnSVG) => {multimedia.muted=false; soundOffSVG.style.display='inline'; soundOnSVG.style.display='none';}


function cambiarDelante (multimedia, source, arrayMultimedia, posicion) {
   posicion = posicion + 1;

   if (posicion < arrayMultimedia.length){
    
      multimedia.src = './assets/'+arrayMultimedia[posicion];
      source.src = './assets/'+arrayMultimedia[posicion];
   } else {
      posicion = arrayMultimedia.length - 1;
    
   }
   return posicion;
}

function cambiarDetras (multimedia, source, arrayMultimedia, posicion) {
   posicion = posicion - 1;

   if (posicion >=0){
     
      multimedia.src = './assets/'+arrayMultimedia[posicion];
      source.src = './assets/'+arrayMultimedia[posicion];
   }else {
    posicion = 0;
  
   }
   return posicion;
}


// Reproductor de audio
const audio = document.querySelector('#audio');
const audioSource = document.querySelector('#audioSource');
let barra_audio = document.querySelector('#barra_reproAudio');

// 1.- Botones 
let play_audio = document.querySelector('#play_audio');
let pausa_audio = document.querySelector('#pausa_audio');
let soundOff_auido = document.querySelector('#soundOff_video');
let soundOn_audio = document.querySelector('#soundOn_video');


let audios = ['audio.mp3', 'audio1.mp3', 'audio2.mp3'];

let posicionAudio = 0;

barra_audio.max = Math.round(audio.duration);
audio.addEventListener('timeupdate', (event) => {
   barra_audio.value = audio.currentTime;
});

