import { DefaultEditorPreset, ModuloEditor } from "@lakamark/modulo-editor";
import { bindCommandButtons } from "./bindCommandButtons";
import { exposeToWindow } from "./debug";
import { requireElement } from "./requireElement";
import { resolveDemoRoot } from "./resolveDemoRoot";

export interface MountEditorDemoOptions {
    rootSelector: string;
    editorSelector?: string;
    debugName?: string;
}

export function mountEditorDemo(
    options: MountEditorDemoOptions
): void {
    const root = resolveDemoRoot(options.rootSelector);

    if (root === null) {
        return;
    }

    const editorRoot = options.editorSelector
        ? requireElement(root, options.editorSelector)
        : requireElement(root, "[data-mo-editor]");

    const editor = ModuloEditor
        .create(editorRoot)
        .usePreset(new DefaultEditorPreset())
        .build();

    editor.init();

    bindCommandButtons(root, (commandName) => {
        editor.executeCommand(commandName);
    });

    if (import.meta.env.DEV && options.debugName) {
        exposeToWindow(options.debugName, editor);
    }
}