//BEFORE THE GAME START

//Tombol Acak
document
  .querySelector(".tombolAcak")
  .addEventListener("click", () => triggerAcak());

function triggerAcak() {
  if (jumlahPemain === 1) {
    return;
  }
  modifyDomAcak();
  perputaranGame();
}

function modifyDomAcak() {
  document.querySelector(".outGame").classList.add("inactive");
  document.querySelector(".inGame").classList.remove("inactive");
}

//Tombol Tambah
const tambah3 = document.querySelector(".tambahKananAtas");
const tambah2 = document.querySelector(".tambahKananBawah");
const tambah4 = document.querySelector(".tambahKiriAtas");
let tombolTambah = [tambah2, tambah3, tambah4];
const parentTambah = document.querySelector(".tombolTambah");

tambah2.addEventListener("click", () => triggerPemain(1));
tambah3.addEventListener("click", () => triggerPemain(2));
tambah4.addEventListener("click", () => triggerPemain(3));

const joker1 = document.querySelector(".jokerKiriBawah");
const joker2 = document.querySelector(".jokerKananBawah");
const joker3 = document.querySelector(".jokerKananAtas");
const joker4 = document.querySelector(".jokerKiriAtas");
let kartuJoker = [true, false, false, false];
let flagPemain = [true, false, false, false];
let parentJoker = [joker1, joker2, joker3, joker4];
joker2.addEventListener("click", () => triggerPemain(1));
joker3.addEventListener("click", () => triggerPemain(2));
joker4.addEventListener("click", () => triggerPemain(3));

let a = 1;
//Pembuat Kartu
let kartuTotal = [];
let kartuAsTotal = [11, 1];
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
// jika angka kartu satu, maka akan membuat variabel jenis kartu baru sampai kartu ke 10

let jumlahPemain = 1;
function triggerPemain(nomorPemain) {
  if (game) {
    return;
  }
  tambahPemain(nomorPemain);
  modifyDomTambah(nomorPemain);
}

function tambahPemain(nomorPemain) {
  if (flagPemain[nomorPemain]) {
    jumlahPemain--;
    flagPemain[nomorPemain] = false;
    kartuJoker[nomorPemain] = false;
  } else if (!flagPemain[nomorPemain]) {
    jumlahPemain++;
    flagPemain[nomorPemain] = true;
    kartuJoker[nomorPemain] = true;
  }
}

function modifyDomTambah(nomorPemain) {
  if (flagPemain[nomorPemain]) {
    parentTambah.removeChild(tombolTambah[nomorPemain - 1]);
    parentJoker[nomorPemain].classList.remove("inactive");
  } else if (!flagPemain[nomorPemain]) {
    parentTambah.appendChild(tombolTambah[nomorPemain - 1]);
    parentJoker[nomorPemain].classList.add("inactive");
  }
}

//STARTING THE GAME

//Pengacak 4 Kartu
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

      kartuDisplayChild[i] = document.createElement("div");
      kartuDisplayChild[i].id = `kartuDisplay${i + 1}`;
      empatKartu[i] = kartuAcak;

      kartuDisplayChild[
        i
      ].className = `${kartuAcak} kartu bgKartu kartuUtama mati`;
      arrayWrapperKartu[i].appendChild(kartuDisplayChild[i]);
    }
    resolve();
  });
}

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
} // the use of includes to detect if certain elements consisted inside the value.

async function buatAs() {
  await flagAs();
  await hapusNilaiLamaAs();
  await domAs();
  await listenerAs();
  await disableDOMEmpatKartu();
}

