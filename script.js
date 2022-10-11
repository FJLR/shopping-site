//alert("hola...!");

// https://fakestoreapi.com/products

// https://api.punkapi.com/v2/beers

fetch("https://fakestoreapi.com/products").then((data) => {
    //console.log(data); //JSON format
    return data.json(); //converted to object
}).then((objectData) => {
    //console.log(objectData);
    //console.log(objectData[0].title);

    let tableData="";
    objectData.map((values) => {
        //tableData+=`<h1>${values.title}</h1>`;
        tableData+=`<tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td>${values.category}</td>
        <td><img src="${values.image}"/></td>
      </tr>`;
    });
    document.getElementById("table-body").innerHTML=tableData;

}).catch((error) => {
    console.log(error);
})




// fetch("https://api.punkapi.com/v2/beers").then((data) => {
//     //console.log(data); //JSON format
//     return data.json(); //converted to object
// }).then((objectData) => {
//     //console.log(objectData);
//     //console.log(objectData[0].title);

//     let tableData="";
//     objectData.map((values) => {
//         //tableData+=`<h1>${values.title}</h1>`;
//         tableData+=`<tr>
//         <td>${values.name}</td>
//         <td>${values.description}</td>
//         <td>${values.method.fermentation.temp.value} ${values.method.fermentation.temp.unit}</td>
//         <td><img src="${values.image_url}"/></td>
//       </tr>`;
//     });
//     document.getElementById("table-body").innerHTML=tableData;

// }).catch((error) => {
//     console.log(error);
// })


// https://www.youtube.com/watch?v=vvjaRIM4Bjs&t=543s
// https://www.youtube.com/watch?v=m_vL25vzpiE