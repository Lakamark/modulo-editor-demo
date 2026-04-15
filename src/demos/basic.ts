import {DefaultEditorPreset, ModuloEditor} from "@lakamark/modulo-editor";

export function mountBasicDemo(): void {
    const root = document.querySelector('#demo-basic');

    if (!(root instanceof  HTMLElement)) {
        return;
    }

    ModuloEditor
        .create(root)
        .usePreset(new DefaultEditorPreset())
        .build()
        .init();
}