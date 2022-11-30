//alert("hola...!");

// https://fakestoreapi.com/products

// https://api.punkapi.com/v2/beers

let total = 0;
const tableBody = document.getElementById('table-body');

//document.getElementById("total").innerText = total;

fetch("https://fakestoreapi.com/products").then((data) => {
    //console.log(data); //JSON format
    return data.json(); //converted to object
  })
  .then((objectData) => {
    const listOfRows = objectData.forEach((values) => {
      const row = document.createElement("tr");

      const title = document.createElement("td");
      title.innerText = values.title;
      row.append(title);

      const desc = document.createElement("td");
      desc.innerText = values.description;
      row.append(desc);

      const price = document.createElement("td");
      price.innerText = values.price;
      row.append(price);

      const category = document.createElement("td");
      category.innerText = values.category;
      row.append(category);

      const imageTd = document.createElement("td");
      const img = document.createElement("img");
      const button = document.createElement("button");
      button.textContent = "Add to cart";
      img.src = values.image;
      imageTd.append(img);
      imageTd.append(button);

      row.append(imageTd);

      // button.addEventListener("click", () => {
      //   items.push(values);
      //   size.textContent = items.length;
      //   total.textContent = items.reduce(
      //     (total, item) => total + item.price,
      //     0
      //   );
      // });
      tableBody.append(row);

    });

  })
  .catch((error) => {
    console.log(error);
  });
