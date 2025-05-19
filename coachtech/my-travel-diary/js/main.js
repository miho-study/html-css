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

// document.addEventListener("DOMContentLoaded", () => {
//     const regionFilter = document.getElementById("regionFilter");
//     const dateSort = document.getElementById("dateSort");
//     const cardsContainer = document.getElementById("tripCards");
//     const allCards = Array.from(cardsContainer.children);

//     function updateCards() {
//         const region = regionFilter.value;
//         const sort = dateSort.value;

//         // フィルター処理
//         let filteredCards = allCards.filter(card => {
//             return region === "all" || card.dataset.region === region;
//         });

//         // 並び替え処理
//         filteredCards.sort((a, b) => {
//             const dateA = new Date(a.dataset.date);
//             const dateB = new Date(b.dataset.date);
//             return sort === "asc" ? dateA - dateB : dateB - dateA;
//         });

//         // 表示更新（元の要素を再配置）
//         cardsContainer.innerHTML = "";
//         filteredCards.forEach(card => {
//             cardsContainer.appendChild(card);
//         });

//         // クラス切り替え（1件だけなら単列に）
//         if (region !== "all" && filteredCards.length === 1) {
//             cardsContainer.classList.remove("grid");
//             cardsContainer.classList.add("single-column");
//         } else {
//             cardsContainer.classList.remove("single-column");
//             cardsContainer.classList.add("grid");
//         }
//     }

//     regionFilter.addEventListener("change", updateCards);
//     dateSort.addEventListener("change", updateCards);
//     updateCards(); // 初期表示
// });
let swiper = null;

  document.addEventListener("DOMContentLoaded", () => {
    const regionFilter = document.getElementById("regionFilter");
    const dateSort = document.getElementById("dateSort");
    const wrapper = document.querySelector(".swiper-wrapper");
    const allCards = Array.from(document.querySelectorAll(".trip-card"));

    function updateCards() {
      const region = regionFilter.value;
      const sort = dateSort.value;

      let filteredCards = allCards.filter(card => {
        return region === "all" || card.dataset.region === region;
      });

      filteredCards.sort((a, b) => {
        const dateA = new Date(a.dataset.date);
        const dateB = new Date(b.dataset.date);
        return sort === "asc" ? dateA - dateB : dateB - dateA;
      });

      wrapper.innerHTML = "";
      filteredCards.forEach(card => wrapper.appendChild(card));

      if (swiper) {
        swiper.update();
      }
    }

    regionFilter.addEventListener("change", updateCards);
    dateSort.addEventListener("change", updateCards);

    swiper = new Swiper(".swiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 20,
    });

    updateCards();
  });


const spots = [
  {
    name: "金沢・近江町市場",
    lat: 36.5713,
    lng: 136.6562,
    image: "images/kaisen-isikawa.jpeg",
    description: "新鮮な海の幸を楽しめる金沢の中心地にある市場"
  },
  {
    name: "金沢・兼六園",
    lat: 36.5611,
    lng: 136.6625,
    image: "images/kenrokuen1-isikawa.jpeg",
    description: "日本三名園の一つで式折々美しい景色を楽しめる"
  },
  {
    name: "大阪・USJ",
    lat: 34.6657,
    lng: 135.4323,
    image: "images/uniba-osaka.jpeg",
    description: "新エリアが続々オープンする巨大テーマパーク"
  },
  {
    name: "韓国・ロッテワールド",
    lat: 37.8500,
    lng: 127.1670,
    image: "images/rottewa-rudo-kankoku.jpeg",
    description: "屋内屋外両方楽しめるソウルの巨大遊園地"
  },
  {
    name: "大分・ハーモニーランド",
    lat: 33.4008,
    lng: 131.5465,
    image: "images/sanrio-oita.jpeg",
    description: "西日本唯一のサンリオのテーマパーク"
  },
  {
    name: "広島・宮島",
    lat: 34.2950,
    lng: 132.3190,
    image: "images/miyajima.jpeg",
    description: "海に浮かんで見える鳥居が有名の島"
  },
  {
    name: "大分・別府甘味茶屋",
    lat: 33.3118,
    lng: 131.4856,
    image: "images/dangojiru-oita.jpeg",
    description: "別府で有名のだんご汁のお店"
  },
  {
    name: "名古屋・矢場とん　栄LACHIC店",
    lat: 35.1675,
    lng: 136.9075,
    image: "images/misokatu-nagoya.jpeg",
    description: "名古屋の味噌カツといえばここ！"
  },
  {
    name: "名古屋・まるや本店　名駅店",
    lat: 35.1732,
    lng: 136.8872,
    image: "images/hitumabusi-nagoya.jpeg",
    description: "ひつまぶしが食べられる名古屋を中心に多くあるチェーン店"
  },
  {
    name: "韓国・ユガネタッカルビ　明洞３号店",
    lat: 37.5610,
    lng: 126.9850,
    image: "images/takkarubi.jpeg",
    description: "タッカルビが食べられる韓国のチェーン店"
  },
  {
    name: "名古屋・大洲商店街",
    lat: 35.1596,
    lng: 136.9017,
    image: "images/oosusyoutengai-nagoya.jpeg",
    description: "食べ歩きグルメが充実している商店街"
  },
  {
    name: "京都・伏見稲荷神社",
    lat: 34.9651,
    lng: 135.7727,
    image: "images/inari-kyouto.jpeg",
    description: "千本鳥居が人気の京都の神社"
  },
  {
    name: "東京・野球殿堂博物館",
    lat: 35.7056,
    lng: 139.7519,
    image: "images/yakyu-toukyou.jpeg",
    description: "野球好きのための博物館"
  },
  {
    name: "韓国・ピョンマダン図書館",
    lat: 37.5120,
    lng: 127.0590,
    image: "images/tosyokan.jpeg",
    description: "インスタ映えするユニークなデザインが人気"
  },
  {
    name: "大阪・海遊館",
    lat: 34.6545,
    lng: 135.4289,
    image: "images/kaiyuukan.jpeg",
    description: "日本で唯一ジンベイザメを見ることができる水族館"
  },

];

function initMap() {
  const center = { lat: 35.5, lng: 137.0 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5.5,
    center: center,
  });

  spots.forEach(spot => {
    const marker = new google.maps.Marker({
      position: { lat: spot.lat, lng: spot.lng },
      map: map,
      title: spot.name,
    });

    const content = `
      <div style="max-width:200px">
        <h3>${spot.name}</h3>
        <img src="${spot.image}" alt="${spot.name}" style="width:100%;
        height:140px; object-fit:cover; border-radius:8px; margin-bottom:8px;">
        <p>${spot.description}</p>
      </div>
    `;

    const infoWindow = new google.maps.InfoWindow({ content });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });
}

window.onload = initMap;
