export function localStorageValidator(dataFromLocalStorage: unknown, sampleData: Record<any, any>): boolean {
    try {
        const expectedKeys = Object.keys(sampleData);

        for (const element of dataFromLocalStorage as unknown[]) {
            const actualKeys = Object.keys(element as any);
            if (actualKeys.length !== expectedKeys.length) throw new Error("The amount of keys of received object did not match the amount of keys of expected object.");
            expectedKeys.forEach((key) => {
                if (!actualKeys.includes(key)) throw new Error(`Key ${key} is missing`);
            });
        }
        //
        return true;
    } catch (_) {
        // When validation fails
        return false;
    }
}
