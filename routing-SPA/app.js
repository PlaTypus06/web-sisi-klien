const products = [{ name: "Motherboard AcRock B450M", image: "b450m.png" }];

function product() {
  let html = `
    <div class="product-list">
      <h2>Products</h2>
      <p>Daftar produk yang tersedia:</p>
      <div class="product-container">
  `;

  products.forEach((item) => {
    html += `
      <div class="product-item">
        <img class="product-img" src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
      </div>
    `;
  });

  html += `</div></div>`;
  return html;
}

const routes = {
  "#/": "<h1>Home Page</h1><p>SPA sederhana</p>",
  "#/about":
    "<h1>About Page</h1><p>Ini adalah blablabla blebleble blublublu</p>",
  "#/contact":
    "<h1>Contact Page</h1><p>Hubungi kami di blablabla@gmail.com</p>",
  "#/product": product(),
};

function router() {
  const hash = window.location.hash || "#/";
  const path = hash;

  document.getElementById("app").innerHTML =
    routes[path] || "<h1>404 Not Found</h1><p>Halaman tidak ditemukan</p>";
}

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
