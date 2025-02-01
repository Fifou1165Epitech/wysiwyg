window.onload = () => {
    class MyWysiwyg {
        
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

    // const txtarea = document.getElementById('textarea');

    // let mw = new MyWysiwyg(txtarea, {
    //         buttons : ["bold","italic","color"]
    // });
    // console.log(mw);
}