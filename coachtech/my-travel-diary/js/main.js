$(function(){
  /*-------------------------------
  ハンバーガーメニュー
  ---------------------------------*/
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $("header .navi").toggleClass("active");
  });
  
  $(".navi a").click(function () {
    $(".hamburger").removeClass("active");
    $("header .navi").removeClass("active");
  });
});

//スライダー
document.addEventListener('DOMContentLoaded', () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');

  function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  setInterval(showNextSlide, 5000);
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.slider-manual').forEach((slider) => {
    let currentManual = 0;
    const manualSlides = slider.querySelectorAll('.slide-manual');
    const prevBtn = slider.querySelector('.prev-manual');
    const nextBtn = slider.querySelector('.next-manual');

    function showManualSlide(index) {
      manualSlides[currentManual].classList.remove('active');
      currentManual = (index + manualSlides.length) % manualSlides.length;
      manualSlides[currentManual].classList.add('active');
    }

    // 初期表示（1枚目だけ表示）
    manualSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === 0);
    });

    prevBtn.addEventListener('click', () => showManualSlide(currentManual - 1));
    nextBtn.addEventListener('click', () => showManualSlide(currentManual + 1));
  });
});


//カードの並べ替え
document.addEventListener("DOMContentLoaded", () => {
    const regionFilter = document.getElementById("regionFilter");
    const dateSort = document.getElementById("dateSort");
    const cardsContainer = document.getElementById("tripCards");
    const allCards = Array.from(cardsContainer.children);

    function updateCards() {
        const region = regionFilter.value;
        const sort = dateSort.value;

        // フィルター処理
        let filteredCards = allCards.filter(card => {
            return region === "all" || card.dataset.region === region;
        });

        // 並び替え処理
        filteredCards.sort((a, b) => {
            const dateA = new Date(a.dataset.date);
            const dateB = new Date(b.dataset.date);
            return sort === "asc" ? dateA - dateB : dateB - dateA;
        });

        // 表示更新（元の要素を再配置）
        cardsContainer.innerHTML = "";
        filteredCards.forEach(card => {
            cardsContainer.appendChild(card);
        });

        // クラス切り替え（1件だけなら単列に）
        if (region !== "all" && filteredCards.length === 1) {
            cardsContainer.classList.remove("grid");
            cardsContainer.classList.add("single-column");
        } else {
            cardsContainer.classList.remove("single-column");
            cardsContainer.classList.add("grid");
        }
    }

    regionFilter.addEventListener("change", updateCards);
    dateSort.addEventListener("change", updateCards);
    updateCards(); // 初期表示
});


