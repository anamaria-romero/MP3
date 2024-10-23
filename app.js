let currentSongIndex = 0;

const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const stop = document.getElementById('stop');
const next = document.getElementById('next');
const back = document.getElementById('back');

const songTitle = document.querySelector('.player__song');
const artistName = document.querySelector('.player__artist');
const albumImage = document.querySelector('.player__img');

play.addEventListener('click', () => audio.play());
pause.addEventListener('click', () => audio.pause());
rewind.addEventListener('click', () => audio.currentTime -= 10);
forward.addEventListener('click', () => audio.currentTime += 10);
stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});

function loadSong(songIndex) {
    const song = playList[songIndex];
    audio.src = song.song;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    albumImage.src = song.img;
    audio.play();
}

next.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % playList.length; 
    loadSong(currentSongIndex);
});

back.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + playList.length) % playList.length; 
    loadSong(currentSongIndex);
});

loadSong(currentSongIndex);
