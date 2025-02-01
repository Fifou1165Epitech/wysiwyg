export class MyWysiwyg {
    constructor(textarea) {
        this.textarea = textarea;
        this.init();
    }

    init() {
        document.getElementById("bold").addEventListener("click", () => {
            this.toggleStyle("fontWeight", "bold", "normal");
        });

        document.getElementById("italic").addEventListener("click", () => {
            this.toggleStyle("fontStyle", "italic", "normal");
        });

        document.getElementById("strikethrough").addEventListener("click", () => {
            this.toggleStyle("textDecoration", "line-through", "none");
        });

        document.getElementById("colorPicker").addEventListener("input", (e) => {
            this.toggleStyle("color", e.target.value, "");
        });

        document.getElementById("fontSize").addEventListener("change", (e) => {
            this.toggleStyle("fontSize", e.target.value, "");
        });

        document.getElementById("link").addEventListener("click", () => {
            this.addLink();
        });
    }

    toggleStyle(styleProperty, value, toggleValue) {
        let selection = window.getSelection();
        if (!selection.rangeCount) return;

        let range = selection.getRangeAt(0);
        let parent = selection.anchorNode.parentElement;

        if (parent && parent.style[styleProperty] === value) {
            parent.style[styleProperty] = toggleValue;
        } else {
            let span = document.createElement("span");
            span.style[styleProperty] = value;
            span.appendChild(range.extractContents());
            range.deleteContents();
            range.insertNode(span);
        }
    }

    addLink() {
        let url = prompt("Entrez l'URL:");
        if (!url) return;

        let selection = window.getSelection();
        if (!selection.rangeCount) return;

        let range = selection.getRangeAt(0);
        let parent = selection.anchorNode.parentElement;

        if (parent && parent.tagName === "A") {
            let textNode = document.createTextNode(parent.innerText);
            parent.replaceWith(textNode);
        } else {
            let link = document.createElement("a");
            link.href = url;
            link.target = "_blank";
            link.style.color = "blue";
            link.style.textDecoration = "underline";
            link.appendChild(range.extractContents());
            range.deleteContents();
            range.insertNode(link);
        }
    }
}
