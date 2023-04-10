// Tools
import { createContext } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { ColorInHEX, I_LabelsContext } from "./@types";
// Other components
import { LabelsUpdatersContextProvider } from "./Updaters";

export const labelsContext = createContext<I_LabelsContext>({} as any);

export const LabelsContextProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const [labelsFromLocalStorage, setLabels] = useLocalStorage<Record<string, ColorInHEX>>("to-do-list-labels", {
        University: "#FFADDA",
        Household: "#D7AF70",
        Career: "#17A398",
        "Self-growth": "#EA1744",
        "Family-and-friends": "#F96900",
    });

    function getCorrespondingColor(label: keyof typeof labelsFromLocalStorage): ColorInHEX {
        const result: ColorInHEX | null = labelsFromLocalStorage[label];
        if (typeof result === "string") return result;

        throw new Error(`Unexpected label provided **${label as any}**`);
    }

    return (
        <labelsContext.Provider
            value={{
                getCorrespondingColor,
                labels: Object.keys(labelsFromLocalStorage),
            }}
        >
            <LabelsUpdatersContextProvider setLabels={setLabels}>
                {children}
                {/*  */}
            </LabelsUpdatersContextProvider>
        </labelsContext.Provider>
    );
};
