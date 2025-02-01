
export class MyWysiwyg {
        
    constructor(textarea, options) {
        this._textarea = textarea; //ceci est l'élément HTML ciblé
        this._options = options; //ceci est un objet (array associatif)
        this.setOptions();
    }

    setOptions() {
        for (const [option, values] of Object.entries(this._options)) {
            if (option === 'buttons'){
                // let toolbar = document.getElementById(option);
                values.forEach(currentValue => {
                    let button = document.getElementById(currentValue);
                    console.log(button);
                    button.style.display = 'block';
                });
            } 
        }
    }
}

window.onload = () => {

    // const txtarea = document.getElementById('textarea');

    // let mw = new MyWysiwyg(txtarea, {
    //         buttons : ["bold","italic","color"]
    // });
    // console.log(mw);

//-----------------Récupérer une sélection---------------------

// txtarea.onmouseup = () => {
//     let selection = document.getSelection();
//     selection = selection.toString();
//     console.log(selection);
// }

//-------------------------- Boutons --------------------------

    // const cssObj = window.getComputedStyle(txtarea);

//---------------- Choix de couleurs --------------------------

    const color = document.getElementById('color');
    color.onchange = () => {
        // console.log(color.value);
        // let txtColor = cssObj.getPropertyValue('color');
        // console.log(txtColor);
        txtarea.style.color = color.value;
        // if (txtColor === color.value) {
        //     txtarea.style.color = rgb(0, 0, 0);
        // } else {
        //     txtarea.style.color = color.value;
        // }
    }

//---------------- Ajout de hyperlien --------------------------


}