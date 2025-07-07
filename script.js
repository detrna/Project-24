// MENU AWAL
//Tombol Tambah
const tambah3 = document.querySelector(".tambahKananAtas");
const tambah2 = document.querySelector(".tambahKananBawah");
const tambah4 = document.querySelector(".tambahKiriAtas");
let tombolTambah = [tambah2, tambah3, tambah4];
const parentTambah = document.querySelector(".tombolTambah");

tambah2.addEventListener("click", () => aturPemain(1));
tambah3.addEventListener("click", () => aturPemain(2));
tambah4.addEventListener("click", () => aturPemain(3));

const joker1 = document.querySelector(".jokerKiriBawah");
const joker2 = document.querySelector(".jokerKananBawah");
const joker3 = document.querySelector(".jokerKananAtas");
const joker4 = document.querySelector(".jokerKiriAtas");

let flagPemain = [true, false, false, false];
let parentJoker = [joker1, joker2, joker3, joker4];
joker2.addEventListener("click", () => aturPemain(1));
joker3.addEventListener("click", () => aturPemain(2));
joker4.addEventListener("click", () => aturPemain(3));

function aturPemain(nomorPemain) {
  if (gameMulai) {
    return;
  }
  tambahPemain(nomorPemain);
  aturDomTambah(nomorPemain);
}

let jumlahPemain = 1;
function tambahPemain(nomorPemain) {
  if (flagPemain[nomorPemain]) {
    jumlahPemain--;
    flagPemain[nomorPemain] = false;
  } else if (!flagPemain[nomorPemain]) {
    jumlahPemain++;
    flagPemain[nomorPemain] = true;
  }
}

function aturDomTambah(nomorPemain) {
  if (flagPemain[nomorPemain]) {
    parentTambah.removeChild(tombolTambah[nomorPemain - 1]);
    parentJoker[nomorPemain].classList.remove("inactive");
  } else if (!flagPemain[nomorPemain]) {
    parentTambah.appendChild(tombolTambah[nomorPemain - 1]);
    parentJoker[nomorPemain].classList.add("inactive");
  }
}

//Tombol Acak
document
  .querySelector(".tombolAcak")
  .addEventListener("click", () => triggerAcak());

function triggerAcak() {
  aturDomAcak();
  perputaranGame();
}

function aturDomAcak() {
  document.querySelector(".outGame").classList.add("inactive");
  document.querySelector(".inGame").classList.remove("inactive");
}

//Peringatan
const peringatan = document.querySelector(".peringatan");
function tutupPeringatan() {
  peringatan.classList.add("inactive");
}

window.onload = function () {
  if (!localStorage.getItem("peringatanFlag")) {
    peringatan.style.display = "block";
    localStorage.setItem("peringatanFlag", "true");
  }
  setTimeout(() => {
    peringatan.classList.add("fade-out");
    setTimeout(() => {
      peringatan.style.display = "none";
    }, 1000);
  }, 10000);
};

function fullscreen() {
  document.documentElement.requestFullscreen();
  peringatan.style.display = "none";
}

//Tombol Menu Bawah
const tutorial = document.querySelector("#tutorial");
const kredit = document.querySelector("#kredit");
const musik = document.querySelector("#musik");
const bahasa = document.querySelector("#bahasa");
const f11 = document.querySelector("#f11");
const menuTutorial = document.querySelector(".menuTutorial");
const menuKredit = document.querySelector(".menuKredit");
const nocturne = document.getElementById("nocturne");
const imgTutorial = document.querySelector("#imgTutorial");
const imgKredit = document.querySelector("#imgKredit");
const imgMusik = document.querySelector("#imgMusik");
const imgBahasa = document.querySelector("#imgBahasa");
const imgF11 = document.querySelector("#imgF11");
const arrayTextMenuBawah = [tutorial, kredit, musik, bahasa, f11];
const arrayImgMenuBawah = [imgTutorial, imgKredit, imgMusik, imgBahasa, imgF11];

for (let i = 0; i < 5; i++) {
  arrayImgMenuBawah[i].addEventListener("mouseover", () =>
    aktifTextMenuBawah(arrayTextMenuBawah[i])
  );
  arrayImgMenuBawah[i].addEventListener("mouseout", () =>
    nonaktifTextMenuBawah(arrayTextMenuBawah[i])
  );
}

function aktifTextMenuBawah(tombol) {
  tombol.classList.add("aktif");
}
function nonaktifTextMenuBawah(tombol) {
  tombol.classList.remove("aktif");
}

//Tutorial
function tutupTutorial() {
  menuTutorial.classList.add("inactive");
  halamanTutorial = 1;
}
function bukaTutorial() {
  menuTutorial.classList.remove("inactive");
  if (!bahasaIndo) {
    document.getElementById("teksTutorial").textContent =
      "In the middle, four cards will be shullfed and you can operate it by adding, subtracting, multiplying, etc. Two operated card will leave one new card with a new value, and the round will finished once only one card left. Find the right combination til the last result is 24";
  }
}

