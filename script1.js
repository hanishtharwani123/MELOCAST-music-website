let poster7 = document.getElementById("song-pic7");
poster7.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/s2.jpg" id="small">
          <span class="title">Baazigar</span>
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
    song7.pause();
  };

  const song7 = new Audio("songs/Baazigar - DIVINE.mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song7.paused || song7.currentTime <= 0) {
      song7.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song7.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster8 = document.getElementById("song-pic8");
poster8.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/s3.jpg" id="small">
          <span class="title">Main Khiladi</span>
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
    song8.pause();
  };

  const song8 = new Audio("songs/Main Khiladi - Selfiee.mp39");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song8.paused || song8.currentTime <= 0) {
      song8.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song8.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster9 = document.getElementById("song-pic9");
poster9.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/s4.jpg" id="small">
          <span class="title">Besharam rang</span>
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
    song9.pause();
  };

  const song9 = new Audio("songs/Besharam Rang - Pathaan.mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song9.paused || song9.currentTime <= 0) {
      song9.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song9.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster10 = document.getElementById("song-pic10");
poster10.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/s5.jpg" id="small">
          <span class="title">Jhoome jo pathaan </span>
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
    song10.pause();
  };

  const song10 = new Audio("songs/Jhoome Jo Pathaan.mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song10.paused || song10.currentTime <= 0) {
      song10.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song10.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster11 = document.getElementById("song-pic11");
poster11.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/s6.jpg" id="small">
          <span class="title">Ghodey pe sawaar</span>
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
    song11.pause();
  };

  const song11 = new Audio("songs/Ghode-Pe-Sawar(PaglaSongs).mp312");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song11.paused || song11.currentTime <= 0) {
      song.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song11.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster12 = document.getElementById("song-pic12");
poster12.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/s1.jpg" id="small">
          <span class="title">Maan Meri Jaan</span>
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
    song12.pause();
  };

  const song12 = new Audio("songs/Maan Meri Jaan - King.mp313");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song12.paused || song12.currentTime <= 0) {
      song12.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song12.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});
