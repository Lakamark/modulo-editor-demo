import {
    DefaultEditorPreset,
    ModuloEditor,
    type EditorPlugin,
    type EditorPreset,
    type MarkdownProcessor,
    type EditorDomInitializer,
} from "@lakamark/modulo-editor";
import { bindCommandButtons } from "./bindCommandButtons";
import { exposeToWindow } from "./debug";
import { requireElement } from "./requireElement";
import { resolveDemoRoot } from "./resolveDemoRoot";

export interface MountEditorDemoOptions {
    rootSelector: string;
    editorSelector?: string;
    debugName?: string;
    preset?: EditorPreset;
    plugins?: EditorPlugin[];
    markdown?: MarkdownProcessor;
    domInitializer?: EditorDomInitializer;
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

    let builder = ModuloEditor.create(editorRoot);

    builder = builder.usePreset(options.preset ?? new DefaultEditorPreset());

    if (options.markdown) {
        builder = builder.withMarkdown(options.markdown);
    }

    if (options.plugins && options.plugins.length > 0) {
        builder = builder.withPlugins(options.plugins);
    }

    if (options.domInitializer) {
        builder = builder.withDomInitializer(options.domInitializer);
    }

    const editor = builder.build();

    editor.init();

    bindCommandButtons(root, (commandName) => {
        editor.executeCommand(commandName);
    });

    if (import.meta.env.DEV && options.debugName) {
        exposeToWindow(options.debugName, editor);
    }
}