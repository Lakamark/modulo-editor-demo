import {
    ModuloEditor,
    DefaultEditorDomInitializer,
    StarterKitPreset,
    type ModuloEditorBuilder,
    BoldToolbarPlugin, ItalicToolbarPlugin, HeadingToolbarPlugin,
} from "@lakamark/modulo-editor";

export function createTextareaEditor(
    textarea: HTMLTextAreaElement
): ModuloEditorBuilder {
    return ModuloEditor
        .create()
        .fromTextarea(textarea)
        .withDomInitializer(new DefaultEditorDomInitializer())
        .usePreset(new StarterKitPreset())
        .withPlugins([
            new BoldToolbarPlugin(),
            new ItalicToolbarPlugin(),
            new HeadingToolbarPlugin(1),
            new HeadingToolbarPlugin(2),
            new HeadingToolbarPlugin(3)
        ])
}