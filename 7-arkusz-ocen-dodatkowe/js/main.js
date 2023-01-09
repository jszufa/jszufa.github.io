// function liczSrednia (x) {

//     let oceny = document.get;
//     let suma = 0;

//     for x.input[type="number"] in uczen {
//         suma = suma + x.input[type="number"].value
//     }

//     return suma/length-zbioru

// }


for (n=1; n < 21; n++) {
    //let uczen = document.getElementById (`uczen${n}`);
    //console.log(uczen.children);
    //liczSrednia(uczen);
    //let suma = 0;
    let oceny = document.querySelectorAll(`#uczen${n} > input[type='number']`);
    console.log(oceny);

    for (n=0; n < oceny.length; n++) {
        let ocena = oceny[n].value;
        console.log(ocena);
    }
    

    //(`#uczen${n} input[type='number'].value`)

}


//potrzebuję najpierw element z id: "uczen1", "uczen2". "uczen3"