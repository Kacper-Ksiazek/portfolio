// Tools
import { createContext } from "react";
import { DEFAULT_LABELS } from "./default_labels";
import { useLocalStorage } from "@/hooks/useLocalStorage";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { Label, LabelID, LabelsCollection } from "landing_page/ToDoList2/@types/Labels";
import type { LabelsContext as I_LabelsContext } from "landing_page/ToDoList2/@types/Contexts";
// Other components
import { LabelsUpdatersContextProvider } from "./Updaters";

export const labelsContext = createContext<I_LabelsContext>({} as any);

export const LabelsContextProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const [labelsFromLocalStorage, setLabels, _hasFullyLoaded] = useLocalStorage<LabelsCollection>("to-do-list-labels", DEFAULT_LABELS);

    function getLabelWithID(id: LabelID): Label {
        const result: Label | undefined = labelsFromLocalStorage[id];

        if (typeof result === "undefined") {
            throw new Error(`An index **${id}** with no corresponding label has been provided!!!`);
        }

        return result;
    }

    const _colorsInUse: Label["color"][] = Object.values(labelsFromLocalStorage).map(({ color }: Label) => color);
    const _labelNamesInUse: Label["name"][] = Object.values(labelsFromLocalStorage).map(({ name }: Label) => name);

    return (
        <labelsContext.Provider
            value={{
                getLabelWithID,
                labels: labelsFromLocalStorage,
                _colorsInUse,
                _labelNamesInUse,
                _hasFullyLoaded,
            }}
        >
            <LabelsUpdatersContextProvider labels={labelsFromLocalStorage} setLabels={setLabels}>
                {children}
                {/*  */}
            </LabelsUpdatersContextProvider>
        </labelsContext.Provider>
    );
};
