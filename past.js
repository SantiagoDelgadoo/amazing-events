let container = document.getElementById("cartas-home");
function imprimir (array2){
for (i = 0; i < array2.length; i++) {
    if (array2[i].date < currentDate) {
        let cartas = document.createElement("div");
        cartas.className = "card m-4";
        cartas.innerHTML += `
                <img src="${array2[i].image}" class=" imgcards card-img-top" alt="${array2[i].name}">
                <div class="card-body text-center">
                    <h5 class="card-title text-center">${array2[i].name}</h5>
                    <p class="card-text">${array2[i].description}</p>
                    <div class="d-flex justify-content-between ">
                        <p>Price: ${array2[i].price}</p>
                        <a href="details.html?evento=${array2[i]._id}" class="boton btn btn-primary">Go somewhere</a>
                    </div>
                </div>

  `;

        container.appendChild(cartas);
    }
}
}
imprimir (events)

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
    let eventosCheckeados = pastEvents.filter((evento) => containerDeCategoriasCheckeadas.includes(evento.category))
    container.innerHTML = " "
console.log(eventosCheckeados);
    if (eventosCheckeados.length !== 0) {
        

        imprimir (eventosCheckeados)


    } else {
        
imprimir (pastEvents)

    }

})

