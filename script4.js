let poster25 = document.getElementById("song-pic25");
poster25.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/h1.webp" id="small">
          <span class="title">Under the influence</span>
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
    song25.pause();
  };

  const song25 = new Audio("songs/Under-The-Influence(PagalWorld).mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song25.paused || song25.currentTime <= 0) {
      song25.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song25.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster26 = document.getElementById("song-pic26");
poster26.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/h2.webp" id="small">
          <span class="title">Middle of the night</span>
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
    song26.pause();
  };

  const song26 = new Audio("songs/Middle-Of-The-Night(PagalWorldl).mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song26.paused || song26.currentTime <= 0) {
      song26.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song26.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster27 = document.getElementById("song-pic27");
poster27.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/h3.webp" id="small">
          <span class="title">Calm down</span>
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
    song27.pause();
  };

  const song27 = new Audio("songs/Baby-Calm-Down(PagalWorldl).mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song27.paused || song27.currentTime <= 0) {
      song27.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song27.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster28 = document.getElementById("song-pic28");
poster28.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/h4.webp" id="small">
          <span class="title">One Dance</span>
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
    song28.pause();
  };

  const song28 = new Audio("songs/One-Dance(PagalWorld).mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song28.paused || song28.currentTime <= 0) {
      song28.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song28.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster29 = document.getElementById("song-pic29");
poster29.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/h5.webp" id="small">
          <span class="title">Lovely</span>
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
    song29.pause();
  };

  const song29 = new Audio("songs/Lovely(PagalWorld).mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song29.paused || song29.currentTime <= 0) {
      song29.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song29.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster30 = document.getElementById("song-pic30");
poster30.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/h6.webp" id="small">
          <span class="title">Love nwantiti</span>
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
    song30.pause();
  };

  const song30 = new Audio("songs/Love-Nwantiti(PagalWorldl).mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song30.paused || song30.currentTime <= 0) {
      song30.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song30.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});
