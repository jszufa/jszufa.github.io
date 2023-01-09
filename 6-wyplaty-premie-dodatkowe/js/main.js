
function liczWyplate() {
    let czasy = document.getElementsByClassName('czas');
    //console.log(czasy);

    let stawki = document.getElementsByClassName('stawka');
    //console.log(stawki);

    let wyplaty = document.getElementsByClassName('wyplata');
    //console.log(wyplaty);

    let personalia = document.getElementsByClassName('pracownik');

    let sortableArray = [];

    for (n = 0; n < 20; n++) {
        wyplaty[n].innerHTML = czasy[n].value * stawki[n].value;

        //PREMIA za nadgodziny
        let wypl = Number(wyplaty[n].innerHTML);
        if (czasy[n].value > 160) {
            wypl = wypl + (wypl - 160 * stawki[n].value);
            wyplaty[n].innerHTML = wypl;
        }

        //mniej niż 100 godzin
        if (czasy[n].value < 100) {
            personalia[n].classList.add('bg-red');
        }

        //dane dla wyświetlania 3 najlepszych pracowników
        sortableArray.push(
            {
                'czas': `${czasy[n].value}`,
                'dane': `${personalia[n].innerText}`
            }
        );

    }

    //3 najlepszych pracowników - sortowanie
    sortableArray.sort(function (a, b) { return b['czas'] - a['czas'] });
    console.log(sortableArray);

    //dodawanie pracowników do listy
    let olElement = document.getElementById('lista-najlepszych');
    olElement.innerHTML = '';
    
    for (n = 0; n < 3; n++) {
        let liElement = document.createElement('li');
        liElement.innerText = sortableArray[n].dane;
        liElement.setAttribute('class', 'item');
        olElement.appendChild(liElement);
    }

}


let btn = document.getElementById('oblicz');

btn.addEventListener('click', liczWyplate);

