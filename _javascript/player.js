const video = document.getElementById("playerCustomizado");

/// PLAY e PAUSA
function playpause() {
    if (video.paused === true) {
        video.play();
        
    } else
        video.pause();

}

// TELA CHEIA
function Telacheia() {
    video.requestFullscreen();
}

// AMPLIAR TELA
function Ampliar() {
    video.width = 800;

}
// REDUZIR TELA
function Reduzir() {
    video.width = 400;
}

// TAMANHO NORMAL
function Tamanhonormal() {
    video.width = 700;

}
/// AUMENTAR SOM
function Volumemais() {
    video.volume = video.volume + 0, 9;

}

/// DIMINUIR O SOM
function Volumemenos() {
    video.volume = video.volume - 0.1;

}
/// MUDO
function Mute() {
    if (video.muted) {
        video.muted = false;
    }

    else {
        video.muted = true;
    }

}