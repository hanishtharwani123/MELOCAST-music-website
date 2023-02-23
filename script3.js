let poster19 = document.getElementById("song-pic19");
poster19.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/p1.jpg" id="small">
          <span class="title">Excuses</span>
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
    song19.pause();
  };

  const song19 = new Audio("songs/Excuses - Ap Dhillon.mp3202122");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song19.paused || song19.currentTime <= 0) {
      song19.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song19.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster20 = document.getElementById("song-pic20");
poster20.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/p2.jpg" id="small">
          <span class="title">No love</span>
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
    song20.pause();
  };

  const song20 = new Audio("songs/NO LOVE - Shubh.mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song20.paused || song20.currentTime <= 0) {
      song20.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song20.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster21 = document.getElementById("song-pic21");
poster21.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/p3.jpg" id="small">
          <span class="title">Rollin</span>
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
    song21.pause();
  };

  const song21 = new Audio("songs/We Rollin - Shubh.mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song21.paused || song21.currentTime <= 0) {
      song21.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      soause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster22 = document.getElementById("song-pic22");
poster22.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/p4.webp" id="small">
          <span class="title">Brown munde</span>
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
    song22.pause();
  };

  const song22 = new Audio("songs/Brown Munde - AP Dhillon.mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song22.paused || song22.currentTime <= 0) {
      song22.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song22.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster23 = document.getElementById("song-pic23");
poster23.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/p5.jpg" id="small">
          <span class="title">Judge</span>
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
    song23.pause();
  };

  const song23 = Audio("songs/Judge - Mankirt Aulakh.mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song23.paused || song23.currentTime <= 0) {
      song23.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song23.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster24 = document.getElementById("song-pic24");
poster24.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/p6.webp" id="small">
          <span class="title">Lover</span>
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
    song24.pause();
  };

  const song24 = new Audio("songs/Lover - Diljit Dosanjh.mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song24.paused || song24.currentTime <= 0) {
      song24.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song24.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});
