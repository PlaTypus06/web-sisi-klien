let angka1 = prompt("masukkan angka pertama: ");
let angka2 = prompt("masukkan angka kedua: ");

angka1 = Number(angka1);
angka2 = Number(angka2);

let angka = angka1 + angka2;

if (angka % 2 === 0) {
  hasil = "genap";
} else {
  hasil = "ganjil";
}

function myFunction() {
  document.getElementById("demo").innerHTML =
    "hasil dari " +
    angka1 +
    " Dijumlahkan dengan " +
    angka2 +
    " adalah : " +
    angka +
    " <br>hasilnya adalah " +
    hasil;
}
