let container = document.getElementById("cartas-home");
for (i = 0; i < events.length; i++) {
    if (events[i].date < currentDate) {
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



let pastEvents = events.filter ((evento)=> evento.date < currentDate)





let search = document.getElementById("enviarInfo")
search.addEventListener("change", (evento) => {
    let nombreFiltrado = evento.target.value
    let nombreDeEventosFiltrados = pastEvents.filter((evento) => (evento.name.toLowerCase()).includes(nombreFiltrado.toLowerCase()))


    container.innerHTML = " "

//------------------------------------------------FILTRA POR SEARCH--------------------------------------------------//


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
    let eventosCheckeados = pastEvents.filter((evento) => containerDeCategoriasCheckeadas.includes(evento.category))
    container.innerHTML = " "
console.log(eventosCheckeados);
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
        for (i = 0; i < pastEvents.length; i++) {
            if (pastEvents[i].date < currentDate) {
                let cartas = document.createElement("div");
                cartas.className = "card m-4";
                cartas.innerHTML += `
                        <img src="${pastEvents[i].image}" class=" imgcards card-img-top" alt="${pastEvents[i].name}">
                        <div class="card-body text-center">
                            <h5 class="card-title text-center">${pastEvents[i].name}</h5>
                            <p class="card-text">${pastEvents[i].description}</p>
                            <div class="d-flex justify-content-between ">
                                <p>Price: ${pastEvents[i].price}</p>
                                <a href="details.html?evento=${events[i]._id}" class="boton btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
        
          `;
        
                container.appendChild(cartas);
            }
        }

    }

})

