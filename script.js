let poster1 = document.getElementById("song-pic1");
poster1.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/1.webp" id="small">
          <span class="title">Param Sundari</span>
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
    song1.pause();
  };

  const song1 = new Audio("songs/Param Sundari Mimi 2021 High.mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song1.paused || song1.currentTime <= 0) {
      song1.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song1.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster2 = document.getElementById("song-pic2");
poster2.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/2.webp" id="small">
          <span class="title">Raataan lambiyan</span>
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
    song2.pause();
  };

  const song2 = new Audio("songs/JubinNautiyal.AseesKaur-RaataanLambiyan.mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song2.paused || song2.currentTime <= 0) {
      song2.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song2.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster3 = document.getElementById("song-pic3");
poster3.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/3.webp" id="small">
          <span class="title">Mann bharryaa</span>
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
    song3.pause();
  };

  const song3 = new Audio("songs/Mann Bharryaa 2 Shershaah 2021 320.mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song3.paused || song3.currentTime <= 0) {
      song3.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song3.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster4 = document.getElementById("song-pic4");
poster4.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/5.webp" id="small">
          <span class="title">Tera Suit</span>
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
    song4.pause();
  };

  const song4 = new Audio("songs/Tera Suit Bada Tight.mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song4.paused || song4.currentTime <= 0) {
      song4.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song4.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster5 = document.getElementById("song-pic5");
poster5.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/6.webp" id="small">
          <span class="title">Kesariya</span>
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
    song5.pause();
  };

  const song5 = new Audio("songs/Kesariya Brahmastra 2022 320.mp3");

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song5.paused || song5.currentTime <= 0) {
      song5.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song5.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

let poster6 = document.getElementById("song-pic6");
poster6.addEventListener("click", () => {
  let play = document.createElement("div");
  play.classList.add("play_bar");

  let htmlData = `<div class="about_song">
          <i class="fa-solid fa-xmark" id="icon_can"></i>
          <img src="images/7.webp" id="small">
          <span class="title">Shayad</span>
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
    song6.pause();
  };

  const song6 = new Audio(
    "songs/songs/Shayad_Full_Song_-_Love_Aaj_Kal_2___Arijit_Singh___Jo_tum_na_ho,_Rahenge_hum_nahi___Audio___2020(256k).mp37"
  );

  let master_play = document.getElementById("btn_play2");
  master_play.addEventListener("click", () => {
    if (song6.paused || song6.currentTime <= 0) {
      song6.play();
      master_play.classList.remove("fa-play");
      master_play.classList.add("fa-pause");
    } else {
      song6.pause();
      master_play.classList.add("fa-play");
      master_play.classList.remove("fa-pause");
    }
  });
});

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

  const song8 = new Audio("songs/Main Khiladi - Selfiee.mp3");

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

  const song11 = new Audio("songs/Ghode-Pe-Sawar(PaglaSongs).mp3");

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

  const song12 = new Audio("songs/Maan Meri Jaan - King.mp3");

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

  const song19 = new Audio("songs/Excuses - Ap Dhillon.mp3");

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
