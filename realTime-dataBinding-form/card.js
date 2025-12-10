const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const alamatInput = document.getElementById("alamat");

const namePreview = document.getElementById("namePreview");
const emailPreview = document.getElementById("emailPreview");
const alamatPreview = document.getElementById("alamatPreview");

nameInput.addEventListener("input", function () {
  namePreview.innerText = nameInput.value;
  namePreview.innerText = `Nama : ${nameInput.value}`;
});

emailInput.addEventListener("input", function () {
  emailPreview.innerText = emailInput.value;
  emailPreview.innerText = `Nama : ${emailInput.value}`;
});

alamatInput.addEventListener("input", function () {
  alamatPreview.innerText = alamatInput.value;
  alamatPreview.innerText = `Nama : ${alamatInput.value}`;
});

namePreview.innerText = `Nama : ${nameInput.value}`;
emailPreview.innerText = `Email : ${emailInput.value}`;
alamatPreview.innerText = `Alamat : ${alamatInput.value}`;
