import { MyWysiwyg } from './my_wysiwyg.js';

document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("textarea");
    new MyWysiwyg(textarea);
});