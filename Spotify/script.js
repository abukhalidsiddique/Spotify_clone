console.log('welcome to spotify');
let songIndex = 0;
let change;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.querySelector('#masterPlay');
let myProgressBar=document.querySelector('#myProgressBar');
let gif=document.querySelector('#gif');
let masterSongName=document.querySelector(`#masterSongName`);
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songListPlay=Array.from(document.getElementsByClassName('songlistplay'));
let songs=
[
  { songName:"Warrio-Mortal", filePath: "songs/1.mp3", coverPath:"covers/1.jpg", duration:"3:50"},
  { songName:"Trap", filePath: "songs/2.mp3", coverPath:"covers/2.jpg", duration:"2:33"},
  { songName:"They- Mad", filePath: "songs/3.mp3", coverPath:"covers/3.jpg", duration:"4:33"},
  { songName:"Plug -Walk", filePath: "songs/4.mp3", coverPath:"covers/4.jpg", duration:"4:27"},
  { songName:"Despacito", filePath: "songs/5.mp3", coverPath:"covers/5.jpg", duration:"3:28"},
  { songName:"Safety Dance", filePath: "songs/6.mp3", coverPath:"covers/6.jpg", duration:"3.29"},
  { songName:"Back it Up", filePath: "songs/7.mp3", coverPath:"covers/7.jpg", duration:"4:33"},
  { songName:"Rain Over Me", filePath: "songs/8.mp3", coverPath:"covers/8.jpg", duration:"3.50"},
  { songName:"True Love", filePath: "songs/9.mp3", coverPath:"covers/9.jpg", duration:"3:24"},
  { songName:" Titenium", filePath: "songs/10.mp3", coverPath:"covers/10.jpg", duration:"4:27"},
]

songItems.forEach((element, i)=>{ 
  element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
  element.getElementsByClassName("timestamp")[0].innerText = songs[i].duration;
})

 masterPlay.addEventListener('click',()=>{
     if(audioElement.paused || audioElement.currentTime<=0)
     {
       audioElement.play();
       masterSongName.innerText = songs[songIndex].songName;

       change=document.getElementById(`${songIndex}`);
       change.classList.remove('fa-play-circle');
       change.classList.add('fa-pause-circle');
      
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
       gif.style.opacity=1;
     }

     else
     {
      audioElement.pause();
      
      change=document.getElementById(`${songIndex}`);
      change.classList.remove('fa-pause-circle');
      change.classList.add('fa-play-circle');
      
      masterPlay.classList.remove('fa-pause-circle');
      masterPlay.classList.add('fa-play-circle');
      gif.style.opacity=0;
     }
  }
 )

 audioElement.addEventListener('timeupdate',()=>
{
   progress= parseFloat((audioElement.currentTime/audioElement.duration)*100);
   myProgressBar.value= progress;
})

myProgressBar.addEventListener('change',()=>
{
  audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})

const makeAllPlays = () =>
{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
  {
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  })
}

 

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
  element.addEventListener('click', (e) => {
      const clickedIndex = parseInt(e.target.id);

      if (songIndex === clickedIndex && !audioElement.paused) {
          
          audioElement.pause();
          e.target.classList.remove('fa-pause-circle');
          e.target.classList.add('fa-play-circle');
          masterPlay.classList.remove('fa-pause-circle');
          masterPlay.classList.add('fa-play-circle');
          gif.style.opacity = 0;
      } else {
           
          makeAllPlays();
          songIndex = clickedIndex;
          e.target.classList.remove('fa-play-circle');
          e.target.classList.add('fa-pause-circle');
          audioElement.src = `songs/${songIndex + 1}.mp3`;
          masterSongName.innerText = songs[songIndex].songName;
          audioElement.currentTime = 0;
          audioElement.play();
          gif.style.opacity = 1;
          masterPlay.classList.remove('fa-play-circle');
          masterPlay.classList.add('fa-pause-circle');
      }
  });
});

  
document.getElementById('next').addEventListener("click",()=>
{
  if(songIndex>=9)
  {
    songIndex=0;
  }
  else
  {
    songIndex+=1;
  }
  makeAllPlays(); 
             audioElement.src=`songs/${songIndex+1}.mp3`;
             masterSongName.innerText = songs[songIndex].songName;
             audioElement.currentTime=0;
             audioElement.play();
             gif.style.opacity = 1;

             change=document.getElementById(`${songIndex}`);
             change.classList.remove('fa-play-circle');
             change.classList.add('fa-pause-circle');

             masterPlay.classList.remove('fa-play-circle');
             masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener("click",()=>
  {
    if(songIndex<=0)
    {
      songIndex=9;
    }
    else
    {
      songIndex-=1;
    }
  
    makeAllPlays();           
    audioElement.src=`songs/${songIndex+1}.mp3`;
               masterSongName.innerText = songs[songIndex].songName;
               audioElement.currentTime=0;
               audioElement.play();
               gif.style.opacity = 1;

               change=document.getElementById(`${songIndex}`);
               change.classList.remove('fa-play-circle');
               change.classList.add('fa-pause-circle');

               masterPlay.classList.remove('fa-play-circle');
               masterPlay.classList.add('fa-pause-circle');
  })
 

