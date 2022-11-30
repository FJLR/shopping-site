//alert("hola...!");

// https://fakestoreapi.com/products

// https://api.punkapi.com/v2/beers

let total = 0;
const cart = [];

const tableBody = document.getElementById("table-body");
const size = document.getElementById("size");

document.getElementById("check-out").addEventListener("click", () => {
  let total = 0;
  let items = "";
  cart.forEach((item) => {
    items += item.title + "\n";
    total += item.price;
  });
  alert(
    `Checkout: ${cart.length} items:\n${items}\nfor a total of ${total.toFixed(2)}.`
  );
});

//document.getElementById("total").innerText = total;

fetch("https://fakestoreapi.com/products")
  .then((data) => {
    //console.log(data); //JSON format
    return data.json(); //converted to object
  })
  .then((products) => {
    products.forEach((product) => {
      const row = document.createElement("tr");

      const title = document.createElement("td");
      title.innerText = product.title;
      row.append(title);

      const desc = document.createElement("td");
      desc.innerText = product.description;
      row.append(desc);

      const price = document.createElement("td");
      price.innerText = product.price;
      row.append(price);

      const category = document.createElement("td");
      category.innerText = product.category;
      row.append(category);

      const imageTd = document.createElement("td");
      const img = document.createElement("img");
      const button = document.createElement("button");
      button.textContent = "Add to cart";
      img.src = product.image;
      imageTd.append(img);
      imageTd.append(button);

      row.append(imageTd);

      button.addEventListener("click", () => {
        cart.push(product);
        size.textContent = cart.length;
      });
      tableBody.append(row);
    });
  })
  .catch((error) => {
    console.log(error);
  });