let halamanTutorial = 1;
function tutorialSelanjutnya() {
  halamanTutorial++;
  console.log(bahasaIndo);
  if (halamanTutorial === 2) {
    document.getElementById("gambarTutorial").src =
      "img/Export/Menu Awal/tutor2.jpg";
    if (bahasaIndo) {
      document.getElementById("teksTutorial").textContent =
        "Kartu joker pemain dapat ditekan jika pemain tersebut sudah menemukan nilai 24.";
    } else {
      document.getElementById("teksTutorial").textContent =
        "Player's joker card can be pressed if said player finished with their 24 value calculation";
    }
  } else if (halamanTutorial === 3) {
    document.getElementById("gambarTutorial").src =
      "img/Export/Menu Awal/tutor3.jpg";
    if (bahasaIndo) {
      document.getElementById("teksTutorial").textContent =
        "Pemain yang terakhir menyalakan joker akan memilih satu pemain untuk membuktikan idenya dengan menekan tombol tanda centang disamping kartu joker pemain tersebut";
    } else {
      document.getElementById("teksTutorial").textContent =
        "Last player to turn on their joker will choose one of the players to proove their idea by pressing the check mark beside joker of the said player";
    }
  } else if (halamanTutorial === 4) {
    document.getElementById("gambarTutorial").src =
      "img/Export/Menu Awal/tutor4.jpg";
    if (bahasaIndo) {
      document.getElementById("teksTutorial").textContent =
        "Tombol baris atas dapat ditekan setelah dua kartu diantara keempatnya ditekan, sementara baris bawah hanya bisa dilakukan dengan satu kartu.";
    } else {
      document.getElementById("teksTutorial").textContent =
        "Operating button on the upper row can be touch by first selecting two of the four cards, meanwhile the bottom row can be done by only selecting one card";
    }
  } else if (halamanTutorial === 5) {
    document.getElementById("gambarTutorial").src =
      "img/Export/Menu Awal/tutor5.jpg";
    if (bahasaIndo) {
      document.getElementById("teksTutorial").textContent =
        "Selamat Menikmati :D";
    } else {
      document.getElementById("teksTutorial").textContent = "Hope You Enjoy :D";
    }
  } else if (halamanTutorial === 6) {
    document.getElementById("gambarTutorial").src =
      "img/Export/Menu Awal/tutor1.jpg";
    if (bahasaIndo) {
      document.getElementById("teksTutorial").textContent =
        "Di tengah, empat kartu akan diacak dan dapat dioperasikan dengan ditambah, dikurang, dikali, dst. Kedua kartu yang dipilih akan menghasilkan satu kartu bernilai baru, dan ronde akan selesai setelah hanya tersisa satu kartu. Cari kombinasi yang tepat sampai hasil akhir berupa 24";
    } else {
      document.getElementById("teksTutorial").textContent =
        "In the middle, four cards will be shullfed and you can operate it by adding, subtracting, multiplying, etc. Two operated card will leave one new card with a new value, and the round will finished once only one card left. Find the right combination til the last result is 24";
    }
    tutupTutorial();
  }
}

//Kredit
function tutupKredit() {
  document.querySelector(".outGame").classList.remove("inactive");
  menuKredit.classList.add("inactive");
  joker1.classList.remove("inactive");
}
function bukaKredit() {
  document.querySelector(".outGame").classList.add("inactive");
  menuKredit.classList.remove("inactive");
  joker1.classList.add("inactive");
}

//Musik
let musikNyala = false;
function aturMusik() {
  console.log("tes");
  if (!musikNyala) {
    nocturne.play();
    musikNyala = true;
    if (bahasaIndo) {
      musik.textContent = "Musik: On";
    } else {
      musik.textContent = "Music: On";
    }
    return;
  } else {
    nocturne.pause();
    musikNyala = false;
    if (bahasaIndo) {
      musik.textContent = "Musik: Off";
    } else {
      musik.textContent = "Music: Off";
    }
  }
}

//Bahasa
let bahasaIndo = true;
function aturBahasa() {
  if (bahasaIndo) {
    bahasa.textContent = "Lang: English";
    bahasaIndo = false;
    document.getElementById("textAcak").textContent = "SHUFFLE";

    document.getElementById("teksPeringatan").textContent =
      "Use fullscreen mode (F11 / Fn + F11) for a max gameplay experience :D";
    kredit.textContent = "Credits";
    f11.textContent = "Full Screen";
    if (musikNyala) {
      musik.textContent = "Music: On";
    } else {
      musik.textContent = "Music: Off";
    }
    return;
  } else {
    bahasa.textContent = "Lang: Indonesia";
    document.getElementById("textAcak").textContent = "ACAK";
    document.getElementById("teksPeringatan").textContent =
      "Gunakan mode layar penuh (F11 / Fn + F11) untuk pengalaman bermain maksimal :D";
    kredit.textContent = "Kredit";
    f11.textContent = "Layar Penuh";
    if (musikNyala) {
      musik.textContent = "Musik: On";
    } else {
      musik.textContent = "Musik: Off";
    }
    bahasaIndo = true;
  }
}

//F11
function aturLayarPenuh() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
}

// INGAME //
// Mulai Game
let gameMulai = false;
function perputaranGame() {
  if (!gameMulai) {
    mulaiGame();
  } else acakGame();
}

async function mulaiGame() {
  await buatKartu();
  await acakKartu();
  await konversiKartu();
  await empatKartuListener();
  await empatKartuHighlightListener();
  await jokerListener();
  await buatArrayKartuKalah();
  await deteksiKartuAs();
  await indikatorCounter();
  await indikatorSkor();
  await matiTombolAcak();
  await resetFlagJoker();
  await modeSolo();
  gameMulai = true;
}

async function acakGame() {
  if (!rondeSelesai) {
    return;
  }
  if (kartuTotal.length !== 0) {
    await hapusEmpatKartu();
    await acakKartu();
    await konversiKartu();
    await deteksiKartuAs();
    await empatKartuListener();
    await empatKartuHighlightListener();
    await hapusTombolBuktikan();
    await resetTombolBuktikan();
    await nyalaTombolJoker();
    await resetFlagAs();
    await resetFlagJoker();
    await matiTombolAcak();
    await indikatorCounter();
    await modeSolo();
  } else {
    await hapusEmpatKartu();
    await hasilAkhir();
    await hapusDOMInGame();
    await nyalaDOMAkhir();
    await hapusTombolBuktikan();
    await nyalaTombolJoker();
    await resetFlagAs();
    await resetTombolBuktikan();
    await resetFlagJokerAwal();
    await indikatorCounterAkhir();
    await matiTombolAcak();
  }
  rondeSelesai = false;
}

