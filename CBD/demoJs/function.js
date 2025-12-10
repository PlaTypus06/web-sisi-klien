let a, b, c;
a = prompt("Masukkan nilai tugas");
b = prompt("Masukkan nilai kuis");
c = prompt("Masukkan nilai UTS");
d = prompt("Masukkan nilai UAS");

a = Number(a);
b = Number(b);
c = Number(c);
d = Number(d);

let nilai = (a + b + c + d) / 4;
let status;

if (nilai < 60) {
  status = "Tidak lulus";
} else if (nilai >= 60 && nilai < 75) {
  status = "Lulus rata rata";
} else {
  status = "Lulus dengan nilai bagus";
}

function myFunction() {
  document.getElementById("demo").innerHTML =
    "nilai rata rata kamu adalah : " +
    nilai +
    "<br>" +
    "dengan status : " +
    status;
}
