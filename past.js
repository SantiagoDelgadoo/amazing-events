console.log(currentDate);
let container = document.getElementById("cartas-home");
for (i = 0; i < events.length; i++) {
   
    if (events[i].date < currentDate){
    let cartas = document.createElement("div");
    cartas.className = "card my-4";
    cartas.innerHTML += `
  <div class="card ">
                <img src="${events[i].image}" class=" imgcards card-img-top" alt="Imagen de cine">
                <div class="card-body text-center">
                    <h5 class="card-title text-center">${events[i].name}</h5>
                    <p class="card-text">${events[i].description}</p>
                    <div class="d-flex justify-content-between ">
                        <p>Price: ${events[i].price}</p>
                        <a href="details.html" class="boton btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
  `;
  console.log(events[i].date);
    container.appendChild(cartas);}
}