const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const btn = document.getElementById("button");
const input = document.getElementById("input");
const box = document.getElementById("container");
const small = document.getElementById("small");

const pizza = JSON.parse(localStorage.getItem("pizza")) || null;

const saveLocalStorage = () => {
  localStorage.setItem("pizza", JSON.stringify(pizza));
};

const renderCard = (pizza) => {
  return `
  <div class="hero-card">
  <img src="${pizza.imagen}" alt="${pizza.nombre}" >
  <div class="hero-card-info">
    <div class="hero-card-info">
      <div class="hero-card-top">
        <h3>${pizza.nombre}</h3>
      </div>
      <div class="hero-card-bottom">
        <div class="hero-card-creator">
          <div class="creator-info">
            <p>Ingredientes: ${pizza.ingredientes.join(", ")}</p>
            <p>Precio: $ ${pizza.precio}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
};

const handleclick = () => {
  const value = input.value;
  const pizza = pizzas.find((e) => Number(e.id) === Number(value));
  console.log(pizza);
  if (!pizza) {
    small.textContent = "No se encontró ninguna pizza con ese número";
    box.innerHTML = "";
    localStorage.removeItem("pizza");
  }
  box.innerHTML = renderCard(pizza);
  saveLocalStorage(pizza);
  small.textContent = "";
};

const renderPizza = () => {
  if (pizza) return;
  box.innerHTML = renderCard(pizza);
};
const init = () => {
  document.addEventListener("DOMContentLoaded", renderPizza);
  btn.addEventListener("click", handleclick);
};

init();
