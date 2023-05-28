// Tools
import { useEffect } from "react";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
// Types
import type { Label} from "landing_page/ToDoList2/@types";

const DEFAULT_VALUE: Label = Object.seal({
    color:"#26c8e8",
    name: ''
})

export function useNewLabelReducer(labelToUpdate: Label | null): ReturnType<typeof useSimpleReducer<Label>> {
    const [newLabel, updateNewLabel] = useSimpleReducer<Label>(labelToUpdate?? DEFAULT_VALUE);

    useEffect(() => {
        return () => updateNewLabel((labelToUpdate?? DEFAULT_VALUE));
    }, [labelToUpdate, updateNewLabel]);

    return [newLabel,updateNewLabel]
}