//map
const spots = [
  {
    name: "北海道・小樽駅",
    lat: 43.197556,
    lng: 140.993861,
    image: "images/otaru-eki.jpeg",
    description: "小樽の街並みと<span class='sp-br'></span>マッチしている<span class='sp-br'></span><span class='pc-br'></span>ノスタルジックな駅",
    region: "hokkaido"
  },
  {
    name: "北海道・<span class='sp-br'></span>ルタオ本店",
    lat: 43.191224,
    lng: 141.007369,
    image: "images/otaru-rutao-gaikan.jpeg",
    description: "カリヨンの音色<span class='sp-br'></span>という紅茶は<span class='sp-br'></span><span class='pc-br'></span>ここのお店でしか<span class='sp-br'></span>購入できない",
    region: "hokkaido"
  },
  {
    name: "北海道・北菓楼　<span class='sp-br'></span>小樽本館",
    lat: 43.191711,
    lng: 141.007474,
    image: "images/otaru-kitakaro.jpeg",
    description: "賞味期限２時間の<span class='sp-br'></span>雪こんチーズは<span class='sp-br'></span><span class='pc-br'></span>ここでしか<span class='sp-br'></span>買えない",
    region: "hokkaido"
  },{
    name: "北海道・<span class='sp-br'></span>オルゴール堂本店",
    lat: 43.195878,
    lng: 141.003396,
    image: "images/otaru-orugo-ru-honkan.jpg",
    description: "様々なオルゴール<span class='sp-br'></span>の音色を<span class='pc-br'></span>楽しめる<span class='sp-br'></span>お店の本店",
    region: "hokkaido"
  },{
    name: "北海道・小樽運河",
    lat: 43.199446,
    lng: 141.001838,
    image: "images/otaru-unga.jpeg",
    description: "夜になると<span class='sp-br'></span>ガス灯が点灯し<span class='sp-br'></span><span class='pc-br'></span>とても綺麗",
    region: "hokkaido"
  },{
    name: "北海道・<span class='sp-br'></span>新千歳空港",
    lat: 42.77500,
    lng: 141.69222,
    image: "images/sintitose-sinboru.jpeg",
    description: "様々な施設を<span class='sp-br'></span>完備している<span class='sp-br'></span><span class='pc-br'></span>北海道最大の<span class='sp-br'></span>空港玄関口",
    region: "hokkaido"
  },{
    name: "北海道・エスコン<span class='sp-br'></span>フィールド北海道",
    lat: 42.99015,
    lng: 141.54954,
    image: "images/eskon-gaikan.jpeg",
    description: "最近新しくできた<span class='sp-br'></span>ボールパーク型<span class='pc-br'></span>の<span class='sp-br'></span>野球場",
    region: "hokkaido"
  },
  {
    name: "金沢・近江町市場",
    lat: 36.5713,
    lng: 136.6562,
    image: "images/kaisen-isikawa.jpeg",
    description: "新鮮な海の幸を<span class='sp-br'></span>楽しめる<span class='pc-br'></span>金沢の<span class='sp-br'></span>中心地にある市場",
    region: "chubu"
  },
  {
    name: "金沢・兼六園",
    lat: 36.5611,
    lng: 136.6625,
    image: "images/kenrokuen1-isikawa.jpeg",
    description: "日本三名園の一つで<span class='sp-br'></span>四季折々<span class='pc-br'></span>美しい<span class='sp-br'></span>景色を楽しめる",
    region: "chubu"
  },
  {
    name: "金沢・<span class='sp-br'></span>山さん寿司本店",
    lat: 36.57177,
    lng: 136.65696,
    image: "images/yamasanzusi-gaikan-isikawa.jpeg",
    description: "近江町市場の中で<span class='sp-br'></span>新鮮な<span class='pc-br'></span>海鮮丼が<span class='sp-br'></span>楽しめるお店",
    region: "chubu"
  },
  {
    name: "大阪・USJ",
    lat: 34.6657,
    lng: 135.4323,
    image: "images/uniba-osaka.jpeg",
    description: "新エリアが<span class='sp-br'></span>続々オープンする<span class='sp-br'></span><span class='pc-br'></span>巨大テーマパーク",
    region: "kinki"
  },
  {
    name: "韓国・<span class='sp-br'></span>ロッテワールド",
    lat: 37.8500,
    lng: 127.1670,
    image: "images/rottewa-rudo-kankoku.jpeg",
    description: "屋内屋外両方<span class='sp-br'></span>楽しめる<span class='pc-br'></span>ソウルの<span class='sp-br'></span>巨大遊園地",
    region: "korea"
  },
  {
    name: "韓国・梨花制服",
    lat: 37.5120,
    lng: 127.1000,
    image: "images/kankoku-seihuku-itiran.jpg",
    description: "ロッテワールドの<span class='sp-br'></span>近くで<span class='pc-br'></span>制服を<span class='sp-br'></span>レンタルして<span class='sp-br'></span><span class='pc-br'></span>映え写真が<span class='sp-br'></span>撮れるお店",
    region: "korea"
  }
  ,
  {
    name: "大分・<span class='sp-br'></span>ハーモニーランド",
    lat: 33.4008,
    lng: 131.5465,
    image: "images/sanrio-oita.jpeg",
    description: "西日本唯一の<span class='sp-br'></span>サンリオの<span class='sp-br'></span><span class='pc-br'></span>テーマパーク",
    region: "kyushu"
  },
  {
    name: "広島・宮島",
    lat: 34.2950,
    lng: 132.3190,
    image: "images/miyajima.jpeg",
    description: "海に浮かんで<span class='sp-br'></span>見える鳥居が<span class='sp-br'></span><span class='pc-br'></span>有名の島",
    region: "chugoku"
  },
  {
    name: "広島・フクヤ食堂",
    lat: 34.30063,
    lng: 132.32204,
    image: "images/miyajima-fukuya.jpg",
    description: "あなごめしが名物<span class='sp-br'></span>のお店だが、<span class='sp-br'></span><span class='pc-br'></span>あまり<span class='sp-br'></span>お勧めしない",
    region: "chugoku"
  },
  {
    name: "広島・博多屋",
    lat: 34.29794,
    lng: 132.32073,
    image: "images/miyajima-hakataya-gaikan.png",
    description: "揚げもみじが<span class='sp-br'></span>美味しい<span class='pc-br'></span>宮島の中<span class='sp-br'></span>にあるお店",
    region: "chugoku"
  },
  {
    name: "大分・<span class='sp-br'></span>別府甘味茶屋",
    lat: 33.3118,
    lng: 131.4856,
    image: "images/dangojiru-oita.jpeg",
    description: "別府で有名の<span class='sp-br'></span>だんご汁のお店",
    region: "kyushu"
  },
  {
    name: "名古屋・矢場とん　<span class='sp-br'></span><span class='pc-br'></span>栄LACHIC店",
    lat: 35.1675,
    lng: 136.9075,
    image: "images/misokatu-nagoya.jpeg",
    description: "名古屋の味噌カツ<span class='sp-br'></span>といえばここ！",
    region: "chubu"
  },
  {
    name: "名古屋・<span class='sp-br'></span>まるや本店　<span class='sp-br'></span>名駅店",
    lat: 35.1732,
    lng: 136.8872,
    image: "images/hitumabusi-nagoya.jpeg",
    description: "ひつまぶしが<span class='sp-br'></span>食べられる名古屋<span class='sp-br'></span><span class='pc-br'></span>を中心に多くある<span class='sp-br'></span>チェーン店",
    region: "chubu"
  },
  {
    name: "名古屋・新雀本店",
    lat: 35.15864,
    lng: 136.90135,
    image: "images/dango-nagoya.jpeg",
    description: "１本100円で団子が<span class='sp-br'></span>食べられる<span class='sp-br'></span><span class='pc-br'></span>大須商店街内の<span class='sp-br'></span>老舗店舗",
    region: "chubu"
  },
  {
    name: "名古屋・<span class='sp-br'></span>鳴門鯛焼本舗 <span class='sp-br'></span><span class='pc-br'></span>大須仁王門通店",
    lat: 35.15819,
    lng: 136.90439,
    image: "images/kintokiimo-nagoya.jpeg",
    description: "大須商店街内に<span class='sp-br'></span>ある、<span class='pc-br'></span>餡がたっぷり<span class='sp-br'></span>入っている<span class='sp-br'></span><span class='pc-br'></span>たい焼き屋さん",
    region: "chubu"
  },
  {
    name: "名古屋・レンガ亭",
    lat: 35.17472,
    lng: 136.89822,
    image: "images/rengatei-gaikan.webp",
    description: "名古屋の<span class='sp-br'></span>オフィス街の中に<span class='sp-br'></span>ある、<span class='pc-br'></span>昔ながらの<span class='sp-br'></span>ちょっとレトロな<span class='sp-br'></span><span class='pc-br'></span>喫茶店",
    region: "chubu"
  },
  {
    name: "韓国・<span class='sp-br'></span>ユガネタッカルビ　<span class='sp-br'></span><span class='pc-br'></span>明洞３号店",
    lat: 37.5610,
    lng: 126.9850,
    image: "images/takkarubi.jpeg",
    description: "タッカルビが<span class='sp-br'></span>食べられる<span class='pc-br'></span>韓国の<span class='sp-br'></span>チェーン店",
    region: "korea"
  },
  {
    name: "名古屋・<span class='sp-br'></span>大洲商店街",
    lat: 35.1596,
    lng: 136.9017,
    image: "images/oosusyoutengai-nagoya.jpeg",
    description: "食べ歩きグルメが<span class='sp-br'></span><span class='pc-br'></span>充実している<span class='sp-br'></span>商店街",
    region: "chubu"
  },
  {
    name: "京都・<span class='sp-br'></span>伏見稲荷神社",
    lat: 34.9651,
    lng: 135.7727,
    image: "images/inari-kyouto.jpeg",
    description: "千本鳥居が<span class='sp-br'></span>人気の京都の神社",
    region: "kinki"
  },
  {
    name: "東京・<span class='sp-br'></span>野球殿堂博物館",
    lat: 35.7056,
    lng: 139.7519,
    image: "images/yakyu-tokyo.jpeg",
    description: "野球好きのための<span class='sp-br'></span>博物館",
    region: "kanto"
  },
  {
    name: "韓国・ピョン<span class='sp-br'></span>マダン図書館",
    lat: 37.5120,
    lng: 127.0590,
    image: "images/tosyokan.jpeg",
    description: "インスタ映えする<span class='sp-br'></span><span class='pc-br'></span>ユニークな<span class='sp-br'></span>デザインが人気",
    region: "korea"
  },
  {
    name: "大阪・海遊館",
    lat: 34.6545,
    lng: 135.4289,
    image: "images/kaiyuukan.jpeg",
    description: "日本で唯一<span class='sp-br'></span>ジンベイザメを<span class='sp-br'></span><span class='pc-br'></span>見ることができる<span class='sp-br'></span>水族館",
    region: "kinki"
  },

];


