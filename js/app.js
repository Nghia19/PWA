const container = document.querySelector(".container");
const products = [
  {
    name: "Perspiciatis",
    image: "img/product-1.jpg",
  },
  {
    name: "Voluptatem",
    image: "img/product-2.jpg",
  },
  {
    name: "Explicabo",
    image: "img/product-3.jpg",
  },
  {
    name: "Rchitecto",
    image: "img/product-4.jpg",
  },
  {
    name: " Beatae",
    image: "img/product-5.jpg",
  },
  {
    name: " Vitae",
    image: "img/product-6.jpg",
  },
  {
    name: "Inventore",
    image: "img/product-7.jpg",
  },
  {
    name: "Veritatis",
    image: "img/product-8.jpg",
  },
  {
    name: "Accusantium",
    image: "img/product-9.jpg",
  },
];
const showProducts = () => {
  let output = "";
  products.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Add to cart</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showProducts);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
