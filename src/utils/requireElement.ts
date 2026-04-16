export function requireElement(
    parent: ParentNode,
    selector: string
): HTMLElement {
    const element = parent.querySelector(selector);

    if (!(element instanceof HTMLElement)) {
        throw new Error(`Missing element for selector: ${selector}`);
    }

    return element;
}