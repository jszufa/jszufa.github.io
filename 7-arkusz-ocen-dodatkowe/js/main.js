
let srednie = document.getElementsByClassName('srednia');

function liczSrednia() {

    for (n = 1; n < 21; n++) {
        //console.log(`uczen${n}`);
        let oceny = document.querySelectorAll(`#uczen${n} > input[type='number']`);
        //console.log(oceny.length);

        let suma = 0;
        for (i = 0; i < oceny.length; i++) {
            let ocena = Number(oceny[i].value);
            suma = suma + ocena;
            //console.log(suma);

        }
        let srednia = suma / oceny.length;
        console.log(srednia);

        srednie[n].innerHTML = srednia.toFixed(2);

    }
}

liczSrednia();