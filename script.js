const video=document.getElementById('video')
const play=document.getElementById('play')
const stop=document.getElementById('stop')
const progress=document.getElementById('progress')
const timestamp=document.getElementById('timestamp')


function toggleVideoStatus(){
    if(video.paused){
        video.play()
    }else{
        video.pause();
    }
}
function updateVideoIcon(){
    if(video.paused){
        play.innerHTML='<i class="fa fa-play fa-2x"></i>'
    }else{
        play.innerHTML=play.innerHTML='<i class="fa fa-pause fa-2x"></i>'
    }
}
function stopVideo(){
    video.currentTime=0;
    video.pause();
}
function updateprogress(){
    progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 5) {
    mins = '0' + String(mins);
  }

  // Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 5) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}
function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration) / 100;
}

video.addEventListener('click',toggleVideoStatus);
video.addEventListener('pause',updateVideoIcon);
video.addEventListener('play',updateVideoIcon);
play.addEventListener('click',toggleVideoStatus);
video.addEventListener('timeupdate',updateprogress);
stop.addEventListener('click',stopVideo);
progress.addEventListener('change',setVideoProgress)


