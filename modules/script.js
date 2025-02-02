import { MyWysiwyg } from "./my_wysiwyg.js";

document.addEventListener("DOMContentLoaded", () => {
    let mw = new MyWysiwyg(document.getElementById('textarea'), {
        buttons: ["alignLeft", "alignRight", "alignCenter", "justify"]
    }); 
});
