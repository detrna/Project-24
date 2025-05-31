//BEFORE THE GAME START

let a = 1;
//Pembuat Kartu
let kartuTotal = [];
let kartuAsTotal = [11, 1];
for (let angkaKartu = 1; angkaKartu <= 10; angkaKartu++) {
  kartuTotal.push(
    `hati${angkaKartu}`,
    `ketupat${angkaKartu}`,
    `sekop${angkaKartu}`,
    `keriting${angkaKartu}`
  );
} // jika angka kartu satu, maka akan membuat variabel jenis kartu baru sampai kartu ke 10

let kartuJoker = [true, false, false, false];
let jumlahPemain = 1;
function triggerPemain(nomorPemain) {
  tambahPemain(nomorPemain);
  triggerTombolAcak();
}

function tambahPemain(nomorPemain) {
  if (kartuJoker[nomorPemain]) {
    jumlahPemain--;
    kartuJoker[nomorPemain] = false;
    document.querySelector(
      `#tambahPemain${nomorPemain + 1}`
    ).textContent = `TAMBAH PEMAIN ${nomorPemain + 1}`;
  } else if (!kartuJoker[nomorPemain]) {
    jumlahPemain++;
    kartuJoker[nomorPemain] = true;
    document.querySelector(
      `#tambahPemain${nomorPemain + 1}`
    ).textContent = `DELETE PEMAIN ${nomorPemain + 1}`;
  }
} // The players, nothing much new learned.

let childModifyPemainDOM = [];
let parentModifyPemainDOM;
//Function to assign variable to add player button DOM
function assignModifyPemainDOM() {
  return new Promise((resolve) => {
    for (let i = 2; i < 5; i++) {
      childModifyPemainDOM.push(document.getElementById(`tambahPemain${i}`));
    }
    parentModifyPemainDOM = document.querySelector(".modifyPemain");
    resolve();
  });
}

//Deleting the adding player DOM
function hapusModifyPemainDOM() {
  return new Promise((resolve) => {
    for (let i = 0; i < 3; i++) {
      parentModifyPemainDOM.removeChild(childModifyPemainDOM[i]);
    }
    resolve();
  });
}

//STARTING THE GAME

//Pengacak 4 Kartu
let kartuDisplayChild = [];
let kartuDisplay;
function acakKartu() {
  return new Promise((resolve) => {
    kartuDisplay = document.querySelector(".empatKartu");
    for (let i = 0; i < 4; i++) {
      let kartuAcakIndex = Math.floor(Math.random() * kartuTotal.length);
      let kartuAcak = kartuTotal[kartuAcakIndex];
      kartuTotal.splice(kartuAcakIndex, 1);

      kartuDisplayChild[i] = document.createElement("button");
      kartuDisplayChild[i].disabled = true;
      kartuDisplayChild[i].textContent = `kartu ${kartuAcak}`;
      kartuDisplayChild[i].id = `kartuDisplay${i + 1}`;
      kartuDisplay.appendChild(kartuDisplayChild[i]);
      console.log(kartuAcak);
    }
    resolve();
  });
}