//Pembuat Kartu
let kartuTotal = [];
function buatKartu() {
  return new Promise((resolve) => {
    for (let angkaKartu = 1; angkaKartu <= 10; angkaKartu++) {
      kartuTotal.push(
        `hati${angkaKartu}`,
        `ketupat${angkaKartu}`,
        `sekop${angkaKartu}`,
        `keriting${angkaKartu}`
      );
    }
    resolve();
  });
}

//Pengacak Kartu
let kartuDisplayChild = [];
let empatKartu = [];
let empatNilaiKartu = [];
let kartuDisplay = document.querySelector(".empatKartu");
let kartuAcak;
function acakKartu() {
  return new Promise((resolve) => {
    kartuDisplay = document.querySelector(".empatKartu");
    for (let i = 0; i < 4; i++) {
      let kartuAcakIndex = Math.floor(Math.random() * kartuTotal.length);
      kartuAcak = kartuTotal[kartuAcakIndex];
      kartuTotal.splice(kartuAcakIndex, 1);
      kartuDisplayChild[i] = document.createElement("img");
      kartuDisplayChild[i].id = `kartuDisplay${i + 1}`;
      kartuDisplayChild[i].src = `img/Export/Cards Resource/${kartuAcak}.png`;
      console.log(kartuAcak);
      empatKartu[i] = kartuAcak;
      kartuDisplayChild[i].className = `${kartuAcak} kartu kartuUtama mati`;
      arrayWrapperKartu[i].appendChild(kartuDisplayChild[i]);
    }
    resolve();
  });
}

//Konversi Nilai
function konversiKartu() {
  return new Promise((resolve) => {
    for (let i = 0; i < 4; i++) {
      for (let j = 1; j <= 10; j++)
        if (empatKartu[i].includes(`${j}`)) {
          empatNilaiKartu[i] = j;
        }
    }
    resolve();
  });
}

//Var Empat Kartu
const wrapperKartu1 = document.querySelector(".kartu1");
const wrapperKartu2 = document.querySelector(".kartu2");
const wrapperKartu3 = document.querySelector(".kartu3");
const wrapperKartu4 = document.querySelector(".kartu4");
const arrayWrapperKartu = [
  wrapperKartu1,
  wrapperKartu2,
  wrapperKartu3,
  wrapperKartu4,
];

//Function to give event listener to 4 cards shuffled
function empatKartuListener() {
  return new Promise((resolve) => {
    kartuDisplay1.addEventListener("click", () => toggleEmpatKartu(0));
    kartuDisplay2.addEventListener("click", () => toggleEmpatKartu(1));
    kartuDisplay3.addEventListener("click", () => toggleEmpatKartu(2));
    kartuDisplay4.addEventListener("click", () => toggleEmpatKartu(3));
    resolve();
  });
}

function empatKartuHighlightListener() {
  return new Promise((resolve) => {
    for (let i = 0; i < 4; i++) {
      kartuDisplayChild[i].addEventListener("mouseover", () =>
        empatKartuHighlightNyala(i)
      );
      kartuDisplayChild[i].addEventListener("mouseout", () =>
        empatKartuHighlightMati(i)
      );
    }
    resolve();
  });
}

//Adding event listener to joker cards
function jokerListener() {
  return new Promise((resolve) => {
    joker1.classList.remove("mati");
    joker1.addEventListener("click", () => aturJoker(0));
    joker2.addEventListener("click", () => aturJoker(1));
    joker3.addEventListener("click", () => aturJoker(2));
    joker4.addEventListener("click", () => aturJoker(3));
    resolve();
  });
}

//Creating the array of the total score, based on how many the players are
let kartuKalah;
function buatArrayKartuKalah() {
  return new Promise((resolve) => {
    kartuKalah = [0, 0, 0, 0];
    for (let i = 0; i < 4; i++) {
      if (!flagPemain[i]) {
        kartuKalah[i] = 999;
      }
      kartuKalah;
    }
    resolve();
  });
}

let kartuAsDiacak;
function deteksiKartuAs() {
  return new Promise((resolve) => {
    kartuAsDiacak = [false, false, false, false];
    for (let i = 0; i < 4; i++) {
      if (empatNilaiKartu[i] === 1) {
        kartuAsDiacak[i] = true;
      }
    }
    resolve();
  });
}

// Atur Indikator //
//Skor
const skor1 = document.getElementById("skorKiriBawah");
const skor2 = document.getElementById("skorKananBawah");
const skor3 = document.getElementById("skorKananAtas");
const skor4 = document.getElementById("skorKiriAtas");
const arrayDOMSkor = [skor1, skor2, skor3, skor4];

function indikatorSkor() {
  return new Promise((resolve) => {
    for (let i = 0; i < 4; i++) {
      arrayDOMSkor[i].textContent = kartuKalah[i];

      if (!gameMulai) {
        if (!flagPemain[i]) {
          console.log(arrayDOMSkor[i]);
          arrayDOMSkor[i].classList.add("hidden");
        }
      }
    }
    resolve();
  });
}

function resetIndikatorSkor() {
  return new Promise((resolve) => {
    for (let i = 0; i < 4; i++) {
      arrayDOMSkor[i].classList.remove("hidden");
    }
    resolve();
  });
}

//Counter kartu total
function indikatorCounter() {
  return new Promise((resolve) => {
    document.getElementById("textCounter").textContent = kartuTotal.length;
    resolve();
  });
}
function indikatorCounterAkhir() {
  return new Promise((resolve) => {
    document.getElementById("textCounter").textContent = 0;
    resolve();
  });
}

//Kalkulator
function indikatorKalkulator() {
  return new Promise((resolve) => {
    document.querySelector(".textKalkulator").textContent = hasil;
    resolve();
  });
}

