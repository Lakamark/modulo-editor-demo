export function bindCommandButtons(
    root: ParentNode,
    executeCommand: (commandName: string) => void
): void {
    const buttons = root.querySelectorAll<HTMLElement>("[data-action]");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const commandName = button.dataset.action;

            if (!commandName) {
                return;
            }

            executeCommand(commandName);
        });
    });
}