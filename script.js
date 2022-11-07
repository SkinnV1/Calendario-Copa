
function createGame(t1, hour, t2){
    return`
        <li>
            <img src="./assets/icon-${t1}.svg" alt="Bandeira da ${t1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${t2}.svg" alt="Bandeira de ${t2}">
        </li>
    `
}

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
            <h2>${date}<span>${day}</span></h2>
            <ul>
               ${games}
            </ul>
    </div>
    `
}

document.querySelector("#cards").innerHTML =

    createCard('24/11', 'Quinta', 
    createGame('suiça', '07:00', 'camarões') + createGame('brasil', '16:00', 'servia')) +
    createCard('28/11', 'Segunda',
     createGame('camarões', '07:00', 'servia') + createGame('brasil', '13:00', 'suiça')) +
    createCard('02/12', 'Sexta', 
    createGame('brasil', '16:00', 'camarões')) 
