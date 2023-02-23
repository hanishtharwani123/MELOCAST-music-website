let poster13 = document.getElementById("song-pic13");
poster13.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/10.jpg" id="small">
          <span class="title">Pasoori</span>
      </div>
      <div class="play_btns">
          <i class="fa-solid fa-backward-step" id="btn_play1"></i>
          <i class="fa-solid fa-play" id="btn_play2"></i>
          <i class="fa-solid fa-forward-step" id="btn_play3"></i>
      </div>
      <span id="curr_start">0:00</span>
      <div class="timeline">
          <input type="range" id="seek" min="0" value="0" max="100">
          <div id="bar2"></div>
          <div class="dot"></div>
      </div>
      <span id="curr_start">0:00</span>
      
      <div class="bar">
          <i id="ico" class="fa-solid fa-volume"></i>
          <input type="range" id="vol" min="0" value="30" max="100">
          <div id="vol_bar"></div>
          <div class="dot" id="vol_dot"></div>
      </div>`;

  play.insertAdjacentHTML("afterbegin", htmlData);

  document.body.appendChild(play);

  let cancel = document.getElementById("icon_can");
  cancel.onclick = function () {
    play.remove();
    song13.pause();
  };

  const song13 = new Audio("songs/Pasoori - Shae Gill.mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song13.paused || song13.currentTime <= 0) {
      song13.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song13.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster14 = document.getElementById("song-pic14");
poster14.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/11.webp" id="small">
          <span class="title">Tu Aake Dekhle</span>
      </div>
      <div class="play_btns">
          <i class="fa-solid fa-backward-step" id="btn_play1"></i>
          <i class="fa-solid fa-play" id="btn_play2"></i>
          <i class="fa-solid fa-forward-step" id="btn_play3"></i>
      </div>
      <span id="curr_start">0:00</span>
      <div class="timeline">
          <input type="range" id="seek" min="0" value="0" max="100">
          <div id="bar2"></div>
          <div class="dot"></div>
      </div>
      <span id="curr_start">0:00</span>
      
      <div class="bar">
          <i id="ico" class="fa-solid fa-volume"></i>
          <input type="range" id="vol" min="0" value="30" max="100">
          <div id="vol_bar"></div>
          <div class="dot" id="vol_dot"></div>
      </div>`;

  play.insertAdjacentHTML("afterbegin", htmlData);

  document.body.appendChild(play);

  let cancel = document.getElementById("icon_can");
  cancel.onclick = function () {
    play.remove();
    song14.pause();
  };

  const song14 = new Audio("songs/Bas Mere Aage Apni Hi Tu Baat Kara Kar.mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song14.paused || song14.currentTime <= 0) {
      song14.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song14.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster15 = document.getElementById("song-pic15");
poster15.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/12.webp" id="small">
          <span class="title">Channa mereya</span>
      </div>
      <div class="play_btns">
          <i class="fa-solid fa-backward-step" id="btn_play1"></i>
          <i class="fa-solid fa-play" id="btn_play2"></i>
          <i class="fa-solid fa-forward-step" id="btn_play3"></i>
      </div>
      <span id="curr_start">0:00</span>
      <div class="timeline">
          <input type="range" id="seek" min="0" value="0" max="100">
          <div id="bar2"></div>
          <div class="dot"></div>
      </div>
      <span id="curr_start">0:00</span>
      
      <div class="bar">
          <i id="ico" class="fa-solid fa-volume"></i>
          <input type="range" id="vol" min="0" value="30" max="100">
          <div id="vol_bar"></div>
          <div class="dot" id="vol_dot"></div>
      </div>`;

  play.insertAdjacentHTML("afterbegin", htmlData);

  document.body.appendChild(play);

  let cancel = document.getElementById("icon_can");
  cancel.onclick = function () {
    play.remove();
    song15.pause();
  };

  const song15 = new Audio("songs/07 Channa Mereya - Arijit Singh 190Kbps.mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song15.paused || song15.currentTime <= 0) {
      song15.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song15.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster16 = document.getElementById("song-pic16");
poster16.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/13.webp" id="small">
          <span class="title">Dil ko karaar aaya</span>
      </div>
      <div class="play_btns">
          <i class="fa-solid fa-backward-step" id="btn_play1"></i>
          <i class="fa-solid fa-play" id="btn_play2"></i>
          <i class="fa-solid fa-forward-step" id="btn_play3"></i>
      </div>
      <span id="curr_start">0:00</span>
      <div class="timeline">
          <input type="range" id="seek" min="0" value="0" max="100">
          <div id="bar2"></div>
          <div class="dot"></div>
      </div>
      <span id="curr_start">0:00</span>
      
      <div class="bar">
          <i id="ico" class="fa-solid fa-volume"></i>
          <input type="range" id="vol" min="0" value="30" max="100">
          <div id="vol_bar"></div>
          <div class="dot" id="vol_dot"></div>
      </div>`;

  play.insertAdjacentHTML("afterbegin", htmlData);

  document.body.appendChild(play);

  let cancel = document.getElementById("icon_can");
  cancel.onclick = function () {
    play.remove();
    song16.pause();
  };

  const song16 = new Audio("songs/Dil Ko Karaar Aaya - Neha Kakkar.mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song16.paused || song16.currentTime <= 0) {
      song16.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song16.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster17 = document.getElementById("song-pic17");
poster17.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/14.webp" id="small">
          <span class="title">295</span>
      </div>
      <div class="play_btns">
          <i class="fa-solid fa-backward-step" id="btn_play1"></i>
          <i class="fa-solid fa-play" id="btn_play2"></i>
          <i class="fa-solid fa-forward-step" id="btn_play3"></i>
      </div>
      <span id="curr_start">0:00</span>
      <div class="timeline">
          <input type="range" id="seek" min="0" value="0" max="100">
          <div id="bar2"></div>
          <div class="dot"></div>
      </div>
      <span id="curr_start">0:00</span>
      
      <div class="bar">
          <i id="ico" class="fa-solid fa-volume"></i>
          <input type="range" id="vol" min="0" value="30" max="100">
          <div id="vol_bar"></div>
          <div class="dot" id="vol_dot"></div>
      </div>`;

  play.insertAdjacentHTML("afterbegin", htmlData);

  document.body.appendChild(play);

  let cancel = document.getElementById("icon_can");
  cancel.onclick = function () {
    play.remove();
    song17.pause();
  };

  const song17 = new Audio("songs/295 - Sidhu Moose Wala.mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song17.paused || song17.currentTime <= 0) {
      song17.play();
      17;
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song17.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster18 = document.getElementById("song-pic18");
poster18.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/15.webp" id="small">
          <span class="title">Ek tarfa</span>
      </div>
      <div class="play_btns">
          <i class="fa-solid fa-backward-step" id="btn_play1"></i>
          <i class="fa-solid fa-play" id="btn_play2"></i>
          <i class="fa-solid fa-forward-step" id="btn_play3"></i>
      </div>
      <span id="curr_start">0:00</span>
      <div class="timeline">
          <input type="range" id="seek" min="0" value="0" max="100">
          <div id="bar2"></div>
          <div class="dot"></div>
      </div>
      <span id="curr_start">0:00</span>
      
      <div class="bar">
          <i id="ico" class="fa-solid fa-volume"></i>
          <input type="range" id="vol" min="0" value="30" max="100">
          <div id="vol_bar"></div>
          <div class="dot" id="vol_dot"></div>
      </div>`;

  play.insertAdjacentHTML("afterbegin", htmlData);

  document.body.appendChild(play);

  let cancel = document.getElementById("icon_can");
  cancel.onclick = function () {
    play.remove();
    song18.pause();
  };

  const song18 = new Audio("songs/Ek Tarfa - Darshan Raval.mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song18.paused || song18.currentTime <= 0) {
      song18.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song18.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});
