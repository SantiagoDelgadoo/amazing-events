async function task4() {
    let stadistics = await fetch("https://mh-amazing.herokuapp.com/amazing");
    stadistics = await stadistics.json();

    let date = stadistics.date.slice(0, 10);
    let events = stadistics.events;

    let newArrayOfEvents = events.map((evento) => ({
        name: evento.name,
        percentageOfAsistance: (
            (evento.assistance * 100) /
            evento.capacity
        ).toFixed(2),
        capacity: evento.capacity,
    }));

    //mayor porcentaje de asistencia

    let mostAsistanceEvent = [...newArrayOfEvents].sort(
        (a, b) => b.percentageOfAsistance - a.percentageOfAsistance
    );
    mostAsistanceEvent = mostAsistanceEvent[0];
    console.log(mostAsistanceEvent);

    //menor asistencia

    let lessAsistanceEvent = [...newArrayOfEvents].sort(
        (a, b) => a.percentageOfAsistance - b.percentageOfAsistance
    );
    lessAsistanceEvent = lessAsistanceEvent[0];
    console.log(lessAsistanceEvent);

    //mayor capacidad

    let mostCapacityEvent = [...newArrayOfEvents].sort(
        (a, b) => b.capacity - a.capacity
    );
    mostCapacityEvent = mostCapacityEvent[0];
    console.log(mostCapacityEvent);

    //tabla 1

    let table = document.getElementById("primeraTabla");
    let table2 = document.getElementById("segundaTabla")
    function printtable(objectOne, objectTwo, objectThree) {
        table.innerHTML += `
                    <tr>
                        <td>${objectOne.name} ${objectOne.percentageOfAsistance}%</td>
                        <td>${objectTwo.name} ${objectTwo.percentageOfAsistance}%</td>
                        <td>${objectThree.name} ${objectThree.capacity}</td>
                    </tr> `;
    }
    printtable(mostAsistanceEvent, lessAsistanceEvent, mostCapacityEvent)
}

async function taskCuatro2() {
    try {
        let data = await fetch(
            "https://mh-amazing.herokuapp.com/amazing?time=past"
        );
        data = await data.json();
        let events = data.events;
        events.map((event) => {
            event.percentageOfAssitance = (
                (event.assistance / event.capacity) *
                100
            ).toFixed(2);
            event.revenues = event.assistance * event.price;
        });
        let EventsForCategory = [];
        EventsForCategory.push(events.filter((event) => event.category === "Food"));
        EventsForCategory.push(
            events.filter((event) => event.category === "Cinema")
        );
        EventsForCategory.push(
            events.filter((event) => event.category === "Party")
        );
        EventsForCategory.push(
            events.filter((event) => event.category === "Books")
        );
        EventsForCategory.push(events.filter((event) => event.category === "Race"));
        EventsForCategory.push(
            events.filter((event) => event.category === "Concert")
        );
        EventsForCategory.push(
            events.filter((event) => event.category === "Museum")
        );
        console.log(EventsForCategory[0]);
        let eventsFilter = [];

        for (const categorys of EventsForCategory) {
            let revenuesIni = 0;
            let revenues1 = categorys.reduce(function (accumulator, element) {
                return accumulator + element.revenues;
            }, revenuesIni);

            let capacityIni = 0;
            let capacity1 = categorys.reduce(function (accumulator, element) {
                return accumulator + element.capacity;
            }, capacityIni);

            let assisIni = 0;
            let assis = categorys.reduce(function (
                accumulator,
                element
            ) {
                return accumulator + Number(element.assistance);
            },
                assisIni);

            eventsFilter.push({
                name: categorys[0].category,
                revenues: revenues1,
                capacity: capacity1,
                percentageOfAssitance: assis * 100 / capacity1,
            });

        }
        let segundaTabla = document.getElementById("segundaTabla")

        for (i of eventsFilter) {
            segundaTabla.innerHTML +=
                `
                    <tr>
                        <td>${i.name}</td>
                        <td>${i.revenues}</td>
                        <td>${(i.percentageOfAssitance).toFixed(2)}%</td>
                    </tr> `;
        }

    } catch (error) {
        console.log("Hubo un error");
    }


}
//UPCOMING
async function taskCuatro3() {
    try {
        let data = await fetch(
            "https://mh-amazing.herokuapp.com/amazing?time=upcoming"
        );
        data = await data.json();
        let events = data.events;
        events.map((event) => {
            event.percentageOfAssitance = (
                (event.estimate / event.capacity) *
                100
            ).toFixed(2);
            event.revenues = event.estimate * event.price;
        });
        let EventsForCategory = [];
        EventsForCategory.push(events.filter((event) => event.category === "Food"));
        EventsForCategory.push(
            events.filter((event) => event.category === "Cinema")
        );
        EventsForCategory.push(
            events.filter((event) => event.category === "Party")
        );
        EventsForCategory.push(
            events.filter((event) => event.category === "Books")
        );
        EventsForCategory.push(events.filter((event) => event.category === "Race"));
        EventsForCategory.push(
            events.filter((event) => event.category === "Concert")
        );
        EventsForCategory.push(
            events.filter((event) => event.category === "Museum")
        );
        EventsForCategory = EventsForCategory.filter((array) => array.length !== 0);
        let eventsFilter = [];

        for (const categorys of EventsForCategory) {
            let revenuesIni = 0;
            let revenues1 = categorys.reduce(function (accumulator, element) {
                return accumulator + element.revenues;
            }, revenuesIni);

            let capacityIni = 0;
            let capacity1 = categorys.reduce(function (accumulator, element) {
                return accumulator + element.capacity;
            }, capacityIni);

            let assisIni = 0;
            let assis = categorys.reduce(function (
                accumulator,
                element
            ) {
                return accumulator + Number(element.estimate);
            },
                assisIni);

            eventsFilter.push({
                name: categorys[0].category,
                revenues: revenues1,
                capacity: capacity1,
                percentageOfAssitance: assis * 100 / capacity1,
            });

        }
        let terceraTabla = document.getElementById("terceraTabla")

        for (i of eventsFilter) {
            terceraTabla.innerHTML +=
                `
                    <tr>
                        <td>${i.name}</td>
                        <td>${i.revenues}</td>
                        <td>${(i.percentageOfAssitance).toFixed(2)}%</td>
                    </tr> `;
        }

    } catch (error) {
        console.log("Hubo un error");
    }


}



taskCuatro3();
taskCuatro2();
task4();
