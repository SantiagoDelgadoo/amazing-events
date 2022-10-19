//---------------------------------------------IMPRIMO LAS CARDS--------------------------------------------------//

let eventosPast = events.filter (e=>(e.date < currentDate))
let containerEventos = document.getElementById("cartas-home") //creo una variable y llamo con id donde se van a imprimir las cards
// declaro una funcion que se llama imprimirCards y le doy dos parametros, declaro una seccion vacia dentro del html, hago que se recorra el array de eventos y uso forEach para que recorra el array y por cada evento que encuentre cree un div, despues le doy una clase y le decis que va a tener adentro
function imprimirCards(arrayDeEventos, seccion) {
    seccion.innerHTML = " "
    arrayDeEventos.forEach(evento => {
        let cartas = document.createElement("div");
        cartas.className = "card m-4";
        cartas.innerHTML += `
                <img src="${evento.image}" class=" imgcards card-img-top" alt="${evento.name}">
                <div class="card-body text-center">
                    <h5 class="card-title text-center">${evento.name}</h5>
                    <p class="card-text">${evento.description}</p>
                    <div class="d-flex justify-content-between ">
                        <p>Price: ${evento.price}</p>
                        <a href="details.html?evento=${evento._id}" class="boton btn btn-primary">Go somewhere</a>
                    </div>
                </div>`
        seccion.appendChild(cartas)
    })
};
imprimirCards(eventosPast, containerEventos) //llamo a la funcion y le paso los parametros






//---------------------------------------ACA ARRANCO A IMPRIMIR LOS CHECKBOX--------------------------------------//

let contenedorForm = document.getElementById("checkboxDeForm");
let arrayDeCategorias = events.map((evento) => evento.category)   //=> es = return
let arrayDeCategoriasSeteadas = new Set(arrayDeCategorias) //set elimina repetidos
function imprimirCheckbox(categoria) {
    contenedorForm.innerHTML += `
    <label class= "px-3" >${categoria}
    <input type="checkbox" value="${categoria}">
    </label>
    `;
}
arrayDeCategoriasSeteadas.forEach(imprimirCheckbox)


contenedorForm.addEventListener('change', () => {
    let filtroCheckbox = filtrosCruzados(eventosPast)
    let filtroCheckbox2 = filtroTexto(filtroCheckbox, search.value)
    if (filtroCheckbox2.length != 0) {
        imprimirCards(filtroCheckbox2, containerEventos)
    }
    else {
        containerEventos.innerHTML = `<h6>no results found for your search</h6>`

    }

});


//----------------------------------------FILTRO DE TEXTO EN SEARCH--------------------------------------//


let search = document.getElementById("enviarInfo") //declaro una variable que me traiga el buscador de palabras
search.addEventListener("keyup", () => {
    let nombreFiltrado = filtroTexto(eventosPast, search.value)
    let nombreFiltrado2 = filtrosCruzados(nombreFiltrado)
    if (nombreFiltrado2.length != 0) {
        imprimirCards(nombreFiltrado2, containerEventos)
    }
    else {
        containerEventos.innerHTML = `<h6>no results found for your search</h6>`
    }


})

function filtroTexto(datos, datosObtenidos) {
    let buscado = datos.filter(evento => evento.name.toLowerCase().includes(datosObtenidos.toLowerCase()))
    return buscado

}



//----------------------------------------------ACA FILTRO POR CHECKBOX-----------------------------------------//



function filtrosCruzados(dato) {
    let checkboxActivo = document.querySelectorAll("input[type='checkbox']")
    let filtro = []
    let seleccionados = Array.from(checkboxActivo).filter( e => e.checked).map(check => check.value)
    filtro = dato.filter(e => seleccionados.includes(e.category))
    if (seleccionados.length == 0) {
        filtro = dato
    }
    return filtro

}
