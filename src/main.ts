import '../assets/css/app.scss'
import '@lakamark/modulo-editor/reset.css'

import {createTextareaEditor} from "./editor/createTextareaEditor";


function boot(): void {
    const textarea = document.querySelector("#demo-content");

    if (!(textarea instanceof HTMLTextAreaElement)) {
        console.error('Textarea "#demo-content" not found.');
        return;
    }

    const editor = createTextareaEditor(textarea).build();

    console.log("Before init", { textarea });

    editor.init();

    console.log("Editor initialized");
}

boot();