function createProductCard(name, price, image) {
  const container = document.getElementById("product-list");

  //membuat elemen card
  const card = document.createElement("div");
  card.className = "product-card";

  // isi HTML card
  card.innerHTML = `
        <img src="${image}" alt="${name}" class="product-image"/>
        <h3>${name}</h3>
        <p>Rp ${price.toLocaleString()}</p>
        <button onclick ="alert('Anda telah membeli ${name} ')">Beli</button>
    `;

  container.appendChild(card);
}