const varKalkulator = document.querySelector(".kalkulator");
let timeoutId;
function nyalaKalkulator() {
  return new Promise((resolve) => {
    clearTimeout(timeoutId);
    varKalkulator.classList.remove("aktif");
    void varKalkulator.offsetWidth;
    varKalkulator.classList.add("aktif");
    timeoutId = setTimeout(() => {
      varKalkulator.classList.remove("aktif");
    }, 3000);
    resolve();
  });
}

//Tombol Acak InGame
const tombolAcakInGame = document.getElementById("tombolAcakInGameID");
function nyalaTombolAcak() {
  if (kartuDihapus !== 3) {
    return;
  }
  tombolAcakInGame.classList.remove("mati");
  tombolAcakInGame.classList.add("highlight");
}
function matiTombolAcak() {
  return new Promise((resolve) => {
    tombolAcakInGame.classList.add("mati");
    tombolAcakInGame.classList.remove("highlight");
    resolve();
  });
}

let kartuJoker = [];
function resetFlagJoker() {
  return new Promise((resolve) => {
    for (let i = 0; i < 4; i++) {
      kartuJoker[i] = false;
    }
    resolve();
  });
}

function resetFlagJokerAwal() {
  return new Promise((resolve) => {
    for (let i = 0; i < 4; i++) {
      if (flagPemain[i]) {
        kartuJoker[i] = true;
      }
      if (!flagPemain[i]) {
        kartuJoker[i] = false;
      }
    }
    resolve();
  });
}

//Deteksi Mode Solo
let modeSoloFlag;
function modeSolo() {
  return new Promise((resolve) => {
    if (jumlahPemain === 1) {
      modeSoloFlag = true;
      flagTombolBuktikan = true;
      nyalaTombolEmpatKartu();
    }
    resolve();
  });
}

//Function to activates and deactivates joker cards
async function aturJoker(jokerX) {
  if (modeSoloFlag) {
    return;
  }
  if (flagTombolBuktikan) {
    return;
  }

  await triggerFlagJoker(jokerX);
  await matiTombolJoker();
  await buatTombolBuktikan();
  await tombolPembuktiListener();
}

function triggerFlagJoker(jokerX) {
  return new Promise((resolve) => {
    if (!kartuJoker[jokerX]) {
      aktifJoker(jokerX);
    } else {
      nonAktifJoker(jokerX);
    }
    if (kartuJoker.filter(Boolean).length !== jumlahPemain - 1) {
      return;
    }
    resolve();
  });
}

function aktifJoker(jokerX) {
  kartuJoker[jokerX] = true;
  parentJoker[jokerX].classList.add("gelap");
}

function nonAktifJoker(jokerX) {
  kartuJoker[jokerX] = false;
  parentJoker[jokerX].classList.remove("gelap");
}

//Activating joker card button
let tombolJokerMati = false;
function matiTombolJoker() {
  return new Promise((resolve) => {
    for (let i = 0; i < 4; i++) {
      if (kartuJoker[i]) {
        parentJoker[i].classList.add("mati");
      }
    }
    tombolJokerMati = true;
    resolve();
  });
}

function nyalaTombolJoker() {
  return new Promise((resolve) => {
    for (let i = 0; i < 4; i++) {
      parentJoker[i].classList.remove("mati");
      parentJoker[i].classList.remove("gelap");
    }
    resolve();
    tombolJokerMati = false;
  });
}

//Function to choose the player to prove, will trigger if there is one last deactivated joker card left
let flagTombolBuktikan = false;
const buktikan1 = document.getElementById("pembuktiKiriBawah");
const buktikan2 = document.getElementById("pembuktiKananBawah");
const buktikan3 = document.getElementById("pembuktiKananAtas");
const buktikan4 = document.getElementById("pembuktiKiriAtas");
const arrayTombolBuktikan = [buktikan1, buktikan2, buktikan3, buktikan4];

let pemainKalah, pemainMenang;
async function pembuktian(pemainX) {
  await nyalaTombolEmpatKartu();
  await matiTombolBuktikan(pemainX);
  await penentuPemainPembukti(pemainX);
}

function penentuPemainPembukti(pemainX) {
  return new Promise((resolve) => {
    for (let i = 0; i < 4; i++) {
      if (!kartuJoker[i]) {
        pemainKalah = i;
        pemainMenang = pemainX;
      }
    }
    resolve();
  });
}

function nyalaTombolEmpatKartu() {
  return new Promise((resolve) => {
    for (let i = 0; i < 4; i++) {
      kartuDisplayChild[i].classList.remove("mati");
    }
    resolve();
  });
}

function matiTombolEmpatKartu() {
  return new Promise((resolve) => {
    if (kartuDihapus !== 3) {
      return;
    }
    for (let i = 0; i < 4; i++) {
      kartuDisplayChild[i].classList.add("mati");
    }
    resolve();
  });
}

function buatTombolBuktikan() {
  return new Promise((resolve) => {
    for (let i = 0; i < 4; i++) {
      if (kartuJoker[i]) {
        arrayTombolBuktikan[i].classList.remove("inactive");
      }
    }
    flagTombolBuktikan = true;
    resolve();
  });
}

function hapusTombolBuktikan() {
  return new Promise((resolve) => {
    for (let i = 0; i < 4; i++) {
      if (kartuJoker[i]) {
        arrayTombolBuktikan[i].classList.add("inactive");
      }
    }
    resolve();
  });
}

//Adding event listener to the proving button
function tombolPembuktiListener() {
  return new Promise((resolve) => {
    for (let j = 0; j < 4; j++) {
      if (kartuJoker[j]) {
        arrayTombolBuktikan[j].addEventListener("click", () => pembuktian(j));
      }
    }
    resolve();
  });
}

