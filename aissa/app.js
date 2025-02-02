import { MyWysiwyg } from "./modules/my_wysiwyg.js";

let textArea = document.getElementById("textarea");

let mw = new MyWysiwyg(document.getElementById("textarea"),{
    buttons : ["Gras", "Italic", "TextCrossed", "Color", "FontSize", "Lien"]
});
let i = 0;
textArea.addEventListener("keydown", (e) => {
    if(e.key == "Enter" && e.shiftKey){
        return;
    }else if(e.key == "Enter"){
        e.preventDefault();
        let div = document.createElement('div');
        let t = mw.createToolbar(div);

        div.style.display = "flex";
        div.style.alignItems = "center";
        div.id = `${i}`;
        i++;
        let gras = t.querySelector(".Gras");
        let italic = t.querySelector(".Italic");
        let textCrossed = t.querySelector(".TextCrossed");



        let p = document.createElement('p');
        p.style.width = "100%";
        p.contentEditable = 'true';
        p.style.backgroundColor = 'green';
        div.appendChild(p);
        textArea.appendChild(div);
        p.focus();


        let boldIndex = 0;
        gras.addEventListener("click", () => {
            p.style.fontWeight = "bold";
            if(boldIndex == 0){
                p.style.fontWeight = "bold";
                boldIndex++;
            }else if(boldIndex == 1){
                p.style.fontWeight = "normal";
                boldIndex--;
            }
        })

        let italicIndex = 0;
        italic.addEventListener("click", () => {
            p.style.fontStyle = "italic";
            if(italicIndex == 0){
                p.style.fontStyle = "italic";
                italicIndex++;
            }else if(italicIndex == 1){
                p.style.fontStyle = "normal";
                italicIndex--;
            }
        })

        let textCrossedIndex = 0;
        textCrossed.addEventListener("click", () => {
            p.style.textDecorationLine = "line-through";
            if(textCrossedIndex == 0){
                p.style.textDecorationLine = "line-through";
                textCrossedIndex++;
            }else if(textCrossedIndex == 1){
                p.style.textDecorationLine = "none";
                textCrossedIndex--;
            }
        })

    }
    
})
