function myFunction() {
  let text = "";

  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      text += i + " x " + j + " = " + i * j + "<br>";
    }
    text += "<br>";
  }

  document.getElementById("demo").innerHTML = text;
}
