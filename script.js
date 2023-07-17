console.log('Welcome to Spotify')

let songIndex = 0;
let audioElement = new Audio('song/letmeloveyou.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));



// audioElement.play();
let songs=[
    {songName: "Let me love you", filePath:"song/letmeloveyou.mp3", coverPath:"covers/download (2).jpg"},
    {songName: "Calm down", filePath:"song/Calm-Down-Calm-Down(PaglaSongs).mp3", coverPath:"covers/download (1).jpg"},
    {songName: "Gangster's Paradise", filePath:"song/Gangsta's-Paradise(PagalWorld).mp3", coverPath:"covers/download (3).jpg"},
    {songName: "Gangnam Style", filePath:"song/Gangnam Style PSY (1).mp3", coverPath:"covers/psy.jpg"},
    {songName: "Despacito", filePath:"song/Despacito(PagalWorld).mp3", coverPath:"covers/despacito.webp"},
    {songName: "God's Plan", filePath:"song/Drake-GODS-PLAN.mp3", coverPath:"covers/drake.webp"},
    {songName: "Get low", filePath:"song/Get Low (Furious 7) Dillon Francis N Dj Snake.mp3", coverPath:"covers/dj-snake.webp"},
    {songName: "24K Magic", filePath:"song/Bruno_Mars_-_24K_Magic-Luvmp.com_.mp3", coverPath:"covers/bruno.webp"},
    {songName: "Animals", filePath:"song/Animals - Maroon 5- [PagalWorld.NL].mp3", coverPath:"covers/animals.webp"},
    {songName: "Good Life", filePath:"song/G-Eazy-Kehlani-Good-Life-(BeatzJam.com).mp3", coverPath:"covers/g-eazy.webp"},
    
]

songItems.forEach((element,i)=>{
    // element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songItem")[0].innerText = songs[i].songName;
})


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

// Listen to Events

audioElement.addEventListener('timeupdate',()=>{
   

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration)/100);
})

const makeAllPlays = ()=>{
    e.target.classList.add('fa-pause-circle');
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
    })
})