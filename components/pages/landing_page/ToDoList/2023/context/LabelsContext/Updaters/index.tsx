// Tools
import { createContext } from "react";
import { getDefaultLabels } from "../default_labels";
import { ensureLabelsName } from "./utils/ensureLabelsName";
// Types
import type { FunctionComponent, ReactNode, Dispatch, SetStateAction } from "react";
import type { Label, LabelID, LabelsCollection } from "landing_page/ToDoList/2023/@types/Labels";
import type { LabelsUpdatersContext as I_LabelsUpdatersContext } from "landing_page/ToDoList/2023/@types/Contexts";

export const labelsUpdatersContext = createContext<I_LabelsUpdatersContext>({} as any);

interface LabelsUpdatersContextProviderProps {
    labels: LabelsCollection;
    children: ReactNode;
    setLabels: Dispatch<SetStateAction<LabelsCollection>>;
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

            return JSON.parse(JSON.stringify(labels));
        });
    }

    function resetToDefault() {
        props.setLabels(getDefaultLabels());
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