function matiTombolBuktikan(pemainX) {
  return new Promise((resolve) => {
    for (let i = 0; i < 4; i++) {
      arrayTombolBuktikan[i].classList.add("inactive");
    }
    arrayTombolBuktikan[pemainX].classList.remove("inactive");
    arrayTombolBuktikan[pemainX].classList.add("nyala");
    resolve();
  });
}

function resetTombolBuktikan() {
  return new Promise((resolve) => {
    if (modeSoloFlag) {
      return resolve();
    }
    for (let i = 0; i < 4; i++) {
      if (kartuJoker[i]) {
        arrayTombolBuktikan[i].classList.add("inactive");
        arrayTombolBuktikan[i].classList.remove("nyala");
        flagTombolBuktikan = false;
      }
    }
    resolve();
  });
}

//Function to determine 2 cards to operate with
let flagEmpatKartu = [false, false, false, false];
let totalTrue;
let nilai1, nilai2;
let kartuPilih1, kartuPilih2;
let posisiKartu1, posisiKartu2;

function toggleEmpatKartu(kartuX) {
  if (!flagTombolBuktikan) {
    return;
  }
  if (pembuatanKartuAs) {
    return;
  }
  if (rondeSelesai) {
    return;
  }

  if (empatNilaiKartu[kartuX] === 0) {
    return;
  }
  if (flagEmpatKartu[kartuX]) {
    nonaktifKartu(kartuX);
  } else if (!flagEmpatKartu[kartuX]) {
    aktifKartu(kartuX);
    buatAs(kartuX);
  }
  totalTrue = flagEmpatKartu.filter(Boolean).length;
}

//Function to deactivates 2 cards picked
function nonaktifKartu(kartuX) {
  if (flagEmpatKartu[kartuX]) {
    if (totalTrue === 1) {
      flagEmpatKartu[kartuX] = false;
      nilai1 = undefined;
      kartuPilih1 = null;
      kartuDisplayChild[kartuX].classList.remove("nyala");
      matiTombolOperasi1Angka();
    } else if (totalTrue === 2 && nilai2 === empatNilaiKartu[kartuX]) {
      flagEmpatKartu[kartuX] = false;
      nilai2 = undefined;
      kartuPilih2 = null;
      kartuDisplayChild[kartuX].classList.remove("nyala");
      nyalaTombolOperasi1Angka();
      matiTombolOperasi2Angka();
    }
  }
}

//Function to activates 2 cards picked
function aktifKartu(kartuX) {
  //Kartu X yg aktif, sisanya gk aktif
  totalTrue = flagEmpatKartu.filter(Boolean).length;
  if (totalTrue === 0) {
    flagEmpatKartu[kartuX] = true;
    nilai1 = empatNilaiKartu[kartuX];
    kartuPilih1 = empatKartu[kartuX];
    posisiKartu1 = kartuX;
    kartuDisplayChild[kartuX].classList.add("nyala");
    nyalaTombolOperasi1Angka();
  }
  if (totalTrue === 1 && !flagEmpatKartu[kartuX]) {
    flagEmpatKartu[kartuX] = true;
    nilai2 = empatNilaiKartu[kartuX];
    kartuPilih2 = empatKartu[kartuX];
    posisiKartu2 = kartuX;
    kartuDisplayChild[kartuX].classList.add("nyala");
    matiTombolOperasi1Angka();
    nyalaTombolOperasi2Angka();
  }
}

function nonaktifSemuaKartu() {
  for (let i = 0; i < 4; i++) {
    flagEmpatKartu[i] = false;
    nilai1 = undefined;
    matiTombolOperasi1Angka();
  }
}

function empatKartuHighlightNyala(kartuX) {
  if (nilai2 != undefined) {
    return;
  }
  kartuDisplayChild[kartuX].classList.add("mouseover");
}
function empatKartuHighlightMati(kartuX) {
  if (nilai2 != undefined) {
    return;
  }
  kartuDisplayChild[kartuX].classList.remove("mouseover");
}

//Pembuat Kartu As
async function buatAs() {
  await filterAs();
  await hapusNilaiLamaAs();
  await aturDOMAs();
  await listenerAs();
  await disableDOMEmpatKartu();
}

let posisiKartuAs = [false, false, false, false];
function filterAs() {
  if (flagEmpatKartu.filter(Boolean).length === 1) {
    return new Promise((resolve) => {
      if (!kartuAsDiacak[posisiKartu1]) {
        return;
      }
      if (nilai1 !== 1) {
        return;
      }
      if (posisiKartuAs[posisiKartu1]) {
        return;
      }
      posisiKartuAs[posisiKartu1] = true;
      resolve();
    });
  }
  if (flagEmpatKartu.filter(Boolean).length === 2) {
    return new Promise((resolve) => {
      if (!kartuAsDiacak[posisiKartu2]) {
        return;
      }
      if (nilai2 !== 1) {
        return;
      }
      if (posisiKartuAs[posisiKartu2]) {
        return;
      }
      posisiKartuAs[posisiKartu2] = true;
      resolve();
    });
  }
}

function resetFlagAs() {
  return new Promise((resolve) => {
    posisiKartuAs = [false, false, false, false];
    resolve();
  });
}

function hapusNilaiLamaAs() {
  return new Promise((resolve) => {
    if (flagEmpatKartu.filter(Boolean).length === 1) {
      nilai1 = undefined;
      kartuPilih1 = undefined;
      resolve();
    }
    if (flagEmpatKartu.filter(Boolean).length === 2) {
      nilai2 = undefined;
      kartuPilih2 = undefined;
      resolve();
    }
  });
}

let buatDomAs = false;
const kartuAsSatu = document.getElementById("kartuAsSatu");
const kartuAsSebelas = document.getElementById("kartuAsSebelas");

