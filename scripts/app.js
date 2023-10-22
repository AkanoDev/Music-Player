import { songs } from "../data/songs.js";
import { sliders } from "../data/sliders.js";

let songsHTML = "";

songs.forEach((song) => {
  songsHTML += `
  <div class="song-wrapper js-song-wrapper">
    <div class="song-container js-song-container">
      <div class="song-cover-preview">
        <img src="${song.image}" class="small-image" />
      </div>
      <div class="song-title jsSongTitle">${song.title}</div>
    </div>
    <div class="song-option-container">
      <ion-icon name="arrow-redo-outline"></ion-icon>
      <ion-icon name="ellipsis-vertical-outline"></ion-icon>
    </div>
  </div>
  `;
});
document.querySelector(".js-music-container").innerHTML = songsHTML;

let slidersHTML = "";

sliders.forEach((slider) => {
  slidersHTML += `
    <div class="aside-cover js-aside-cover">
        <div class="aside-title-container">
          <h5 class="js-aside-title">${slider.title}</h5>
          <h5 class="fav-title">Favourites</h5>
        </div>

        <div class="slider-wrapper">
          <div class="slider-container">
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />
            <div class="slider-image-container first">
              <img src="${slider.firstSlide}" alt="" />
            </div>
            <div class="slider-image-container">
              <img src="${slider.secondSlide}" alt="" />
            </div>
            <div class="slider-image-container">
              <img src="${slider.thirdSlide}" alt="" />
            </div>
            <div class="slider-image-container">
              <img src="${slider.fourthSlide}" alt="" />
            </div>
          </div>
          <div class="navigation-manual">
            <label
              for="radio1"
              class="manual-btn"
              onclick="slide('${slider.titlePerSlide.firstTitle}');"
            ></label>
            <label
              for="radio2"
              class="manual-btn"
              onclick="slide('${slider.titlePerSlide.secondTitle}');"
            ></label>
            <label
              for="radio3"
              class="manual-btn"
              onclick="slide('${slider.titlePerSlide.thirdTitle}');"
            ></label>
            <label
              for="radio4"
              class="manual-btn"
              onclick="slide('${slider.titlePerSlide.fourthTitle}');"
            ></label>
          </div>
        </div>
        <div class="about-singer">
          <div class="aside-name-btn-container">
            <div class="aside-name">
              <h2>${slider.name}</h2>
              <p>${slider.passion}</p>
            </div>
            <button class="aside-subscribe">
              ${slider.subscribers}
            </button>
          </div>
          <img src="${slider.mainImage}" class="cover-2" />
          <div class="about-singer-content">
          ${slider.about}
          </div>
        </div>
      </div>
    `;
});

document.querySelector(".js-aside-container").innerHTML = slidersHTML;

const aside = document.querySelector(".js-song-container");
aside.addEventListener("click", asideFunction);

function asideFunction() {
  document.querySelector(".js-aside-container").innerHTML = `
  <div class="card-wrapper">
  <div class="card-top">
    <ion-icon name="chevron-down-outline"></ion-icon>
    <a href="index.html">
    <ion-icon name="close-outline" class="menu-button">
    ></ion-icon></a>
  </div>

  <div class="card-middle">
    <div class="image-container js-image-container">
      <img src="images/now-playing-1.jpg" />
    </div>
    <div class="card-title-container">
      <div class="card-music-title">back number - ハッピーエンド</div>
      <ion-icon
        name="heart"
        class="js-heart-icon"
        onclick="fillColor();"
      ></ion-icon>
    </div>
    <div class="card-lyrics-container">
      <p>Lyrics</p>
      <button
        class="lyrics-button js-lyrics-button"
        onclick="postLyrics();"
      >
        add
      </button>
    </div>
  </div>

  <div class="card-bottom">
    <div class="card-time-container">
      <div class="card-timeline"></div>
      <div class="card-time">
        <div class="card-time-left">01:19</div>
        <div class="card-time-right">03:29</div>
      </div>
    </div>
    <div class="card-buttons-container">
      <ion-icon
        name="repeat-outline"
        class="js-bottom-icons"
        onclick="toggleIcon();"
      ></ion-icon>
      <ion-icon
        name="play-skip-back-outline"
        class="js-bottom-icons"
        onclick="toggleIcon();"
      ></ion-icon>
      <ion-icon name="play-circle-outline" class="js-start-icon"></ion-icon>
      <ion-icon
        name="play-skip-forward-outline"
        class="js-bottom-icons"
        onclick="toggleIcon();"
      ></ion-icon>
      <ion-icon
        name="shuffle-outline"
        class="js-bottom-icons"
        onclick="toggleIcon();"
      ></ion-icon>
    </div>
  </div>
</div>  
  `;
}

//LEFT

const left = document.querySelector(".js-dashboard-left");
left.addEventListener("click", myFunction);