const regionSettings = {
  all: {
    center: { lat: 37.5, lng: 137.0 },
    zoom: window.innerWidth <= 767 ? 4.2 : 5.5 // モバイルなら少し広めに
  }, // 全国

  hokkaido: { center: { lat: 43.0, lng: 141.3 }, zoom: 7 },  // 北海道
  tohoku:   { center: { lat: 39.7, lng: 140.5 }, zoom: 7 },  // 青森〜福島
  kanto:    { center: { lat: 35.7, lng: 139.6 }, zoom: 7 },  // 東京周辺
  chubu: {
    center: { lat: 36.2, lng: 137.2 }, zoom: 7  },  // 名古屋・金沢など
  kinki:    { center: { lat: 34.8, lng: 135.5 }, zoom: 7 },  // 京都・大阪・奈良
  chugoku:  { center: { lat: 34.6, lng: 132.8 }, zoom: 7 },  // 広島・山口など
  shikoku:  { center: { lat: 33.8, lng: 133.6 }, zoom: 7 },  // 香川・愛媛など
  kyushu:   { center: { lat: 32.8, lng: 131.0 }, zoom: 7 },  // 福岡・大分・熊本など

  korea:    { center: { lat: 37.5, lng: 127.5 }, zoom: 7 }   // ソウル中心
};


