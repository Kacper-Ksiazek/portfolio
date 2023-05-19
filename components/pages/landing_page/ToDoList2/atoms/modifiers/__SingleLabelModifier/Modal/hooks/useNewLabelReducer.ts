// Tools
import { useEffect } from "react";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
// Types
import type { Color } from "../@types";

const DEFAULT_VALUE: Color = Object.seal({
    color: '#ffffff',
    name: ''
})

export function useNewLabelReducer(): ReturnType<typeof useSimpleReducer<Color>> {
    const [newLabel, updateNewLabel] = useSimpleReducer<Color>(DEFAULT_VALUE);

    useEffect(() => {
        return () => updateNewLabel(DEFAULT_VALUE);
    }, [updateNewLabel]);

    return [newLabel,updateNewLabel]
}
