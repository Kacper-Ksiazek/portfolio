// Tools
import { createContext } from "react";
// Types
import type { FunctionComponent, ReactNode, Dispatch, SetStateAction } from "react";
import type { LabelsCollection, I_LabelsUpdatersContext, ColorInHEX } from "./@types";

export const labelsUpdatersContext = createContext<I_LabelsUpdatersContext>({} as any);

interface LabelsUpdatersContextProviderProps {
    children: ReactNode;
    setLabels: Dispatch<SetStateAction<LabelsCollection>>;
}

/** Does the given label appear in the collection of labels */
function appearsIn(val: string, collection: LabelsCollection): boolean {
    return Object.keys(collection).includes(val);
}

export const LabelsUpdatersContextProvider: FunctionComponent<LabelsUpdatersContextProviderProps> = (props) => {
    function add({ label, color }: { label: string; color: ColorInHEX }) {
        props.setLabels((currentLabels) => {
            if (appearsIn(label, currentLabels) === true) throw new Error(`Label **${label}** already exists!`);

            return {
                ...currentLabels,
                [label]: color,
            };
        });
    }

    function changeColor({ label, newColor }: { label: string; newColor: ColorInHEX }) {
        props.setLabels((currentLabels) => {
            if (appearsIn(label, currentLabels) === false) throw new Error(`Unexpected label **${label} has been received`);

            return {
                ...currentLabels,
                [label]: newColor,
            };
        });
    }

    function remove(labelToBeRemoved: string) {
        props.setLabels((labels) => {
            delete labels[labelToBeRemoved];
            return labels;
        });
    }

    return (
        <labelsUpdatersContext.Provider
            value={{
                add,
                changeColor,
                remove,
            }}
        >
            {props.children}
        </labelsUpdatersContext.Provider>
    );
};
