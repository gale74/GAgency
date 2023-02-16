const video = document.querySelector("#video")
document.querySelector(".fa-pause").style.display = "none"
video.addEventListener("timeupdate", () => {
    let curr = (video.currentTime / video.duration) * 100
    if(video.ended){
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
    }
    document.querySelector('.inner').style.width = `${curr}%`
})

const play = (e) => {
    
    if(video.paused){
        document.querySelector(".fa-play").style.display = "none"
        document.querySelector(".fa-pause").style.display = "block"
        video.play()
    }
    else{
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
        video.pause()
    }
}

const fullScreen = (e) => {
    e.preventDefault()
    video.requestFullscreen()
}

const download = (e) => {
    e.preventDefault()
    let a = document.createElement('a')
    a.href = video.src 
    a.target = "_blank"
    a.download = ""
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

const rewind = (e) => {
    video.currentTime = video.currentTime - ((video.duration/100) * 5)
}
const forward = (e) => {
    video.currentTime = video.currentTime + ((video.duration/100) * 5)
}