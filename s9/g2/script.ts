


fetch("media.json")
.then(response => response.json())
.then(media =>{
console.log(media)


let audioarr : any = []
let videoarr : any = []

media.audioarr.forEach((elemento:any )=>{

    audioarr.push(elemento)
})

media.videoarr.forEach((elemento:any )=>{

    videoarr.push(elemento)
})


})


function crealiste (p:any){
    
    let audiop = document.querySelector("#audio")
    
        for (var i = 0; i < p.length; i++) {
            var li: any = document.createElement('li')
            li.addEventListener('click')
            audiop.append(li)
            li.innerText = p[i].audio_name
        }
    

    }
    






















  /*  fetch('audio.json')
    .then(response => response.json())
    .then(risposta => {
        creaListAudio(risposta)
    })

fetch('video.json')
    .then(response => response.json())
    .then(risposta => {
        creaListaVideo(risposta)
    })

var selAudio = document.querySelector('#player-audio')
var selVideo = document.querySelector('#player-video')
var video = document.querySelector('#video')
var audio = document.querySelector('#audio')

function creaListAudio(p: any) {
    for (var i = 0; i < p.length; i++) {
        var creaAudioLi: any = document.createElement('li')
        creaAudioLi.addEventListener('click', pAudio)
        selAudio.append(creaAudioLi)
        creaAudioLi.innerText = p[i].audio_name
    }
}
function creaListaVideo(p: any) {
    for (var i = 0; i < p.length; i++) {
        var creaVideoLi = document.createElement('li')
        creaVideoLi.addEventListener('click', pVideo)
        selVideo.append(creaVideoLi)
        creaVideoLi.innerText = p[i].video_name
    }
}
function pVideo() {
    video.setAttribute('src', 'video/' + this.innerText + '.mp4')
}
function pAudio() {
    audio.setAttribute('src', 'audio/' + this.innerText + '.mp3')
}*/











