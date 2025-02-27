const toolbarSelect = document.getElementById("toolbar-select");
let i = 0;
class MyWysiwyg {
    constructor(textarea, { buttons }) {
        this.textarea = textarea;
        this.buttons = buttons;
    }

    createToolbar(div) {
        let toolbarElement = document.createElement("div");
        toolbarElement.innerHTML = `<div style="background-color: blue; width: max-content;"></div>`;
        let innerBar = toolbarElement.getElementsByTagName('div')[0];
        console.log(innerBar);
        this.buttons.forEach(button => {
            if (button == 'Color') {
                innerBar.innerHTML += `<input type="color" list class="${button}">`;
            } else if (button == 'FontSize') {
                innerBar.innerHTML += `<input type="number" min="2" step="2" value ="14" class="${button}">`;
            } else {
                innerBar.innerHTML += `<button class="${button}">${button}</button>`;
                console.log(button);
            }
        })
        toolbarElement.style.display = "none";
        toolbarElement.classList.add("toolbar");
        div.appendChild(toolbarElement);
        return(toolbarElement)
    }
}

export { MyWysiwyg };