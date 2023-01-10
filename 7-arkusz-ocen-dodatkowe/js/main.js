
let srednie = document.getElementsByClassName('srednia');
let dodatkowe = document.getElementsByClassName('zajecia-dodatkowe');
let personalia = document.getElementsByClassName('uczen');

function liczSrednia() {

    for (n = 1; n < 21; n++) {
        //console.log(`uczen${n}`);
        let oceny = document.querySelectorAll(`#uczen${n} > input[type='number']`);
        
        //console.log(dodatkowe[n].value);

        let suma = 0;
        for (i = 0; i < oceny.length; i++) {
            let ocena = Number(oceny[i].value);
            suma = suma + ocena;

            //console.log(oceny[i].className);

            if (dodatkowe[n].value.includes (oceny[i].className) && ocena < 6 ) {
                oceny[i].value = ocena + 0.5;
                // robię w wariancie, że zajęcia dodatkowe podnoszą ocenę w dzienniku - nie byłem pewien jak zinterpretować tę część zadania
                //tutaj pojawia się problem, przy powtórnym kliknięciu, jeśli zmieniam wartość w dzienniku
                oceny[i].classList.add('c-blue');
                // ale kiedy dodam klasę, to powyższy warunek nie będzie spełniony, przy powtórnym kliknięciu, bo nazwa przedmiotu nie będzie jedyną klasą elementu oceny[i];
              
                suma = suma + 0.5;

            }
            //console.log(suma);

            if (ocena == 1) {
                personalia[n].classList.add('bg-red');
            }

        }
        let srednia = suma / oceny.length;

        srednie[n].innerHTML = srednia.toFixed(2);

        if (srednia >= 4.75) {
            personalia[n].classList.add('bg-green');
        }

    }
}


let btn = document.getElementById('oblicz');

btn.addEventListener('click', liczSrednia);
