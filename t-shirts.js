const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]
const $app = document.getElementById('app');

function render() {

  $app.innerHTML = tshirts.map((shirt, index) => {

    const stockDisplay =
      shirt.stock === 0
        ? `<div class="out">Out of Stock</div>`
        : `<div><strong>Stock:</strong> ${shirt.stock}</div>`;

    const controls =
      shirt.stock > 0
        ? `
        <div class="row">
          <select data-action="qty" data-index="${index}">
            ${Array.from({ length: shirt.stock }, (_, i) =>
              `<option value="${i + 1}">${i + 1}</option>`
            ).join('')}
          </select>

          <button data-action="buy" data-index="${index}">
            Buy
          </button>
        </div>
        `
        : '';

    return `
      <div class="card">
        <img src="images/${shirt.image}" alt="${shirt.title}">
        <div class="title">${shirt.title}</div>
        <div>Price: $${shirt.price.toFixed(2)}</div>
        ${stockDisplay}
        ${controls}
      </div>
    `;
  }).join('');
}


$app.addEventListener('change', function (e) {

  if (e.target.dataset.action === 'qty') {
    const index = Number(e.target.dataset.index);
    tshirts[index].quantity = Number(e.target.value);
  }

});



$app.addEventListener('click', function (e) {

  if (e.target.dataset.action === 'buy') {

    const index = Number(e.target.dataset.index);
    const shirt = tshirts[index];

    const qty = Math.min(shirt.quantity, shirt.stock);

    shirt.stock -= qty;

    render();
  }

});

render();