let map;
let markers = [];

function initMap() {
  const defaultRegion = regionSettings.all;
  map = new google.maps.Map(document.getElementById("map"), {
    center: defaultRegion.center,
    zoom: defaultRegion.zoom,
  });

  addMarkers("all");

  document.getElementById("region-select").addEventListener("change", (e) => {
    const selected = e.target.value;
    const region = regionSettings[selected];
    map.setCenter(region.center);
    map.setZoom(region.zoom);
    clearMarkers();
    addMarkers(selected);
  });
}

function clearMarkers() {
  markers.forEach(marker => marker.setMap(null));
  markers = [];
}

function addMarkers(regionKey) {
  spots.forEach(spot => {
    if (regionKey === "all" || spot.name.includes(regionKeyToKeyword(regionKey))) {
      const marker = new google.maps.Marker({
        position: { lat: spot.lat, lng: spot.lng },
        map: map,
        title: spot.name
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="max-width:200px; text-align:center;">
            <h3>${spot.name}</h3>
            <img src="${spot.image}" 
                 style="max-height:180px; width:auto; object-fit:contain; border-radius:8px; display:block; margin:0 auto;">
            <p>${spot.description}</p>
          </div>
        `
      });
      
      marker.addListener("click", () => infoWindow.open(map, marker));
      markers.push(marker);
    }
  });
}

// 地方名をキーワードに変換（名前から地方を判定）
function regionKeyToKeyword(regionKey) {
  const keywords = {
    chubu: "名古屋",
    kinki: "大阪",
    kyushu: "大分",
    korea: "韓国"
  };
  return keywords[regionKey] || "";
}

window.onload = initMap;


// コメント欄
const STORAGE_KEY = 'myBlogComments';

function initComments() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const comments = saved ? JSON.parse(saved) : [];
  comments.forEach(c => {
    appendCommentToDOM(c.username, c.text, c.timestamp);
  });
}

function appendCommentToDOM(username, text, timestamp) {
  const ul = document.getElementById('commentList');
  const li = document.createElement('li');

  const dateObj = new Date(timestamp);
  const Y = dateObj.getFullYear();
  const M = String(dateObj.getMonth() + 1).padStart(2, '0');
  const D = String(dateObj.getDate()).padStart(2, '0');
  const h = String(dateObj.getHours()).padStart(2, '0');
  const m = String(dateObj.getMinutes()).padStart(2, '0');
  const formatted = `${Y}/${M}/${D} ${h}:${m}`;

  li.innerHTML = `
    <div class="meta"><strong>${escapeHTML(username)}</strong> ・ <span>${formatted}</span></div>
    <div class="text">${escapeHTML(text)}</div>
  `;
  ul.appendChild(li);
}

function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function handleFormSubmit(event) {
  event.preventDefault();
  const usernameInput = document.getElementById('username');
  const commentInput = document.getElementById('commentText');
  const username = usernameInput.value.trim();
  const commentText = commentInput.value.trim();
  if (!username || !commentText) return;

  const timestamp = Date.now();
  const saved = localStorage.getItem(STORAGE_KEY);
  const comments = saved ? JSON.parse(saved) : [];
  comments.push({ username, text: commentText, timestamp });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));

  appendCommentToDOM(username, commentText, timestamp);
  usernameInput.value = '';
  commentInput.value = '';
}

document.addEventListener('DOMContentLoaded', () => {
  initComments();
  document.getElementById('commentForm').addEventListener('submit', handleFormSubmit);
});

