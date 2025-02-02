// window.onload = () => {
    // let options = {
    //     buttons : ["id 1","id 2","id 3"];
    //     option 2 : 
    //     option 3 : 
    // }

    // opts = Object.values(options);

    // // Résultat : options = ["id 1", "id 2", "id 3"]
    // export { MyWysiwyg }

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
                        button = button.parentElement;
                        button.style.display = 'block';
                    });
                } 
            }
            // return this._options;
        }
    }

    // const txtarea = document.getElementById('textarea');

    // let mw = new MyWysiwyg(txtarea, {
    //         buttons : ["bold","italic","color","link"]//,
    //         // option2 : "id 2"
    //     });
    // console.log(mw);


    

    
window.onload = () => {

    const txtarea = document.getElementById('textarea');
    const cssObj = window.getComputedStyle(txtarea);

    // txtarea.onmouseup = () => {
    //     let selection = document.getSelection();
    //     selection = selection.toString();
    //     if(selection.rangeCount>0) {
    //         let range = selection.getRangeAt(0);
    //     }
    //     console.log(range);
    // }

    // let firstPara = document.createElement('p');
    // txtarea.appendChild(firstPara);
    
    // txtarea.addEventListener('keydown', (event) => {
    //     if(event.key === "Enter") {
    //         event.preventDefault();
    //         let newPara = document.createElement('p');
    //         txtarea.appendChild(newPara);
    //     }
    // });

//-----------------------------------------------------------------------------------------------

//------------------------------------ Style - ONCHANGE -----------------------------------------
     // let range;
        // console.log(color.value);
        // let txtColor = cssObj.getPropertyValue('color');
        // console.log(txtColor);
        // let span = document.createElement('span');
        // span.style.color = color.value;
        // range.surrondContent(span);

    const color = document.getElementById('color');
    color.onchange = () => {
        txtarea.style.color = color.value;
    }

    const fontSize = document.getElementById('fontSize');
    fontSize.onchange = () => {
        txtarea.style.fontSize = `${fontSize.value}px`;
    }

//-----------------------------------------------------------------------------------------------

//----------------------------------- Style - TOGGLE --------------------------------------------


    const bold = document.getElementById('bold');
    bold.onclick = () => {
        let fWeight = cssObj.getPropertyValue('font-weight');
        txtarea.style.fontWeight = (fWeight == 'bold' || fWeight == 700) ? 'normal' : 'bold';
        // if (weight == 'bold' || weight == '700') {
        //     txtarea.style.fontWeight = 'normal';
        // } else {
        //     txtarea.style.fontWeight = 'bold';
        // }
    }

    const italic = document.getElementById('italic');
    italic.onclick = () => {
        let fStyle = cssObj.getPropertyValue('font-style');
        txtarea.style.fontStyle = (fStyle == 'italic') ? 'normal' : 'italic';
    }

    const lineThrough = document.getElementById('lineThrough');
    lineThrough.onclick = () => {
        let tDeco = cssObj.getPropertyValue('text-decoration');
        txtarea.style.textDecoration = (tDeco == 'line-through') ? 'unset' : 'line-through';
    }

    const underLine = document.getElementById('underLine');
    underLine.onclick = () => {
        let tDeco = cssObj.getPropertyValue('text-decoration');
        txtarea.style.textDecoration = (tDeco == 'underline') ? 'none' : 'underline';
    }

//-----------------------------------------------------------------------------------------------

//---------------------------------- Style - TEXT - ALIGN ---------------------------------------

    // const alignLeft = document.getElementById('alignLeft');
    // alignLeft.onclick = () => {
    //     txtarea.style.textAlign = 'left';
    // }

    const txtAlign = {
        alignLeft:'left',
        alignCenter:'center',
        alignRight:'right',
        justify:'justify'
    };

    for (const [key,value] of Object.entries(txtAlign)) {
        // let id = key;
        document.getElementById(key).onclick = () => {
            txtarea.style.textAlign = value;
            console.log(value);
        };
    };
//---------------------------------------------------------------------------------------------
    
    // const link = document.getElementById('link');
    // link.onclick = () => {
    //     let href = prompt("Entrez le lien");
    //     let anchor = document.createElement('a');
    //     anchor.href = href;
    //     console.log(anchor);
    // }
    
    
}
