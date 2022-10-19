

//---------------------------------------------IMPRIMO LAS CARDS--------------------------------------------------//

let containerEventos = document.getElementById("cartas-home") 
function imprimirCards(arrayDeEventos, seccion) {
    seccion.innerHTML = " " //declaro
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
imprimirCards(events, containerEventos) 






//---------------------------------------ACA ARRANCO A IMPRIMIR LOS CHECKBOX--------------------------------------//

let contenedorForm = document.getElementById("checkboxDeForm");
let arrayDeCategorias = events.map((evento) => evento.category)  
let arrayDeCategoriasSeteadas = new Set(arrayDeCategorias) //set es una lista sin repetir
function imprimirCheckbox(categoria) {
    contenedorForm.innerHTML += `
    <label class= "px-3" >${categoria}
    <input type="checkbox" value="${categoria}">
    </label>
    `;
}
arrayDeCategoriasSeteadas.forEach(imprimirCheckbox)



//----------------------------------------FILTRO DE TEXTO EN SEARCH--------------------------------------//

function filtroTexto(datos, datosObtenidos) {
    let buscado = datos.filter(evento => evento.name.toLowerCase().includes(datosObtenidos.toLowerCase()))
    return buscado
}



let search = document.getElementById("enviarInfo") //declaro una variable que me traiga el buscador de palabras
search.addEventListener("keyup", () => {
    let nombreFiltrado = filtroTexto(events, search.value) //value= lo q escribio la persona
    let nombreFiltrado2 = filtroCheckBox(nombreFiltrado)
    if (nombreFiltrado2.length != 0) {
        imprimirCards(nombreFiltrado2, containerEventos)
    }
    else {
        containerEventos.innerHTML = `<h6>no results found for your search</h6>`
    }


})



//----------------------------------------------ACA FILTRO POR CHECKBOX-----------------------------------------//

let containerDeCategoriasCheckeadas = []


function filtroCheckBox(dato) {
    let checkboxActivo = document.querySelectorAll("input[type='checkbox']")
    let filtro = []
    let seleccionados = Array.from(checkboxActivo).filter( e => e.checked).map(check => check.value) //array.from hace que meta los checks en un array cada e es cada checkbox y este caso value es el nombre de la categoria
    filtro = dato.filter(e => seleccionados.includes(e.category)) //e en este es caso es evento y aca se compara solo el value de los seleccionados de arriba
    if (seleccionados.length == 0) {
        filtro = dato //muestra todos
    }
    return filtro //retorna el marcado

}

contenedorForm.addEventListener('change', () => {
    let filtroCheckbox = filtroCheckBox(events)
    let filtroCheckbox2 = filtroTexto(filtroCheckbox, search.value)
    if (filtroCheckbox2.length != 0) {
        imprimirCards(filtroCheckbox2, containerEventos)
    }
    else {
        containerEventos.innerHTML = `<h6>no results found for your search</h6>`
    }
});













