const play = document.getElementsByClassName("play")
const stop = document.getElementsByClassName("stop")
const volume = document.querySelector(".volume")

let audio 

for(element of play)
{
    element.addEventListener("click", function()
    {
        let song = this.getAttribute("id")
        audio = new Audio(`./audio/${song}.mp3`)
        audio.play()
    })
}

for(element of stop)
{
    element.addEventListener("click", function(){ audio.pause() })
}

volume.addEventListener("click", function() 
{
    let vol = this.value
    audio.volume = vol
})
