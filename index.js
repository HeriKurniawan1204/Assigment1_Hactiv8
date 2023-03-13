const myForm = document.getElementById("my-form");
const myName = document.getElementById("fname");
const myKerjaan = document.getElementById("role");
const myAva = document.getElementById("ava");
const myUsia = document.getElementById("usia");
const myAlamat = document.getElementById("lokasi");
const myPengalaman = document.getElementById("pengalaman");
const myEmail = document.getElementById("email");

const myBtn = document.getElementById("my-button");
const myBox = document.getElementById("my-box");

let lowerMyBox = true;

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const currentName = myForm.elements.fname.value;
  const currentProfession = myForm.elements.role.value;
  const currentAvability = myForm.elements.ava.value;
  const currentUsia = myForm.elements.usia.value;
  const currentAlamat = myForm.elements.lokasi.value;
  const currentPengalaman = myForm.elements.pengalaman.value;
  const currentEmail = myForm.elements.email.value;

  console.log(currentName, currentProfession, currentAvability, currentUsia, currentAlamat, currentPengalaman, currentEmail);

  myName.innerHTML = currentName;
  myKerjaan.innerHTML = currentProfession;
  myAva.innerHTML = currentAvability;
  myUsia.innerHTML = currentUsia;
  myAlamat.innerHTML = currentAlamat;
  myPengalaman.innerHTML = currentPengalaman;
  myEmail.innerHTML = currentEmail;

  toggleBox();
});

function toggleBox() {
  if (lowerMyBox) {
    lowerMyBox = false;
    myBox.classList.remove("hide");
  } else {
    lowerMyBox = true;
    myBox.classList.add("hide");
  }
}

myBtn.addEventListener("click", (event) => {
  event.preventDefault();
  toggleBox();
});

// Saklar Start
function saklar() {
  let toggle1 = document.getElementById("teal-toggle1");
  let toggle2 = document.getElementById("teal-toggle2");
  let toggle3 = document.getElementById("teal-toggle3");
  let lampu1 = document.getElementById("lampu1");
  let lampu2 = document.getElementById("lampu2");
  let lampu3 = document.getElementById("lampu3");
  if (toggle1.checked) {
    lampu1.src = `asset/img/on.gif`;
  } else {
    lampu1.src = `asset/img/off.gif`;
  }
  if (toggle2.checked) {
    lampu2.src = `asset/img/on.gif`;
  } else {
    lampu2.src = `asset/img/off.gif`;
  }
  if (toggle3.checked) {
    lampu3.src = `asset/img/on.gif`;
  } else {
    lampu3.src = `asset/img/off.gif`;
  }
}
// Saklar End
