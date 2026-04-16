import { mountEditorDemo } from "../utils/mountEditorDemo";

export function mountBasicDemo(): void {
    mountEditorDemo({
        rootSelector: "#demo-basic",
        debugName: "basicEditor",
    });
}