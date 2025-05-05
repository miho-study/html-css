document.querySelectorAll(".filter button").forEach((button)=> {
        button.addEventListener("click", ()=> {
                const region=button.getAttribute("data-region");
                const cards=document.querySelectorAll(".trip-cards .card");

                cards.forEach((card)=> {
                        if (region==="all" || card.dataset.region===region) {
                            card.style.display="block";
                        }

                        else {
                            card.style.display="none";
                        }
                    });
            });
    });

// モーダル表示機能
// const modal=document.getElementById("modal");
// const closeBtn=document.querySelector(".close-button");

// document.querySelectorAll(".open-modal").forEach((btn)=> {
//         btn.addEventListener("click", ()=> {
//                 modal.classList.remove("hidden");
//             });
//     });

// closeBtn.addEventListener("click", ()=> {
//         modal.classList.add("hidden");
//     });

// モーダル外クリックで閉じる
// window.addEventListener("click", (e)=> {
//         if (e.target===modal) {
//             modal.classList.add("hidden");
//         }
//     });

const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.getElementById('closeModal');

// カードクリック時のイベント
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.dataset.id;
    showModalContent(id);
    modal.style.display = 'block';
  });
});

// モーダル閉じる
closeBtn.onclick = () => {
  modal.style.display = 'none';
  modalBody.innerHTML = '';
};

// モーダル外クリックで閉じる
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modalBody.innerHTML = '';
  }
};

// コンテンツ表示切り替え
function showModalContent(id) {
  if (id === 'sapporo') {
    modalBody.innerHTML = `
      <h2>札幌の旅</h2>
      <img src="images/sapporo.jpg" style="width:100%; border-radius:8px; margin:1rem 0;">
      <p>札幌雪まつりでは大きな氷像が圧巻でした！夜はすすきのでスープカレーを堪能。</p>
      <div id="map" style="width:100%; height:300px; border-radius:8px; margin-top:1rem;"></div>
    `;
    loadMap(43.0621, 141.3544, "札幌駅");
  } else if (id === 'kanazawa') {
    modalBody.innerHTML = `
      <h2>金沢の旅</h2>
      <img src="images/kanazawa.jpg" style="width:100%; border-radius:8px; margin:1rem 0;">
      <p>ひがし茶屋街で和菓子づくり体験🍡風情ある街並みをのんびり歩きました。</p>
      <div id="map" style="width:100%; height:300px; border-radius:8px; margin-top:1rem;"></div>
    `;
    loadMap(36.5707, 136.6599, "ひがし茶屋街");
  }
}

// 地図表示用関数
function loadMap(lat, lng, title) {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat, lng },
    zoom: 14,
  });

  new google.maps.Marker({
    position: { lat, lng },
    map: map,
    title: title,
  });
}