function aturDOMAs() {
  return new Promise((resolve) => {
    if (buatDomAs) {
      return resolve();
    }
    document.querySelector(".kartuAs").classList.remove("inactive");
    resolve();
  });
}

function listenerAs() {
  return new Promise((resolve) => {
    kartuAsSebelas.addEventListener("click", () => buatNilaiSebelas());
    kartuAsSatu.addEventListener("click", () => buatNilaiSatu());
    resolve();
  });
}

let pembuatanKartuAs = false;
function disableDOMEmpatKartu() {
  return new Promise((resolve) => {
    for (let i = 0; i < 4; i++) {
      kartuDisplayChild[i].classList.add("mati");
      pembuatanKartuAs = true;
    }
    resolve();
  });
}

function enableDOMEmpatKartu() {
  return new Promise((resolve) => {
    for (let i = 0; i < 4; i++) {
      kartuDisplayChild[i].classList.remove("mati");
    }
    resolve();
  });
}

async function buatNilaiSebelas() {
  await nilaiSebelas();
  await enableDOMEmpatKartu();
  await hapusDOMAs();
  await resetDOMLamaAs();
  await resetFlagLamaAs();
}

async function buatNilaiSatu() {
  await nilaiSatu();
  await enableDOMEmpatKartu();
  await hapusDOMAs();
  await resetDOMLamaAs();
  await resetFlagLamaAs();
}

function nilaiSebelas() {
  return new Promise((resolve) => {
    if (totalTrue === 1) {
      empatNilaiKartu[posisiKartu1] = 11;
      kartuDisplayChild[posisiKartu1].classList.add("kartuAS");
      if (kartuDisplayChild[posisiKartu1].className.includes("hati")) {
        kartuDisplayChild[
          posisiKartu1
        ].src = `img/Export/Cards Resource/hatiAs11.png`;
      }
      if (kartuDisplayChild[posisiKartu1].className.includes("ketupat")) {
        kartuDisplayChild[
          posisiKartu1
        ].src = `img/Export/Cards Resource/ketupatAs11.png`;
      }
      if (kartuDisplayChild[posisiKartu1].className.includes("sekop")) {
        kartuDisplayChild[
          posisiKartu1
        ].src = `img/Export/Cards Resource/sekopAs11.png`;
      }
      if (kartuDisplayChild[posisiKartu1].className.includes("keriting")) {
        kartuDisplayChild[
          posisiKartu1
        ].src = `img/Export/Cards Resource/keritingAs11.png`;
      }
    }
    if (totalTrue === 2) {
      empatNilaiKartu[posisiKartu2] = 11;
      if (kartuDisplayChild[posisiKartu2].className.includes("hati")) {
        kartuDisplayChild[
          posisiKartu2
        ].src = `img/Export/Cards Resource/hatiAs11.png`;
      }
      if (kartuDisplayChild[posisiKartu2].className.includes("ketupat")) {
        kartuDisplayChild[
          posisiKartu2
        ].src = `img/Export/Cards Resource/ketupatAs11.png`;
      }
      if (kartuDisplayChild[posisiKartu2].className.includes("sekop")) {
        kartuDisplayChild[
          posisiKartu2
        ].src = `img/Export/Cards Resource/sekopAs11.png`;
      }
      if (kartuDisplayChild[posisiKartu2].className.includes("keriting")) {
        kartuDisplayChild[
          posisiKartu2
        ].src = `img/Export/Cards Resource/keritingAs11.png`;
      }
    }
    resolve();
  });
}

function nilaiSatu() {
  return new Promise((resolve) => {
    if (totalTrue === 1) {
      empatNilaiKartu[posisiKartu1] = 1;
      if (kartuDisplayChild[posisiKartu1].className.includes("hati")) {
        kartuDisplayChild[
          posisiKartu1
        ].src = `img/Export/Cards Resource/hatiAs1.png`;
      }
      if (kartuDisplayChild[posisiKartu1].className.includes("ketupat")) {
        kartuDisplayChild[
          posisiKartu1
        ].src = `img/Export/Cards Resource/ketupatAs1.png`;
      }
      if (kartuDisplayChild[posisiKartu1].className.includes("sekop")) {
        kartuDisplayChild[
          posisiKartu1
        ].src = `img/Export/Cards Resource/sekopAs1.png`;
      }
      if (kartuDisplayChild[posisiKartu1].className.includes("keriting")) {
        kartuDisplayChild[
          posisiKartu1
        ].src = `img/Export/Cards Resource/keritingAs1.png`;
      }
      resolve();
    }
    if (totalTrue === 2) {
      empatNilaiKartu[posisiKartu2] = 1;
      if (kartuDisplayChild[posisiKartu2].className.includes("hati")) {
        kartuDisplayChild[
          posisiKartu2
        ].src = `img/Export/Cards Resource/hatiAs1.png`;
      }
      if (kartuDisplayChild[posisiKartu2].className.includes("ketupat")) {
        kartuDisplayChild[
          posisiKartu2
        ].src = `img/Export/Cards Resource/ketupatAs1.png`;
      }
      if (kartuDisplayChild[posisiKartu2].className.includes("sekop")) {
        kartuDisplayChild[
          posisiKartu2
        ].src = `img/Export/Cards Resource/sekopAs1.png`;
      }
      if (kartuDisplayChild[posisiKartu2].className.includes("keriting")) {
        kartuDisplayChild[
          posisiKartu2
        ].src = `img/Export/Cards Resource/keritingAs1.png`;
      }
      resolve();
    }
  });
}

function resetFlagLamaAs() {
  return new Promise((resolve) => {
    pembuatanKartuAs = false;
    if (flagEmpatKartu.filter(Boolean).length === 1) {
      flagEmpatKartu[posisiKartu1] = false;
      resolve();
    }
    if (flagEmpatKartu.filter(Boolean).length === 2) {
      flagEmpatKartu[posisiKartu2] = false;
      resolve();
    }
  });
}