async function buatAs() {
  await flagAs();
  await hapusNilaiLamaAs();
  await domAs();
  await displayAs();
  await listenerAs();
  await disableDOM();
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
      document.getElementById("divKartu1").textContent = "Kartu 1:";
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
      document.getElementById("divKartu2").textContent = "Kartu 2:";
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
        console.log("kartuas = true");
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

let parentKartuAs = document.querySelector(".kartuAs");
let buatDomAs = false;
let kartuAs, kartuSatu;
function domAs() {
  return new Promise((resolve) => {
    if (buatDomAs) {
      return resolve();
    }
    kartuAs = document.createElement("button");
    kartuAs.id = "kartuDisplayAs";
    kartuAs.textContent = `kartu 11`;

    kartuSatu = document.createElement("button");
    kartuSatu.id = "kartuDisplaySatu";
    kartuSatu.textContent = "kartu 1";

    resolve();
  });
}

function listenerAs() {
  return new Promise((resolve) => {
    kartuAs.addEventListener("click", () => buatNilaiAs());
    kartuSatu.addEventListener("click", () => buatNilaiSatu());
    resolve();
  });
}

function displayAs() {
  return new Promise((resolve) => {
    parentKartuAs.appendChild(kartuAs);
    parentKartuAs.appendChild(kartuSatu);
    resolve();
  });
}

function disableDOM() {
  return new Promise((resolve) => {
    for (let i = 0; i < 4; i++) {
      kartuDisplayChild[i].disabled = true;
    }
    resolve();
  });
}

function enableDOM() {
  return new Promise((resolve) => {
    for (let i = 0; i < 4; i++) {
      kartuDisplayChild[i].disabled = false;
    }
    resolve();
  });
}

async function buatNilaiAs() {
  await nilaiAs();
  await enableDOM();
  await hapusDOMAs();
  await resetFlagLamaAs();
}

async function buatNilaiSatu() {
  await nilaiSatu();
  await enableDOM();
  await hapusDOMAs();
  await resetFlagLamaAs();
}

function nilaiAs() {
  return new Promise((resolve) => {
    if (flagEmpatKartu.filter(Boolean).length === 1) {
      empatNilaiKartu[posisiKartu1] = 11;
      kartuDisplayChild[posisiKartu1].textContent = "kartu AS";
    }
    if (flagEmpatKartu.filter(Boolean).length === 2) {
      empatNilaiKartu[posisiKartu2] = 11;
      kartuDisplayChild[posisiKartu2].textContent = "kartu AS";
    }
    resolve();
  });
}

function nilaiSatu() {
  return new Promise((resolve) => {
    if (flagEmpatKartu.filter(Boolean).length === 1) {
      empatNilaiKartu[posisiKartu1] = 1;
      kartuDisplayChild[posisiKartu1].textContent = "kartu 1";
    }
    if (flagEmpatKartu.filter(Boolean).length === 2) {
      empatNilaiKartu[posisiKartu2] = 1;
      kartuDisplayChild[posisiKartu2].textContent = "kartu 1";
    }
    resolve();
  });
}

function resetFlagLamaAs() {
  return new Promise((resolve) => {
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
    parentKartuAs.removeChild(kartuAs);
    parentKartuAs.removeChild(kartuSatu);
    resolve();
  });
}
function hapusDOMLamaAs() {
  return new Promise((resolve) => {
    if (flagEmpatKartu.filter(Boolean).length === 1) {
      kartuDisplay.removeChild(kartuDisplayChild[posisiKartu1]);
    }
    if (flagEmpatKartu.filter(Boolean).length === 2) {
      kartuDisplay.removeChild(kartuDisplayChild[posisiKartu2]);
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

// Assigning 4 mixed cards DOM
let kartu1, kartu2, kartu3, kartu4;
const empatKartu = [kartu1, kartu2, kartu3, kartu4];
function kartuDOM() {
  return new Promise((resolve) => {
    for (let i = 0; i < 4; i++) {
      empatKartu[i] = document.querySelector(
        `#kartuDisplay${i + 1}`
      ).textContent;
    }
    [kartu1, kartu2, kartu3, kartu4] = empatKartu;
    resolve();
  });
}

//Creating the value for the 4 cards provided.
const empatNilaiKartu = [];
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

// Creating flags for 4 provided cards
let flagEmpatKartu = [false, false, false, false];
let totalTrue;

// Variables for determining 2 cards to operate with
let nilai1, nilai2;
let kartuPilih1, kartuPilih2;
let posisiKartu1, posisiKartu2;

//Function to determine 2 cards to operate with
function toggleEmpatKartu(flagKartuX) {
  if (flagEmpatKartu[flagKartuX]) {
    nonaktifKartu(flagKartuX);
  } else if (!flagEmpatKartu[flagKartuX]) {
    aktifKartu(flagKartuX);
    buatAs();
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
      document.getElementById("divKartu1").textContent = `Kartu 1:`;
    } else if (totalTrue === 2 && nilai2 === empatNilaiKartu[flagKartuX]) {
      flagEmpatKartu[flagKartuX] = false;
      nilai2 = undefined;
      kartuPilih2 = null;
      document.getElementById("divKartu2").textContent = `Kartu 2:`;
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
    document.getElementById("divKartu1").textContent = `Kartu 1: ${nilai1}`;
  }
  if (totalTrue === 1 && !flagEmpatKartu[flagKartuX]) {
    flagEmpatKartu[flagKartuX] = true;
    nilai2 = empatNilaiKartu[flagKartuX];
    kartuPilih2 = empatKartu[flagKartuX];
    posisiKartu2 = flagKartuX;
    document.getElementById("divKartu2").textContent = `Kartu 2: ${nilai2}`;
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
  tombolOperasi1Angka = document.querySelector(".Operasi1Angka");
  tombolOperasi2Angka = document.querySelector(".Operasi2Angka");
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
  setelahKalkulasi();
}

function undo() {
  undoNilai();
  undoDOM();
  setelahKalkulasi();
}

function undoNilai() {
  empatNilaiKartu[posisiKartu1] = simpanNilai1;
  empatNilaiKartu[posisiKartu2] = simpanNilai2;
}

function undoDOM() {
  document.getElementById(
    `kartuDisplay${posisiKartu1 + 1}`
  ).textContent = `kartu ${simpanNilai1}`;
  document.getElementById(
    `kartuDisplay${posisiKartu2 + 1}`
  ).textContent = `kartu ${simpanNilai2}`;
}

//Things to do after cards calculation
function setelahKalkulasi() {
  hasilKartu();
  hapusDOMKartu();
  backUpNilai();
  hapusNilaiKartu();
  resetFlagKartu();
  skor();
  buatTombolAcak();
  document.getElementById("divKartu1").textContent = `Kartu 1:`;
  document.getElementById("divKartu2").textContent = `Kartu 2:`;
  indikatorNilai();
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

//Delete the existing DOM of 4 cards to mixed earlier
function hapusDOMKartu() {
  for (let i = 0; i < 4; i++) {
    if (kartuPilih1 === empatKartu[i]) {
      document.getElementById(
        `kartuDisplay${i + 1}`
      ).textContent = `kartu ${hasil}`;
    }
    if (kartuPilih2 === empatKartu[i]) {
      console.log("hapuskartu");
      document.getElementById(`kartuDisplay${i + 1}`).textContent = "hello";
      kartuDihapus++;
    }
  }
}

//Function to give score that will trigger if only 3 cards already deleted.
//Giving player which demand a proof 4 cards if the proving one succeed
//and 4 cards to the player who proves if they failed to prove
function skor() {
  if (kartuDihapus !== 3) {
    return;
  }
  for (let i = 1; i <= 4; i++) {
    if (
      document.querySelector(`#kartuDisplay${i}`).textContent === textKartu24
    ) {
      menang = true;
    }
  }
  if (menang) {
    kartuKalah[pemainKalah] = kartuKalah[pemainKalah] + 4;
  } else {
    kartuKalah[pemainMenang] = kartuKalah[pemainMenang] + 4;
  }
  menang = false;
}

let flagJoker = [];
let tombolJoker;
//Filling the flag based on how much the player is.
function buatFlagJoker() {
  return new Promise((resolve) => {
    for (let i = 0; i < kartuJoker.filter(Boolean).length; i++) {
      flagJoker.push(false);
    }
    resolve();
  });
}

function resetFlagJoker() {
  return new Promise((resolve) => {
    for (let i = 0; i < jumlahPemain; i++) {
      flagJoker[i] = false;
      // flagJoker[i + 1] = NaN;
    }
    resolve();
  });
}

//Creating the DOM of activating joker card button
let arrayJoker = [];

function buatTombolJoker() {
  return new Promise((resolve) => {
    for (let i = 0; i < 4; i++) {
      if (kartuJoker[i]) {
        tombolJoker = document.createElement("button");
        arrayJoker.push(tombolJoker);
        tombolJoker.id = `tombolJoker${i + 1}`;
        tombolJoker.textContent = `TOMBOL JOKER ${i + 1}`;
        parentModifyPemainDOM.appendChild(tombolJoker);
        //  document.querySelector(`#tombolJoker${i + 1}`).onclick = () => {toggleJoker(i)} // KINDA BROKEN
      }
    }
    resolve();
  });
}

function hapusTombolJoker() {
  for (let i = 0; i < jumlahPemain; i++) {
    parentModifyPemainDOM.removeChild(arrayJoker[i]);
  }
}

function matiTombolJoker() {
  return new Promise((resolve) => {
    for (let i = 0; i < jumlahPemain; i++) {
      arrayJoker[i].disabled = true;
    }
    resolve();
  });
}

function nyalaTombolJoker() {
  return new Promise((resolve) => {
    for (let i = 0; i < jumlahPemain; i++) {
      arrayJoker[i].disabled = false;
    }
    resolve();
  });
}

//Adding event listener to joker cards
function jokerListener() {
  return new Promise((resolve) => {
    if (kartuJoker[1]) {
      tombolJoker2.addEventListener("click", () => toggleJoker(1));
    }
    if (kartuJoker[2]) {
      tombolJoker3.addEventListener("click", () => toggleJoker(2));
    }
    if (kartuJoker[3]) {
      tombolJoker4.addEventListener("click", () => toggleJoker(3));
    }
    tombolJoker1.addEventListener("click", () => toggleJoker(0));
    resolve();
  });
}

//Function to activates and deactivates joker cards
async function toggleJoker(jokerX) {
  await triggerFlagJoker(jokerX);
  await matiTombolJoker();
  await buatTombolBuktikan();
  await appendTombolBuktikan();
  await nyalaTombolBuktikan();
  await tombolPembuktiListener();
}

function triggerFlagJoker(jokerX) {
  return new Promise((resolve) => {
    if (!flagJoker[jokerX]) {
      aktifJoker(jokerX);
    } else {
      nonAktifJoker(jokerX);
    }
    if (flagJoker.filter(Boolean).length !== flagJoker.length - 1) {
      return;
    }
    resolve();
  });
}

function aktifJoker(jokerX) {
  flagJoker[jokerX] = true;
}

function nonAktifJoker(jokerX) {
  flagJoker[jokerX] = false;
}

let flagTombolBuktikan = false;
let arrayTombolBuktikan = [];
//Function to choose the player to prove, will trigger if there is one last deactivated joker card left
function buatTombolBuktikan() {
  return new Promise((resolve) => {
    if (flagJoker.filter(Boolean).length !== jumlahPemain - 1) {
      return resolve();
    }
    if (flagTombolBuktikan) {
      return resolve();
    }
    for (let i = 0; i < jumlahPemain; i++) {
      let tombolBuktikan = document.createElement("button");
      arrayTombolBuktikan.push(tombolBuktikan);
      tombolBuktikan.id = `tombolBuktikan${i + 1}`;
      tombolBuktikan.textContent = `TOMBOL BUKTIKAN ${i + 1}`;
    }
    flagTombolBuktikan = true;
    resolve();
  });
}

function appendTombolBuktikan() {
  return new Promise((resolve) => {
    if (flagJoker.filter(Boolean).length !== jumlahPemain - 1) {
      return resolve();
    }
    for (let i = 0; i < jumlahPemain; i++) {
      if (flagJoker[i]) {
        parentModifyPemainDOM.appendChild(arrayTombolBuktikan[i]);
      }
    }
    resolve();
  });
}

function hapusTombolBuktikan() {
  return new Promise((resolve) => {
    for (let i = 0; i < jumlahPemain; i++) {
      if (flagJoker[i]) {
        parentModifyPemainDOM.removeChild(arrayTombolBuktikan[i]);
      }
    }
    resolve();
  });
}

//Adding event listener to the proving button
function tombolPembuktiListener() {
  return new Promise((resolve) => {
    for (let j = 0; j < jumlahPemain; j++) {
      if (flagJoker[j]) {
        document
          .querySelector(`#tombolBuktikan${j + 1}`)
          .addEventListener("click", () => pembuktian(j));
      }
    }
    resolve();
  });
}

function matiTombolBuktikan() {
  return new Promise((resolve) => {
    for (let i = 0; i < jumlahPemain; i++) {
      if (flagJoker[i]) {
        arrayTombolBuktikan[i].disabled = true;
      }
    }
    resolve();
  });
}

function nyalaTombolBuktikan() {
  return new Promise((resolve) => {
    for (let i = 0; i < jumlahPemain; i++) {
      if (flagJoker[i]) {
        arrayTombolBuktikan[i].disabled = false;
      }
    }
    resolve();
  });
}

//Creating the array of the total score, based on how many the players are
let kartuKalah = [];
function buatArrayKartuKalah() {
  return new Promise((resolve) => {
    for (let i = 0; i < flagJoker.length; i++) {
      kartuKalah.push(0);
    }
    resolve();
  });
}

let pemainKalah, pemainMenang;

async function pembuktian(pemainX) {
  await nyalaTombolEmpatKartu();
  await matiTombolBuktikan();
  await penentuPemainPembukti(pemainX);
}

function penentuPemainPembukti(pemainX) {
  return new Promise((resolve) => {
    for (let i = 0; i < flagJoker.length; i++) {
      if (!flagJoker[i]) {
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
      kartuDisplayChild[i].disabled = false;
    }
    resolve();
  });
}

function tombolPengoperasianEnabled() {
  document.querySelector("#tambah").disabled = false;
  document.querySelector("#kurang").disabled = false;
  document.querySelector("#bagi").disabled = false;
  document.querySelector("#kali").disabled = false;
}

function hapusEmpatKartu() {
  return new Promise((resolve) => {
    for (let i = 0; i < 4; i++) {
      kartuDisplay.removeChild(kartuDisplayChild[i]);
    }
    resolve();
  });
}

let domAcak, parentAcak;
function buatTombolAcak() {
  if (kartuDihapus === 3) {
    parentAcak.appendChild(domAcak);
    kartuDihapus = 0;
  }
}

function hapusTombolAcak() {
  return new Promise((resolve) => {
    parentAcak.removeChild(domAcak);
    resolve();
  });
}

function triggerTombolAcak() {
  if (jumlahPemain === 1) {
    domAcak.disabled = true;
  } else {
    domAcak.disabled = false;
  }
}

function tombolAcakDeclare() {
  domAcak = document.getElementById("mulai");
  parentAcak = document.querySelector(".parentMulai");
}
document.addEventListener("DOMContentLoaded", () => {
  tombolAcakDeclare();
});

let game = false;
async function mulaiGame() {
  console.log(kartuTotal.length);
  await assignModifyPemainDOM();
  await hapusModifyPemainDOM();
  await buatTombolJoker();
  await jokerListener();
  await buatFlagJoker();
  await buatArrayKartuKalah();
  await acakKartu();
  await kartuDOM();
  await konversiKartu();
  await empatKartuListener();
  await hapusTombolAcak();
  await deteksiKartuAcakAs();

  game = true;
}

async function acakGame() {
  if (kartuTotal.length !== 4) {
    await hapusEmpatKartu();
    await acakKartu();
    await kartuDOM();
    await konversiKartu();
    await empatKartuListener();
    await hapusTombolAcak();
    await hapusTombolBuktikan();
    await nyalaTombolJoker();
    await resetFlagJoker();
    await resetFlagAs();
  } else {
    await hapusEmpatKartu();
    await hasilAkhir();
  }
}

function perputaranGame() {
  if (!game) {
    mulaiGame();
  } else acakGame();
}

let pemenang;
function hasilAkhir() {
  return new Promise((resolve) => {
    pemenang = kartuKalah.indexOf(Math.min(...kartuKalah));
    if (pemenang.length > 1) {
      console.log("seri");
      return resolve();
    }
    console.log(`pemain${pemenang + 1} Menang`);
    resolve();
  });
}

function log() {
  console.log(pemainKalah, pemainMenang);
}

function log2() {
  for (let i = 0; i < 4; i++) {
    kartuDisplayChild[i].disabled = false;
  }
}
function indikatorNilai() {
  document.getElementById("skor1").textContent = `Skor 1 ${kartuKalah[0]}`;
  document.getElementById("skor2").textContent = `Skor 2 ${kartuKalah[1]}`;
  document.getElementById("skor3").textContent = `Skor 3 ${kartuKalah[2]}`;
  document.getElementById("skor4").textContent = `Skor 4 ${kartuKalah[3]}`;
}
