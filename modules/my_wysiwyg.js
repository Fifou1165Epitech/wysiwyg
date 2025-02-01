const toolbarSelect = document.getElementById("toolbar-select");
let i = 0;
class MyWysiwyg {
    constructor(textarea, { buttons }) {
        this.textarea = textarea;
        this.buttons = buttons;
    }

    createToolbar(div) {
        let toolbarElement = document.createElement("div");
        toolbarElement.innerHTML = `
            <div class="toolbar">
                ${this.buttons.map(button => `<button class="${button}">${button}</button>`)}
            </div>
        `;
        
        div.appendChild(toolbarElement);
        return(toolbarElement)
    }
}

export { MyWysiwyg };