// Tools
import { useMemo } from "react";
import { createContext } from "react";
import useWindowSizes from "@/hooks/useWindowSizes";
// Types
import type { FunctionComponent, ReactNode } from "react";

interface ProjectContext {
    intersectionObserverMargin: number;
    numberOfTechnologiesToDisplay: number;
    viewport: "large" | "medium" | "small";
}

export const context = createContext<ProjectContext>({} as any);

export const ProjectsContextProvider: FunctionComponent<{ children: ReactNode }> = (props) => {
    const { width } = useWindowSizes();

    const numberOfTechnologiesToDisplay = useMemo<ProjectContext["numberOfTechnologiesToDisplay"]>(() => {
        if (width > 1600) return 5;
        else if (width > 1480) return 4;
        else if (width > 1350) return 3;
        else if (width > 1200) return 4;
        else if (width > 1000) return 3;
        else if (width > 450) return 5;
        else return 4;
    }, [width]);

    const intersectionObserverMargin = useMemo<ProjectContext["intersectionObserverMargin"]>(() => {
        if (width > 1400) return 350;
        if (width > 700) return 250;
        return 150;
    }, [width]);

    const viewport = useMemo<ProjectContext["viewport"]>(() => {
        if (width > 1520) return "large";
        else if (width > 750) return "medium";
        return "small";
    }, [width]);

    return (
        <context.Provider
            value={{
                intersectionObserverMargin, //
                numberOfTechnologiesToDisplay,
                viewport,
            }}
        >
            {props.children}
        </context.Provider>
    );
};
