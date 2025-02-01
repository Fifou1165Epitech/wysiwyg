import { MyWysiwyg } from "./modules/my_wysiwyg.js";

let textArea = document.getElementById("textarea");

let mw = new MyWysiwyg(document.getElementById("textarea"),{
    buttons : ["Gras", "Italic", "TextCrossed", "Choix de la couleur", "Taille de la police", "Lien"]
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
        p.style.backgroundColor = 'white';
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
//Fonction sauvagarde avec localStorage
function save() {
    localStorage.setItem("pageContent", document.getElementById("textarea").innerHTML);
}

document.getElementById("saveButton").addEventListener("click", save);

setInterval(save, 1 * 60 * 1000);

//Charge le contenue sauvegarder
document.addEventListener("DOMContentLoaded", () => {
    let savedContent = localStorage.getItem("pageContent");
    if (savedContent) {
        document.getElementById("textarea").innerHTML = savedContent;
    }
});

//Pour supprimer une ligne
textArea.addEventListener("keydown", (e) => {
    let lastPara;
    let lastDiv = textArea.lastElementChild;
    if (lastDiv) {
        lastPara = lastDiv.querySelector("p");
    } else {
        lastPara = null;
    }    
    if (e.key === "Backspace" && lastPara && lastPara.innerText.trim() === "") {
        lastDiv.remove();
        return; 
    }});