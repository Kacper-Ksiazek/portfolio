// Tools
import { createContext } from "react";
// Types
import type { FunctionComponent, ReactNode, Dispatch, SetStateAction } from "react";
import type { LabelsLocalStorage, I_LabelsUpdatersContext, Label, LabelID } from "./@types";

export const labelsUpdatersContext = createContext<I_LabelsUpdatersContext>({} as any);

interface LabelsUpdatersContextProviderProps {
    children: ReactNode;
    setLabels: Dispatch<SetStateAction<LabelsLocalStorage>>;
}

type Expectation = "PRESENCE" | "NON_PRESENCE";

type EnsureLabelsNameProps =
    | {
          label: string;
          dataset: LabelsLocalStorage;
          expect: Expectation;
      }
    | {
          id: LabelID;
          dataset: LabelsLocalStorage;
          expect: Expectation;
      };

class LabelEnsuranceError extends Error {
    public constructor(private expectation: Expectation, private details: { label: string; id?: undefined } | { label?: undefined; id: LabelID }) {
        let labelsPeculiarity: string = typeof details.id == "string" ? `an id equal to ${details.id}` : `a name equal to ${details.label}`;
        const msg = expectation === "NON_PRESENCE" ? `Label with ${labelsPeculiarity} already exists!` : `Unexpected label ${labelsPeculiarity} has been received`;

        super(msg);
    }
}

/** Does the given label appear in the collection of labels */
function ensureLabelsName(params: EnsureLabelsNameProps) {
    let existance: boolean;

    if ("label" in params) {
        existance = Object.values(params.dataset)
            .map(({ name }) => name)
            .includes(params.label);
    } else {
        existance = params.id in params.dataset;
    }

    if ((!existance && params.expect === "PRESENCE") || (existance && params.expect === "NON_PRESENCE")) {
        throw new LabelEnsuranceError(params.expect, {
            id: (params as any).id,
            label: (params as any).label,
        });
    }
}

export const LabelsUpdatersContextProvider: FunctionComponent<LabelsUpdatersContextProviderProps> = (props) => {
    function add(newLabelData: Label): LabelID {
        const ID: LabelID = String(Date.now());

        props.setLabels((currentLabels) => {
            ensureLabelsName({
                label: newLabelData.name,
                dataset: currentLabels,
                expect: "NON_PRESENCE",
            });

            return {
                ...currentLabels,
                [ID]: newLabelData,
            };
        });

        return ID;
    }

    function update(id: LabelID, data: Partial<Label>) {
        props.setLabels((currentLabels) => {
            ensureLabelsName({
                id,
                dataset: currentLabels,
                expect: "PRESENCE",
            });
            return {
                ...currentLabels,
                [id]: {
                    ...currentLabels[id],
                    ...data,
                },
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
                update,
                remove,
            }}
        >
            {props.children}
        </labelsUpdatersContext.Provider>
    );
};