function myFunction() {
  document.querySelector(".js-main-content").innerHTML = `
  
    <div class="favourites-header"> 
      <div class="favourites-title-header">
        <a href="index.html" id="target_link">
        <ion-icon name="chevron-back-outline"></ion-icon>
        </a>
        <p>Favourites</p>
        <div></div>
      </div>
      <div class="favourites-header-icons">
        <ion-icon name="musical-notes-outline"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
        <ion-icon name="disc-outline"></ion-icon>
      </div>
    </div>
    <div class="music-option-container">
      <div class="shuffle">
        <ion-icon name="play-circle"></ion-icon>
        <p>shuffle playback</p>
      </div>
      <div class="sort-select-music">
        <ion-icon name="swap-vertical-outline"></ion-icon>
        <ion-icon name="filter-outline"></ion-icon>
      </div>
    </div>

    <div class="music-container js-music-container">
      <div class="song-wrapper">
        <div class="song-container js-song-container">
          <div class="song-cover-preview">
            <img src="images/music-cover.jpg" class="small-image" />
          </div>
          <div class="song-title jsSongTitle">Back Number - Happy End | ハッピーエンド"</div>
        </div>
        <div class="song-option-container">
          <ion-icon name="arrow-redo-outline"></ion-icon>
          <ion-icon name="ellipsis-vertical-outline"></ion-icon>
        </div>
      </div>
      <div class="song-wrapper">
        <div class="song-container js-song-container">
          <div class="song-cover-preview">
            <img src="images/music-cover.jpg" class="small-image" />
          </div>
          <div class="song-title jsSongTitle">Back Number - Happy End | ハッピーエンド"</div>
        </div>
        <div class="song-option-container">
          <ion-icon name="arrow-redo-outline"></ion-icon>
          <ion-icon name="ellipsis-vertical-outline"></ion-icon>
        </div>
      </div>
      <div class="song-wrapper">
        <div class="song-container js-song-container">
          <div class="song-cover-preview">
            <img src="images/music-cover.jpg" class="small-image" />
          </div>
          <div class="song-title jsSongTitle">Back Number - Happy End | ハッピーエンド"</div>
        </div>
        <div class="song-option-container">
          <ion-icon name="arrow-redo-outline"></ion-icon>
          <ion-icon name="ellipsis-vertical-outline"></ion-icon>
        </div>
      </div>
    </div>
  `;
}

// MID
const middle = document.querySelector(".js-dashboard-middle");
middle.addEventListener("click", myFunction2);

function myFunction2() {
  document.querySelector(".js-main-content").innerHTML = `
  
    <div class="favourites-header"> 
      <div class="favourites-title-header">
        <a href="index.html" id="target_link">
        <ion-icon name="chevron-back-outline"></ion-icon>
        </a>
        <p>Playlists</p>
        <div></div>
      </div>
    </div>
    <div class="music-option-container">
      <div class="shuffle">
        <ion-icon name="play-circle"></ion-icon>
        <p>shuffle playback</p>
      </div>
      <div class="sort-select-music">
        <ion-icon name="swap-vertical-outline"></ion-icon>
        <ion-icon name="filter-outline"></ion-icon>
      </div>
    </div>

    <div class="music-container js-music-container">

     <div class="playlist-wrapper">
      <div class="playlist-container">
        <div></div>
        <p>KPOP</p>
        <p>Total 6 songs</p>
      </div>
      <div class="playlist-container">
        <div></div>
        <p>JPOP</p>
        <p>Total 20 songs</p>
      </div>
      <div class="playlist-container">
        <div></div>
        <p>OPM</p>
        <p>Total 9 songs</p>
      </div>
      <div class="playlist-container">
        <div></div>
        <p>WESTERN</p>
        <p>Total 5 songs</p>
      </div>
     </div>
    </div>
  `;
}

// Right

const right = document.querySelector(".js-dashboard-right");
right.addEventListener("click", myFunction3);

function myFunction3() {
  document.querySelector(".js-main-content").innerHTML = `
  
    <div class="favourites-header"> 
      <div class="favourites-title-header">
        <a href="index.html" id="target_link">
        <ion-icon name="chevron-back-outline"></ion-icon>
        </a>
        <p>Recent</p>
        <div></div>
      </div>
    </div>
    <div class="music-option-container">
      <div class="shuffle">
        <ion-icon name="play-circle"></ion-icon>
        <p>shuffle playback</p>
      </div>
      <div class="sort-select-music">
        <ion-icon name="swap-vertical-outline"></ion-icon>
        <ion-icon name="filter-outline"></ion-icon>
      </div>
    </div>

    <div class="music-container js-music-container">
      <div class="song-wrapper">
        <div class="song-container js-song-container">
          <div class="song-cover-preview">
            <img src="images/music-cover.jpg" class="small-image" />
          </div>
          <div class="song-title jsSongTitle">Back Number - Happy End | ハッピーエンド"</div>
        </div>
        <div class="song-option-container">
          <ion-icon name="arrow-redo-outline"></ion-icon>
          <ion-icon name="ellipsis-vertical-outline"></ion-icon>
        </div>
      </div>
      <div class="song-wrapper">
        <div class="song-container js-song-container">
          <div class="song-cover-preview">
            <img src="images/music-cover.jpg" class="small-image" />
          </div>
          <div class="song-title jsSongTitle">Back Number - Happy End | ハッピーエンド"</div>
        </div>
        <div class="song-option-container">
          <ion-icon name="arrow-redo-outline"></ion-icon>
          <ion-icon name="ellipsis-vertical-outline"></ion-icon>
        </div>
      </div>
      <div class="song-wrapper">
        <div class="song-container js-song-container">
          <div class="song-cover-preview">
            <img src="images/music-cover.jpg" class="small-image" />
          </div>
          <div class="song-title jsSongTitle">Back Number - Happy End | ハッピーエンド"</div>
        </div>
        <div class="song-option-container">
          <ion-icon name="arrow-redo-outline"></ion-icon>
          <ion-icon name="ellipsis-vertical-outline"></ion-icon>
        </div>
      </div>
    </div>
  `;
}
