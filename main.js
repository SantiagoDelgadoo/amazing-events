
//---------------------------------------------IMPRIMO LAS CARDS--------------------------------------------------//

let container = document.getElementById("cartas-home");
function imprimir (arreglo){
for (i = 0; i < arreglo.length; i++) {
    let cartas = document.createElement("div");
    cartas.className = "card m-4";
    cartas.innerHTML += `
                <img src="${arreglo[i].image}" class=" imgcards card-img-top" alt="${arreglo[i].name}">
                <div class="card-body text-center">
                    <h5 class="card-title text-center">${arreglo[i].name}</h5>
                    <p class="card-text">${arreglo[i].description}</p>
                    <div class="d-flex justify-content-between ">
                        <p>Price: ${arreglo[i].price}</p>
                        <a href="details.html?evento=${arreglo[i]._id}" class="boton btn btn-primary">Go somewhere</a>
                    </div>
                </div>

  `;

    container.appendChild(cartas);
}
}
imprimir (events)







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

//---------------------------------------------FILTRO DE TEXTO EN SEARCH--------------------------------------//








let search = document.getElementById("enviarInfo")
enviarInfo.addEventListener("change", (evento) => {
    let nombreFiltrado = evento.target.value
    let nombreDeEventosFiltrados = events.filter((evento) => (evento.name.toLowerCase()).includes(nombreFiltrado.toLowerCase()))


    container.innerHTML = " "

imprimir (nombreDeEventosFiltrados)

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
        imprimir (eventosCheckeados)


    } else {
        
        imprimir (events)

    }

})





