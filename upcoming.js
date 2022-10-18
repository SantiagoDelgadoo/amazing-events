let container = document.getElementById("cartas-home");
for (i = 0; i < events.length; i++) {
    if (events[i].date > currentDate) {
        let cartas = document.createElement("div");
        cartas.className = "card m-4";
        cartas.innerHTML += `
                <img src="${events[i].image}" class=" imgcards card-img-top" alt="${events[i].name}">
                <div class="card-body text-center">
                    <h5 class="card-title text-center">${events[i].name}</h5>
                    <p class="card-text">${events[i].description}</p>
                    <div class="d-flex justify-content-between ">
                        <p>Price: ${events[i].price}</p>
                        <a href="details.html" class="boton btn btn-primary">Go somewhere</a>
                    </div>
                </div>

  `;

        container.appendChild(cartas);
    }
}


let contenedorForm = document.getElementById("checkboxDeForm");
let arrayDeCategorias = events.map((evento) => evento.category)   //=> es = return
let arrayDeCategoriasSeteadas = new Set(arrayDeCategorias)
function imprimirCheckbox(categoria) {
    contenedorForm.innerHTML += `
    <label class= "px-3" >${categoria}
    <input type="checkbox" name="${categoria}">
    </label>
    `;
}
arrayDeCategoriasSeteadas.forEach(imprimirCheckbox)








let upcomingEvents = events.filter ((evento)=> evento.date > currentDate)

let search = document.getElementById("enviarInfo")
search.addEventListener("change", (evento) => {
    let nombreFiltrado = evento.target.value
    let nombreDeEventosFiltrados = upcomingEvents.filter((evento) => (evento.name.toLowerCase()).includes(nombreFiltrado.toLowerCase()))


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
                        <a href="details.html" class="boton btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
        `;

        container.appendChild(cartas);


    }
})