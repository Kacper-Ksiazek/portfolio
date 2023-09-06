// Tools
import { createContext } from "react";
import { DEFAULT_LABELS } from "../default_labels";
import { ensureLabelsName } from "./utils/ensureLabelsName";
// Types
import type { FunctionComponent, ReactNode, Dispatch, SetStateAction } from "react";
import type { Labels, LabelsUpdatersContext as I_LabelsUpdatersContext, Label, LabelID } from "landing_page/ToDoList2/@types";

export const labelsUpdatersContext = createContext<I_LabelsUpdatersContext>({} as any);

interface LabelsUpdatersContextProviderProps {
    labels: Labels;
    children: ReactNode;
    setLabels: Dispatch<SetStateAction<Labels>>;
}

export const LabelsUpdatersContextProvider: FunctionComponent<LabelsUpdatersContextProviderProps> = (props) => {
    function add(newLabelData: Label): LabelID {
        ensureLabelsName({
            label: newLabelData.name,
            dataset: props.labels,
            expect: "NON_PRESENCE",
        });

        const ID: LabelID = String(Date.now());

        props.setLabels((currentLabels) => {
            return {
                ...currentLabels,
                [ID]: newLabelData,
            };
        });

        return ID;
    }

    function update(id: LabelID, data: Partial<Label>) {
        ensureLabelsName({
            id,
            dataset: props.labels,
            expect: "PRESENCE",
        });

        props.setLabels((currentLabels) => {
            return {
                ...currentLabels,
                [id]: {
                    ...currentLabels[id],
                    ...data,
                },
            };
        });
    }

    function remove(labelToBeRemoved: LabelID | LabelID[]) {
        props.setLabels((labels) => {
            // Handle an array of labels
            if (labelToBeRemoved instanceof Array) {
                labelToBeRemoved.forEach((id) => {
                    delete labels[id];
                });
            }
            // Handle a single id
            else {
                delete labels[labelToBeRemoved];
            }
            return labels;
        });
    }

    function resetToDefault() {
        props.setLabels(DEFAULT_LABELS);
    }

    return (
        <labelsUpdatersContext.Provider
            value={{
                add,
                update,
                remove,
                resetToDefault,
            }}
        >
            {props.children}
        </labelsUpdatersContext.Provider>
    );
};
