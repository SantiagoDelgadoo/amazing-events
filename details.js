let containerDetails = document.getElementById("containerCardDetails");     


//

async function task4 (){ //declaro funcion async porque va a esperar a que le llegue el dato y despues va a seguir leyendo el codigo
    let api = await fetch ('https://mind-hub.up.railway.app/amazing') //declaro una variable le doy de nombre api lo igualo a await fetch
    //await espera la consulta y una vez que fetch devuelve el dato lo guarda en api
    //fetch lo q hace en este caso es consultarle a la api y me va a devolver una promesa y pongo el link de la api
    console.log(api);
    api = await api.json () //convierto lo que me pasa la api a un json porque yo necesito algun dato de los eventos, es decir que lo pasa
    //como texto plano y yo lo convierto a json y vuelvo a usar await porque la conversion de api a json tarda un tiempo
    console.log(api);
    
    let date = api.date
    console.log(date);
    
    let events = api.events
    console.log(events);

//
let indice = (location.search.slice(8)) //aca guardo el valor del id de mi evento
console.log(indice);
let eventoSeleccionado = events.filter((events) => events.id === indice) //va a filtrar los eventos q el id sea igual al indice
console.log(eventoSeleccionado);
console.log(eventoSeleccionado);
//
for (i = 0; i <= eventoSeleccionado.length; i++) { //cambie el a con main.js para que no me mande siempre al mismo details
    containerDetails.innerHTML = `
    <div class="containercard1 d-flex flex-column flex-md-row"> 
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
}
task4 ()