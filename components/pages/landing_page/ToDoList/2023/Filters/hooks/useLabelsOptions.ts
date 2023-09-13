// Tools
import { useMemo } from "react";
import { useLabelsContext } from "landing_page/ToDoList/2023/hooks/useLabelsContext";
// Types
import type { LabelID } from "landing_page/ToDoList/2023/@types/Labels";
import type { OptionWithAlias } from "@/components/atoms/forms/StyledSelect";

export function useLabelsOptions(): OptionWithAlias<LabelID>[] {
    const { labels } = useLabelsContext();

    return useMemo<OptionWithAlias<LabelID>[]>(() => {
        return Object.keys(labels).map((labelID): OptionWithAlias<LabelID> => {
            return {
                alias: labels[labelID].name,
                value: labelID,
            };
        });
    }, [labels]);
}
