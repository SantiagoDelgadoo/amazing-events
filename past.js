//---------------------------------------------IMPRIMO LAS CARDS--------------------------------------------------//

let containerEventos = document.getElementById("cartas-home")  
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
                        <a href="details.html?evento=${evento.id}" class="boton btn btn-primary">More information</a>
                    </div>
                </div>`
        seccion.appendChild(cartas)
    })
};






//---------------------------------------ACA ARRANCO A IMPRIMIR LOS CHECKBOX--------------------------------------//

let contenedorForm = document.getElementById("checkboxDeForm");

function imprimirCheckbox(categoria) {
    contenedorForm.innerHTML += `
    <label class= "px-3" >${categoria}
    <input type="checkbox" value="${categoria}">
    </label>
    `;
}




//
async function task4 (){ //declaro funcion async porque va a esperar a que le llegue el dato y despues va a seguir leyendo el codigo
    let api = await fetch ('https://mh-amazing.herokuapp.com/amazing') //declaro una variable le doy de nombre api lo igualo a await fetch
    //await espera la consulta y una vez que fetch devuelve el dato lo guarda en api
    //fetch lo q hace en este caso es consultarle a la api y me va a devolver una promesa y pongo el link de la api
    console.log(api);
    api = await api.json () //convierto lo que me pasa la api a un json porque yo necesito algun dato de los eventos, es decir que lo pasa
    //como texto plano y yo lo convierto a json y vuelvo a usar await porque la conversion de api a json tarda un tiempo


let events = api.events
let date = api.date
let eventosPast = events.filter (e=>(e.date < date))
imprimirCards(eventosPast, containerEventos) //llamo a la funcion y le paso los parametros

//aca imprimo los check

let arrayDeCategorias = events.map((evento) => evento.category)   //=> es = return
let arrayDeCategoriasSeteadas = new Set(arrayDeCategorias) //set elimina repetidos
arrayDeCategoriasSeteadas.forEach(imprimirCheckbox)

//

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

}
task4 ()