let posisiKartuAs = [false, false, false, false];
function flagAs() {
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

let kartuAsDiacak;
function deteksiKartuAcakAs() {
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

function domAs() {
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

function enableDOM() {
  return new Promise((resolve) => {
    for (let i = 0; i < 4; i++) {
      kartuDisplayChild[i].classList.remove("mati");
    }
    resolve();
  });
}

async function buatNilaiSebelas() {
  await nilaiSebelas();
  await enableDOM();
  await hapusDOMAs();
  await resetDOMLamaAs();
  await resetFlagLamaAs();
}

async function buatNilaiSatu() {
  await nilaiSatu();
  await enableDOM();
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
        kartuDisplayChild[posisiKartu1].classList.add("hatiAS");
      }
      if (kartuDisplayChild[posisiKartu1].className.includes("ketupat")) {
        kartuDisplayChild[posisiKartu1].classList.add("ketupatAS");
      }
      if (kartuDisplayChild[posisiKartu1].className.includes("sekop")) {
        kartuDisplayChild[posisiKartu1].classList.add("sekopAS");
      }
      if (kartuDisplayChild[posisiKartu1].className.includes("keriting")) {
        kartuDisplayChild[posisiKartu1].classList.add("keritingAS");
      }
    }
    if (totalTrue === 2) {
      empatNilaiKartu[posisiKartu2] = 11;
      if (kartuDisplayChild[posisiKartu2].className.includes("hati")) {
        kartuDisplayChild[posisiKartu2].classList.add("hatiAS");
      }
      if (kartuDisplayChild[posisiKartu2].className.includes("ketupat")) {
        kartuDisplayChild[posisiKartu2].classList.add("ketupatAS");
      }
      if (kartuDisplayChild[posisiKartu2].className.includes("sekop")) {
        kartuDisplayChild[posisiKartu2].classList.add("sekopAS");
      }
      if (kartuDisplayChild[posisiKartu2].className.includes("keriting")) {
        kartuDisplayChild[posisiKartu2].classList.add("keritingAS");
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
        kartuDisplayChild[posisiKartu1].classList.add("hatiSatu");
      }
      if (kartuDisplayChild[posisiKartu1].className.includes("ketupat")) {
        kartuDisplayChild[posisiKartu1].classList.add("ketupatSatu");
      }
      if (kartuDisplayChild[posisiKartu1].className.includes("sekop")) {
        kartuDisplayChild[posisiKartu1].classList.add("sekopSatu");
      }
      if (kartuDisplayChild[posisiKartu1].className.includes("keriting")) {
        kartuDisplayChild[posisiKartu1].classList.add("keritingSatu");
      }
      resolve();
    }
    if (totalTrue === 2) {
      empatNilaiKartu[posisiKartu2] = 1;

      if (kartuDisplayChild[posisiKartu2].className.includes("hati")) {
        kartuDisplayChild[posisiKartu2].classList.add("hatiSatu");
      }
      if (kartuDisplayChild[posisiKartu2].className.includes("ketupat")) {
        kartuDisplayChild[posisiKartu2].classList.add("ketupatSatu");
      }
      if (kartuDisplayChild[posisiKartu2].className.includes("sekop")) {
        kartuDisplayChild[posisiKartu2].classList.add("sekopSatu");
      }
      if (kartuDisplayChild[posisiKartu2].className.includes("keriting")) {
        kartuDisplayChild[posisiKartu2].classList.add("keritingSatu");
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
/*
Making a  rng
/////////////
using variable "index" to pick a number based on how many the array is. -let index = Math.floor(Math.random() * var.length)
then, use another variable to set the value to the random number of the array. -let rng = var[index]
*/

//DOM (ID KARTU = #kartuTotal1, #kartuTotal2, etc)
for (let i = 0; i <= 39; i++) {
  let divKartu = document.createElement("div");
  divKartu.id = "tes";
  divKartu.textContent = kartuTotal[i];
  let parentKartu = document.querySelector(".kartu");
  //parentKartu.appendChild(divKartu);
}

/*
Append a variable
let the variable be a create element, .id for adding id, then let a variable be the id of parent element. parent.appendchild(child)
*/

// Creating flags for 4 provided cards
let flagEmpatKartu = [false, false, false, false];
let totalTrue;

// Variables for determining 2 cards to operate with
let nilai1, nilai2;
let kartuPilih1, kartuPilih2;
let posisiKartu1, posisiKartu2;

//Function to determine 2 cards to operate with
function toggleEmpatKartu(flagKartuX) {
  if (pembuatanKartuAs) {
    return;
  }
  if (rondeSelesai) {
    return;
  }

  if (empatNilaiKartu[flagKartuX] === 0) {
    return;
  }
  if (flagEmpatKartu[flagKartuX]) {
    nonaktifKartu(flagKartuX);
  } else if (!flagEmpatKartu[flagKartuX]) {
    aktifKartu(flagKartuX);
    buatAs(flagKartuX);
  }
  totalTrue = flagEmpatKartu.filter(Boolean).length;
}

//Function to deactivates 2 cards picked
function nonaktifKartu(flagKartuX) {
  if (flagEmpatKartu[flagKartuX]) {
    if (totalTrue === 1) {
      flagEmpatKartu[flagKartuX] = false;
      nilai1 = undefined;
      kartuPilih1 = null;
      kartuDisplayChild[flagKartuX].classList.remove("nyala");
      matiTombolOperasi1Angka();
    } else if (totalTrue === 2 && nilai2 === empatNilaiKartu[flagKartuX]) {
      flagEmpatKartu[flagKartuX] = false;
      nilai2 = undefined;
      kartuPilih2 = null;
      kartuDisplayChild[flagKartuX].classList.remove("nyala");
      nyalaTombolOperasi1Angka();
      matiTombolOperasi2Angka();
    }
  }
}

//Function to activates 2 cards picked
function aktifKartu(flagKartuX) {
  //Kartu X yg aktif, sisanya gk aktif
  totalTrue = flagEmpatKartu.filter(Boolean).length;
  if (totalTrue === 0) {
    flagEmpatKartu[flagKartuX] = true;
    nilai1 = empatNilaiKartu[flagKartuX];
    kartuPilih1 = empatKartu[flagKartuX];
    posisiKartu1 = flagKartuX;
    kartuDisplayChild[flagKartuX].classList.add("nyala");
    nyalaTombolOperasi1Angka();
  }
  if (totalTrue === 1 && !flagEmpatKartu[flagKartuX]) {
    flagEmpatKartu[flagKartuX] = true;
    nilai2 = empatNilaiKartu[flagKartuX];
    kartuPilih2 = empatKartu[flagKartuX];
    posisiKartu2 = flagKartuX;
    kartuDisplayChild[flagKartuX].classList.add("nyala");
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

//Function to give event listener to 4 cards provided
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

let rondeSelesai = false;
function skor() {
  if (kartuDihapus !== 3) {
    return;
  }
  for (let i = 1; i <= 4; i++) {
    if (hasil === 24) {
      menang = true;
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

//Adding event listener to joker cards
function jokerListener() {
  return new Promise((resolve) => {
    joker1.classList.remove("mati");
    joker1.addEventListener("click", () => toggleJoker(0));
    joker2.addEventListener("click", () => toggleJoker(1));
    joker3.addEventListener("click", () => toggleJoker(2));
    joker4.addEventListener("click", () => toggleJoker(3));
    resolve();
  });
}

//Function to activates and deactivates joker cards
async function toggleJoker(jokerX) {
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

//Creating the DOM of activating joker card button
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

let flagTombolBuktikan = false;

const buktikan1 = document.getElementById("pembuktiKiriBawah");
const buktikan2 = document.getElementById("pembuktiKananBawah");
const buktikan3 = document.getElementById("pembuktiKananAtas");
const buktikan4 = document.getElementById("pembuktiKiriAtas");
const arrayTombolBuktikan = [buktikan1, buktikan2, buktikan3, buktikan4];

//Function to choose the player to prove, will trigger if there is one last deactivated joker card left
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
    document.querySelector(".classUndo").classList.remove("highlight");
    document.querySelector(".classUndo").classList.add("mati");
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

function hapusEmpatKartu() {
  return new Promise((resolve) => {
    for (let i = 0; i < 4; i++) {
      arrayWrapperKartu[i].removeChild(kartuDisplayChild[i]);
    }
    resolve();
  });
}

let game = false;
async function mulaiGame() {
  await jokerListener();
  await buatArrayKartuKalah();
  await buatKartu();
  await acakKartu();
  await konversiKartu();
  await empatKartuListener();
  await empatKartuHighlightListener();
  await deteksiKartuAcakAs();
  await matiTombolAcak();
  await indikatorCounter();
  await indikatorSkor();
  await resetFlagJoker();
  game = true;
}

async function acakGame() {
  if (!rondeSelesai) {
    return;
  }
  if (kartuTotal.length !== 0) {
    await hapusEmpatKartu();
    await acakKartu();
    await konversiKartu();
    await deteksiKartuAcakAs();
    await empatKartuListener();
    await empatKartuHighlightListener();
    await hapusTombolBuktikan();
    await nyalaTombolJoker();
    await resetFlagAs();
    await resetTombolBuktikan();
    await resetFlagJoker();
    await matiTombolAcak();
    await indikatorCounter();
  } else {
    await hapusEmpatKartu();
    await hasilAkhir();
    await hapusDOMInGame();
    await nyalaDOMAkhir();
    await indikatorCounterAkhir();
    await hapusTombolBuktikan();
    await nyalaTombolJoker();
    await resetFlagAs();
    await resetTombolBuktikan();
    await resetFlagJokerAwal();
    await matiTombolAcak();
  }
  rondeSelesai = false;
}

function perputaranGame() {
  if (!game) {
    mulaiGame();
  } else acakGame();
}

let pemenang, nilaiKartuKalahTerdikit, kartuKalahTerdikit;
function hasilAkhir() {
  return new Promise((resolve) => {
    pemenang = 1 + kartuKalah.indexOf(Math.min(...kartuKalah));
    nilaiKartuKalahTerdikit = Math.min(...kartuKalah);
    kartuTerdikit = kartuKalah.filter((x) => x === nilaiKartuKalahTerdikit);
    console.log(kartuTerdikit);
    game = false;
    console.log(game);
    if (kartuTerdikit.length > 1) {
      document.getElementById("textMenang").textContent = `GAME SERI`;
      return resolve();
    }

    document.getElementById(
      "textMenang"
    ).textContent = `PEMAIN ${pemenang} MENANG`;

    resolve();
  });
}

function log() {
  console.log(kartuTotal);
}

function log2() {
  kartuTotal.splice(0, 36);
}

const skor1 = document.getElementById("skorKiriBawah");
const skor2 = document.getElementById("skorKananBawah");
const skor3 = document.getElementById("skorKananAtas");
const skor4 = document.getElementById("skorKiriAtas");
const arrayDOMSkor = [skor1, skor2, skor3, skor4];

function indikatorSkor() {
  return new Promise((resolve) => {
    for (let i = 0; i < 4; i++) {
      arrayDOMSkor[i].textContent = kartuKalah[i];

      if (!game) {
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

function kembali() {
  nyalaDOMAwal();
  matiDOMAkhir();
  matiDOMInGame();
  resetIndikatorSkor();
}

function mainLagi() {
  game = false;
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
