// Tools
import { useState, useCallback } from "react";

interface UseArrayResult<T> {
    entries: T[];

    push: (data: T) => void;
    unshift: (data: T) => void;
    /** Remove item from array on given index */
    remove: (params: { index: number }) => void;
    /**
     * Update existing item on certainindex. In case of having an array of objects,
     * it's possible to pass a payload containg only certain properties which will be updated,
     * remaining properties won't be affected.
     * */
    update: (params: { index: number; data: Partial<T> }) => void;

    clear: () => void;
}

export const useArray = <T>(initialData: T[]): UseArrayResult<T> => {
    const [arrayData, setArrayData] = useState<T[]>(initialData);

    const push: UseArrayResult<T>["push"] = useCallback((data) => {
        setArrayData((val) => [...val, data]);
    }, []);

    const unshift: UseArrayResult<T>["unshift"] = useCallback((data) => {
        setArrayData((val) => [data, ...val]);
    }, []);

    const remove: UseArrayResult<T>["remove"] = useCallback(({ index: indexToDelete }) => {
        setArrayData((val) => val.filter((_, index) => index !== indexToDelete));
    }, []);

    const clear: UseArrayResult<T>["clear"] = useCallback(() => setArrayData([]), []);

    const update: UseArrayResult<T>["update"] = useCallback(({ data: modifiedValue, index: indexToUpdate }) => {
        setArrayData((entries) => {
            return entries.map((element, index) => {
                if (index === indexToUpdate) {
                    if (element instanceof Object && element instanceof Array === false) {
                        return { ...element, ...modifiedValue };
                    }
                    return modifiedValue as T;
                }
                return element;
            });
        });
    }, []);

    return { entries: arrayData, clear, push, remove, unshift, update };
};
