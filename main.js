
//---------------------------------------------IMPRIMO LAS CARDS--------------------------------------------------//

let container = document.getElementById("cartas-home");
for (i = 0; i < events.length; i++) {
    let cartas = document.createElement("div");
    cartas.className = "card m-4";
    cartas.innerHTML += `
                <img src="${events[i].image}" class=" imgcards card-img-top" alt="${events[i].name}">
                <div class="card-body text-center">
                    <h5 class="card-title text-center">${events[i].name}</h5>
                    <p class="card-text">${events[i].description}</p>
                    <div class="d-flex justify-content-between ">
                        <p>Price: ${events[i].price}</p>
                        <a href="details.html?evento=${events[i]._id}" class="boton btn btn-primary">Go somewhere</a>
                    </div>
                </div>

  `;

    container.appendChild(cartas);
}








//---------------------------------------ACA ARRANCO A IMPRIMIR LOS CHECKBOX--------------------------------------//

let contenedorForm = document.getElementById("checkboxDeForm");
let arrayDeCategorias = events.map((evento) => evento.category)   //=> es = return
let arrayDeCategoriasSeteadas = new Set(arrayDeCategorias)
function imprimirCheckbox(categoria) {
    contenedorForm.innerHTML += `
    <label class= "px-3" >${categoria}
    <input type="checkbox" value="${categoria}">
    </label>
    `;
}
arrayDeCategoriasSeteadas.forEach(imprimirCheckbox)

//---------------------------------------------FILTRO DE TEXTO EN SEARCH--------------------------------------//








let search = document.getElementById("enviarInfo")
enviarInfo.addEventListener("change", (evento) => {
    let nombreFiltrado = evento.target.value
    let nombreDeEventosFiltrados = events.filter((evento) => (evento.name.toLowerCase()).includes(nombreFiltrado.toLowerCase()))


    container.innerHTML = " "




    for (i = 0; i < nombreDeEventosFiltrados.length; i++) {
        let cartas = document.createElement("div");
        cartas.className = "card m-4";
        cartas.innerHTML += `
        <div class="card">
            <img src="${nombreDeEventosFiltrados[i].image}" class=" imgcards card-img-top" alt="${nombreDeEventosFiltrados[i].name}">
                    <div class="card-body text-center">
                        <h5 class="card-title text-center">${nombreDeEventosFiltrados[i].name}</h5>
                        <p class="card-text">${nombreDeEventosFiltrados[i].description}</p>
                        <div class="d-flex justify-content-between ">
                            <p>Price: ${nombreDeEventosFiltrados[i].price}</p>
                            <a href="details.html?evento=${nombreDeEventosFiltrados[i]._id}" class="boton btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
        `;

        container.appendChild(cartas);


    }
})




//----------------------------------------------ACA FILTRO POR CHECKBOX-----------------------------------------//

let containerDeCategoriasCheckeadas = []

contenedorForm.addEventListener("change", (evento) => {
    if (evento.target.checked) {
        containerDeCategoriasCheckeadas.push(evento.target.value);
    }
    else {
        let posicionEnElArray = containerDeCategoriasCheckeadas.indexOf(evento.target.value); // obtenemos el indice
        containerDeCategoriasCheckeadas.splice(posicionEnElArray, 1); // 1 es la cantidad de elemento a eliminar 
    }
    let eventosCheckeados = events.filter((evento) => containerDeCategoriasCheckeadas.includes(evento.category))
    container.innerHTML = " "

    if (eventosCheckeados.length !== 0) {
        for (i = 0; i < eventosCheckeados.length; i++) {
            let cartas = document.createElement("div");
            cartas.className = "card m-4";
            cartas.innerHTML += `
        <div class="card">
            <img src="${eventosCheckeados[i].image}" class=" imgcards card-img-top" alt="${eventosCheckeados[i].name}">
                    <div class="card-body text-center">
                        <h5 class="card-title text-center">${eventosCheckeados[i].name}</h5>
                        <p class="card-text">${eventosCheckeados[i].description}</p>
                        <div class="d-flex justify-content-between ">
                            <p>Price: ${eventosCheckeados[i].price}</p>
                            <a href="details.html?evento=${eventosCheckeados[i]._id}" class="boton btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
        `;

            container.appendChild(cartas);


        }


    } else {
        for (i = 0; i < events.length; i++) {
            let cartas = document.createElement("div");
            cartas.className = "card m-4";
            cartas.innerHTML += `
                    <img src="${events[i].image}" class=" imgcards card-img-top" alt="${events[i].name}">
                    <div class="card-body text-center">
                        <h5 class="card-title text-center">${events[i].name}</h5>
                        <p class="card-text">${events[i].description}</p>
                        <div class="d-flex justify-content-between ">
                            <p>Price: ${events[i].price}</p>
                            <a href="details.html?evento=${events[i]._id}" class="boton btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
    
      `;

            container.appendChild(cartas);
        }

    }

})



//-----------------------------------------COMBINACION DE CHECKBOX Y SEARCH-------------------------------------------//

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