function hapusDOMAs() {
  return new Promise((resolve) => {
    document.querySelector(".kartuAs").classList.add("inactive");

    resolve();
  });
}

function resetDOMLamaAs() {
  return new Promise((resolve) => {
    if (flagEmpatKartu.filter(Boolean).length === 1) {
      kartuDisplayChild[posisiKartu1].classList.remove("nyala");
    }
    if (flagEmpatKartu.filter(Boolean).length === 2) {
      kartuDisplayChild[posisiKartu2].classList.remove("nyala");
    }
    resolve();
  });
}

//Variables to operate
const tombolOperasi = {
  tambah: document.querySelector("#tambah"),
  kurang: document.querySelector("#kurang"),
  kali: document.querySelector("#kali"),
  bagi: document.querySelector("#bagi"),
  kuadrat: document.querySelector("#kuadrat"),
  akar: document.querySelector("#akar"),
};

let tombolOperasiParent, tombolOperasi1Angka, tombolOperasi2Angka;
document.addEventListener("DOMContentLoaded", () => {
  tombolOperasiParent = document.querySelector(".Operasi");
  tombolOperasi1Angka = document.querySelector(".operasi1Angka");
  tombolOperasi2Angka = document.querySelector(".operasi2Angka");
});

function hapusTombolOperasi(tombolOperasiChild) {
  tombolOperasiParent.removeChild(tombolOperasiChild);
}

function tambahTombolOperasi(tombolOperasiChild) {
  tombolOperasiParent.appendChild(tombolOperasiChild);
}

let hasil;
let kartuDihapus = 0;
let menang = false;
let textKartu24 = "kartu 24";

function operasiSatuKartu(operator) {
  if (nilai2 !== undefined) {
    return;
  }

  switch (operator) {
    case "^":
      hasil = nilai1 * nilai1;
      break;

    case "sqrt":
      if (!Math.sqrt(nilai1).toString().includes(".")) {
        hasil = Math.sqrt(nilai1);
      }
      break;
  }
  nonaktifSemuaKartu();
  setelahKalkulasi();
}
function operasiDuaKartu(operator) {
  if (nilai2 === undefined) {
    return;
  }

  switch (operator) {
    case "+":
      hasil = nilai1 + nilai2;
      break;

    case "-":
      hasil = nilai1 - nilai2;
      break;

    case "*":
      hasil = nilai1 * nilai2;
      break;

    case "/":
      hasil = nilai1 / nilai2;
      break;
  }
  kartuDihapus++;
  setelahKalkulasi();
}

let flagUndo;
function undo() {
  if (rondeSelesai) {
    return;
  }
  undoNilai();
  undoDOM();
  setelahUndo();
}

function undoNilai() {
  empatNilaiKartu[posisiKartu1] = simpanNilai1;
  empatNilaiKartu[posisiKartu2] = simpanNilai2;
}

function undoDOM() {
  kartuDisplayChild[posisiKartu2].classList.remove("gelap");
  for (let i = 0; i < 4; i++) {
    kartuDisplayChild[i].classList.remove("mouseover");
  }
  kartuDihapus--;
}

//Things to do after cards calculation
function setelahKalkulasi() {
  hasilKartu();
  hapusDOMKartu();
  backUpNilai();
  hapusNilaiKartu();
  resetFlagKartu();
  resetHighlight();
  indikatorKalkulator();
  nyalaKalkulator();
  nyalaTombolAcak();
  nyalaTombolUndo();
  matiTombolOperasi2Angka();
  matiTombolOperasi1Angka();
  matiTombolUndo();
  matiTombolEmpatKartu();
  skor();
  indikatorSkor();
}

function setelahUndo() {
  hasilKartu();
  hapusDOMKartu();
  backUpNilai();
  hapusNilaiKartu();
  resetFlagKartu();
  resetHighlight();
  nyalaTombolAcak();
  nyalaTombolUndo();
  matiTombolOperasi2Angka();
  matiTombolOperasi1Angka();
  matiTombolUndo();
  matiTombolEmpatKartu();
  skor();
  indikatorSkor();
}

//Setting the value of the first card picked in the two cards calculation as the result.
function hasilKartu() {
  for (let i = 0; i < 4; i++)
    if (kartuPilih1 === empatKartu[i]) {
      empatNilaiKartu[i] = hasil;
    }
}

let simpanNilai1, simpanNilai2;
function backUpNilai() {
  simpanNilai1 = nilai1;
  simpanNilai2 = nilai2;
}

//Erasing the value of 2 cards picked
function hapusNilaiKartu() {
  nilai1 = undefined;
  nilai2 = undefined;
  kartuPilih1 = null;
  kartuPilih2 = null;
}

function resetFlagKartu() {
  for (let i = 0; i < 4; i++) {
    flagEmpatKartu[i] = false;
  }
}

function resetHighlight() {
  for (let i = 0; i < 4; i++) {
    kartuDisplayChild[i].classList.remove("nyala");
  }
}

//Delete the existing DOM of 4 cards to mixed earlier
function hapusDOMKartu() {
  for (let i = 0; i < 4; i++) {
    if (kartuPilih2 === empatKartu[i]) {
      kartuDisplayChild[i].classList.add("gelap");
      empatNilaiKartu[i] = 0;
    }
  }
}

//Function to give score that will trigger if only 3 cards already deleted.
//Giving player which demand a proof 4 cards if the proving one succeed
//and 4 cards to the player who proves if they failed to prove

