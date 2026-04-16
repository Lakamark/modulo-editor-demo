type PlaygroundStore = Record<string, unknown>;

type PlaygroundGlobal = typeof globalThis & {
    __MODULO_PLAYGROUND__?: PlaygroundStore;
};

function getStore(): PlaygroundStore {
    const globalObject = globalThis as PlaygroundGlobal;

    if (globalObject.__MODULO_PLAYGROUND__ === undefined) {
        globalObject.__MODULO_PLAYGROUND__ = {};
    }

    return globalObject.__MODULO_PLAYGROUND__;
}

export function exposeToWindow(
    name: string,
    value: unknown
): void {
    const store = getStore();

    store[name] = value;
}