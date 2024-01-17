console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
  {songName: " Gumbaya", filePath: "music\\Kelvin Momo Momo's Private School\\01 Gumbaya (feat_ Denny Dugg).mp3", coverPath: "music/Kelvin Momo Momo's Private School/AlbumArtSmall.jpg"},
    {songName: "Lately", filePath: "music\\Kelvin Momo Momo's Private School\\02 Lately (feat_ Blissful Sax).mp3", coverPath: "music/Kelvin Momo Momo's Private School/AlbumArtSmall.jpg"},
    {songName: "Soul To Soul", filePath: "music\\Kelvin Momo Momo's Private School\\03 Soul To Soul (feat_ Babalwa M).mp3", coverPath: "music/Kelvin Momo Momo's Private School/AlbumArtSmall.jpg"},
    {songName: "Thougths of You", filePath: "music\\Kelvin Momo Momo's Private School\\04 Thoughts of You.mp3", coverPath: "music/Kelvin Momo Momo's Private School/AlbumArtSmall.jpg"},
    {songName: "Kuwe", filePath: "music\\Kelvin Momo Momo's Private School\\05 Kuwe (feat_ Babalwa M).mp3", coverPath: "music/Kelvin Momo Momo's Private School/AlbumArtSmall.jpg"},
    {songName: "Sabel", filePath: "music\\Kelvin Momo Momo's Private School\\06 Sabel (feat_ Babalwa M).mp3", coverPath: "music/Kelvin Momo Momo's Private School/AlbumArtSmall.jpg"},
    {songName: "Kholwa", filePath: "music\\Kelvin Momo Momo's Private School\\07 Kholwa (feat_ Babalwa M & M Keyz).mp3", coverPath: "music/Kelvin Momo Momo's Private School/AlbumArtSmall.jpg"},
    {songName: "Myekeleni", filePath: "music\\Kelvin Momo Momo's Private School\\08 Myekeleni (feat_ Kopzz).mp3", coverPath: "music/Kelvin Momo Momo's Private School/AlbumArtSmall.jpg"},
    {songName: "Impilo", filePath: "music\\Kelvin Momo Momo's Private School\\09 Impilo (feat_ Kabza De Small, Mhaw Keys, Babalwa M, Kopzz & M Ke.mp3", coverPath: "music/Kelvin Momo Momo's Private School/AlbumArtSmall.jpg"},
    {songName: "OverFlow", filePath: "music\\Kelvin Momo Momo's Private School\\10 Overflow (feat_ HouseXcape).mp3", coverPath: "music/Kelvin Momo Momo's Private School/AlbumArtSmall.jpg"},
    {songName: "Time and Time", filePath: "music\\Kelvin Momo Momo's Private School\\11 Time and Time (feat_ Kabza De Small).mp3", coverPath: "music/Kelvin Momo Momo's Private School/AlbumArtSmall.jpg"},
    {songName: "Afika Voka", filePath: "music\Kelvin Momo Momo's Private School\\12 Afika Voka (feat_ Mogomotsi Choosen).mp3", coverPath: "music/Kelvin Momo Momo's Private School/AlbumArtSmall.jpg"},
    {songName: "Blue Moon", filePath: "music\\Kelvin Momo Momo's Private School\\13 Blue Moon (feat_ Howard & Mhaw Keys).mp3", coverPath: "music/Kelvin Momo Momo's Private School/AlbumArtSmall.jpg"},
    {songName: "Jazzeneo", filePath: "music\\Kelvin Momo Momo's Private School\\14 Jazzeneo (feat_ Xolani Guitars & Mhaw Keys).mp3", coverPath: "music/Kelvin Momo Momo's Private School/AlbumArtSmall.jpg"},
  ];

  songItems.forEach((element, i) => {
      element.getElementsByTagName("img")[0].src = songs[i].coverPath;
      element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
  });
  
  // Handle play/pause click
  masterPlay.addEventListener('click', () => {
      if (audioElement.paused || audioElement.currentTime <= 0) {
          audioElement.play();
          masterPlay.classList.remove('far fa-circle-play');
          masterPlay.classList.add('fa-pause-circle');
          gif.style.opacity = 1;
      } else {
          audioElement.pause();
          masterPlay.classList.remove('far fa-circle-play');
          masterPlay.classList.add('fa-play-circle');
          gif.style.opacity = 0;
      }
  });
  
  // Listen to Events
  audioElement.addEventListener('timeupdate', () => {
      // Update Seekbar
      let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
      myProgressBar.value = progress;
  });
  
  myProgressBar.addEventListener('change', () => {
      audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
  });
  
  const makeAllPlays = () => {
      Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
          element.classList.remove('fa-pause-circle');
          element.classList.add('fa-play-circle');
      });
  };
  
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
      element.addEventListener('click', (e) => {
          makeAllPlays();
          songIndex = parseInt(e.target.id);
          e.target.classList.remove('fa-play-circle');
          e.target.classList.add('fa-pause-circle');
          audioElement.src = songs[songIndex].filePath;
          masterSongName.innerText = songs[songIndex].songName;
          audioElement.currentTime = 0;
          audioElement.play();
          gif.style.opacity = 1;
          masterPlay.classList.remove('fa-play-circle');
          masterPlay.classList.add('fa-pause-circle');
      });
  });
  
  document.getElementById('next').addEventListener('click', () => {
      if (songIndex >= songs.length - 1) {
          songIndex = 0;
      } else {
          songIndex += 1;
      }
      audioElement.src = songs[songIndex].filePath;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
  });
  
  document.getElementById('previous').addEventListener('click', () => {
      if (songIndex <= 0) {
          songIndex = songs.length - 1;
      } else {
          songIndex -= 1;
      }
      audioElement.src = songs[songIndex].filePath;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
  });