let rondeSelesai = false;
function skor() {
  if (kartuDihapus !== 3) {
    return;
  }
  if (hasil === 24) {
    menang = true;
  }
  if (modeSoloFlag) {
    if (!menang) {
      kartuKalah[0] = kartuKalah[0] + 4;
      menang = false;
      kartuDihapus = 0;
      rondeSelesai = true;
      return;
    }
  }
  if (menang) {
    kartuKalah[pemainKalah] = kartuKalah[pemainKalah] + 4;
  } else {
    kartuKalah[pemainMenang] = kartuKalah[pemainMenang] + 4;
  }
  menang = false;
  kartuDihapus = 0;
  rondeSelesai = true;
}

let pemenang, nilaiKartuKalahTerdikit, kartuKalahTerdikit;
function hasilAkhir() {
  return new Promise((resolve) => {
    if (modeSoloFlag) {
      return resolve();
    }

    pemenang = 1 + kartuKalah.indexOf(Math.min(...kartuKalah));
    nilaiKartuKalahTerdikit = Math.min(...kartuKalah);
    kartuTerdikit = kartuKalah.filter((x) => x === nilaiKartuKalahTerdikit);
    console.log(kartuTerdikit);
    gameMulai = false;

    if (kartuTerdikit.length > 1) {
      if (bahasaIndo) {
        document.getElementById("textMenang").textContent = `GAME SERI`;
        return resolve();
      } else {
        document.getElementById("textMenang").textContent = `GAME DRAW`;
      }
    }

    if (bahasaIndo) {
      document.getElementById(
        "textMenang"
      ).textContent = `PEMAIN ${pemenang} MENANG`;
      return resolve();
    } else {
      document.getElementById(
        "textMenang"
      ).textContent = `PLAYER ${pemenang} WIN`;
      resolve();
    }
  });
}

function hasilAkhirSolo() {
  return new Promise((resolve) => {
    if (bahasaIndo) {
      document.getElementById("textMenang").textContent = `SKOR: ${kartuKalah}`;
      return resolve();
    } else {
      document.getElementById(
        "textMenang"
      ).textContent = `SCORE: ${kartuKalah}`;
    }
  });
}

//Interaksi Tombol Operasi
const tambah = document.querySelector(".tambah");
const kurang = document.querySelector(".kurang");
const kali = document.querySelector(".kali");
const bagi = document.querySelector(".bagi");
const akar = document.querySelector(".akar");
const kuadrat = document.querySelector(".kuadrat");
const arrayOperasi1Angka = [akar, kuadrat];
const arrayOperasi2Angka = [tambah, kurang, kali, bagi];

function nyalaTombolOperasi1Angka() {
  for (let i = 0; i < 2; i++) {
    arrayOperasi1Angka[i].classList.add("highlight");
    arrayOperasi1Angka[i].classList.remove("mati");
  }
}

function nyalaTombolOperasi2Angka() {
  for (let i = 0; i < 4; i++) {
    arrayOperasi2Angka[i].classList.add("highlight");
    arrayOperasi2Angka[i].classList.remove("mati");
  }
}

function nyalaTombolUndo() {
  console.log("nyalatombolundo");
  console.log(document.querySelector(".classUndo"));
  document.querySelector(".classUndo").classList.add("highlight");
  document.querySelector(".classUndo").classList.remove("mati");
}

function matiTombolOperasi1Angka() {
  for (let i = 0; i < 2; i++) {
    arrayOperasi1Angka[i].classList.remove("highlight");
    arrayOperasi1Angka[i].classList.add("mati");
  }
}

function matiTombolOperasi2Angka() {
  for (let i = 0; i < 4; i++) {
    arrayOperasi2Angka[i].classList.remove("highlight");
    arrayOperasi2Angka[i].classList.add("mati");
  }
}

function matiTombolUndo() {
  return new Promise((resolve) => {
    if (kartuDihapus !== 3) {
      return resolve();
    }
    document.querySelector(".classUndo").classList.remove("highlight");
    document.querySelector(".classUndo").classList.add("mati");
    resolve();
  });
}

function hapusEmpatKartu() {
  return new Promise((resolve) => {
    for (let i = 0; i < 4; i++) {
      arrayWrapperKartu[i].removeChild(kartuDisplayChild[i]);
    }
    resolve();
  });
}

/* SETELAH GAME SELESAI*/
function kembali() {
  nyalaDOMAwal();
  matiDOMAkhir();
  matiDOMInGame();
  resetIndikatorSkor();
}

function mainLagi() {
  gameMulai = false;
  rondeSelesai = false;
  matiDOMAkhir();
  nyalaDOMInGame();
  mulaiGame();
}

function hapusDOMInGame() {
  return new Promise((resolve) => {
    document.querySelector(".empatKartu").classList.add("inactive");
    document.querySelector(".operasi").classList.add("inactive");
    document.querySelector("#tombolUndo").classList.add("inactive");
    document.querySelector("#tombolAcakInGame").classList.add("inactive");
    resolve();
  });
}

function nyalaDOMAwal() {
  document.querySelector(".outGame").classList.remove("inactive");
}

function matiDOMAkhir() {
  document.querySelector(".afterGame").classList.add("inactive");
}

function nyalaDOMAkhir() {
  return new Promise((resolve) => {
    document.querySelector(".afterGame").classList.remove("inactive");
    resolve();
  });
}

function matiDOMInGame() {
  document.querySelector(".inGame").classList.add("inactive");
  document.querySelector(".empatKartu").classList.remove("inactive");
  document.querySelector(".operasi").classList.remove("inactive");
  document.querySelector("#tombolUndo").classList.remove("inactive");
  document.querySelector("#tombolAcakInGame").classList.remove("inactive");
}

function nyalaDOMInGame() {
  document.querySelector(".inGame").classList.remove("inactive");
  document.querySelector(".empatKartu").classList.remove("inactive");
  document.querySelector(".operasi").classList.remove("inactive");
  document.querySelector("#tombolUndo").classList.remove("inactive");
  document.querySelector("#tombolAcakInGame").classList.remove("inactive");
}
