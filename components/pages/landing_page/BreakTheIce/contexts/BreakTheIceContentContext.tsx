// Tools
import { createContext, useState } from "react";
// Types
import type { Hobby, School } from "@prisma/client";
import type { ReactNode, FunctionComponent } from "react";
import type { PreviousJob } from "@/@types/pages/LandingPage";
import type { IceBreakingStage } from "@/components/pages/landing_page/BreakTheIce/@types";

interface ContextPropertiesFromAPI {
    /** Array of hobbies for `Hobbies` stage, which came from the API */
    hobbies: Hobby[];
    /** Array of schools for `Education` stage, which came from the API */
    schools: School[];
    /** Array of previous jobs for `Previous Jobs` stage, which came from the API */
    previousJobs: PreviousJob[];
}

interface BreakTheIceContextInterface extends ContextPropertiesFromAPI {
    currentIceBreakingStage: IceBreakingStage;
    previousIceBreakingStage: IceBreakingStage | null;
    //
    changeStage: (stage: IceBreakingStage) => void;
}

interface BreakTheIceContextProviderProps extends ContextPropertiesFromAPI {
    children: ReactNode;
}

export const BreakTheIceContext = createContext<BreakTheIceContextInterface>({} as any);

export const BreakTheIceContextProvider: FunctionComponent<BreakTheIceContextProviderProps> = (props) => {
    const ALL_ANIMATIONS_DURATION: number = 2300;

    const [preventFromChangingStage, setPreventFromChangingStage] = useState<boolean>(false);
    const [previousIceBreakingStage, setPreviousIceBreakingStage] = useState<IceBreakingStage | null>(null);
    const [currentIceBreakingStage, setCurrentIceBreakingStage] = useState<IceBreakingStage>("General");

    const changeStage = (val: IceBreakingStage) => {
        if (!preventFromChangingStage) {
            setPreventFromChangingStage(true);

            setCurrentIceBreakingStage(val);
            setPreviousIceBreakingStage(currentIceBreakingStage);
            setTimeout(() => {
                setPreviousIceBreakingStage(null);
            }, 1000);

            setTimeout(() => setPreventFromChangingStage(false), ALL_ANIMATIONS_DURATION);
        }
    };

    return (
        <BreakTheIceContext.Provider
            value={{
                hobbies: props.hobbies,
                schools: props.schools,
                previousJobs: props.previousJobs,
                //
                currentIceBreakingStage,
                previousIceBreakingStage,
                changeStage,
            }}
        >
            {props.children}
        </BreakTheIceContext.Provider>
    );
};
