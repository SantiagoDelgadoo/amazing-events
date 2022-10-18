let containerDetails = document.getElementById("containerCardDetails");

console.log(location);
console.log(location.search);
let indice = Number(location.search.slice(8))
console.log(indice);
let eventoSeleccionado = events.filter((events) => events._id === indice)
console.log(eventoSeleccionado);
console.log(eventoSeleccionado);

for (i = 0; i <= eventoSeleccionado.length; i++) {
    containerDetails.innerHTML = `
    <div class="containercard1">
    <div class="imagendetails">
        <img src="${eventoSeleccionado[i].image}" class="tamañoimg" alt="${eventoSeleccionado[i].name}">
    </div>
    <div class="parrafoytitulo">
        <h4 class="subtitulocards">${eventoSeleccionado[i].name}</h4>
        <p>${eventoSeleccionado[i].description}</p>
        <p> <span class= "spanDetails" >Date:</span> ${eventoSeleccionado[i].date}</p>
        <p><span class= "spanDetails" > Category:</span> ${eventoSeleccionado[i].category}</p>
        <p><span class= "spanDetails" > Place: </span>${eventoSeleccionado[i].place}</p>
        <p><span class= "spanDetails" > Capacity:</span> ${eventoSeleccionado[i].capacity}</p>
        <p> <span class= "spanDetails"> Assistance:</span> ${eventoSeleccionado[i].assistance}</p>
        <p> <span class= "spanDetails"> Price:</span> $${eventoSeleccionado[i].price}</p>
        
    </div>
</div>
    `;
}