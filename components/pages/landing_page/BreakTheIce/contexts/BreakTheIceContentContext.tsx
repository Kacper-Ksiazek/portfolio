// Tools
import { createContext, useState, useRef, useCallback } from "react";
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
    blockStageChanging: (params: { time: number }) => void;
}

interface BreakTheIceContextProviderProps extends ContextPropertiesFromAPI {
    children: ReactNode;
}

export const BreakTheIceContext = createContext<BreakTheIceContextInterface>({} as any);

export const BreakTheIceContextProvider: FunctionComponent<BreakTheIceContextProviderProps> = (props) => {
    const ALL_ANIMATIONS_DURATION: number = 2300;

    const _preventFromChangingStage = useRef<boolean>(false);

    const [currentIceBreakingStage, setCurrentIceBreakingStage] = useState<IceBreakingStage>("General");
    const [previousIceBreakingStage, setPreviousIceBreakingStage] = useState<IceBreakingStage | null>(null);

    const changeStage = useCallback((newIceBreakingStage: IceBreakingStage) => {
        if (_preventFromChangingStage.current === false) {
            _preventFromChangingStage.current = true;

            setCurrentIceBreakingStage((currentIceBreakingStage) => {
                setPreviousIceBreakingStage(currentIceBreakingStage);
                return newIceBreakingStage;
            });
            setTimeout(() => {
                setPreviousIceBreakingStage(null);
            }, 1000);

            setTimeout(() => {
                _preventFromChangingStage.current = false;
            }, ALL_ANIMATIONS_DURATION);
        }
    }, []);

    const blockStageChanging: BreakTheIceContextInterface["blockStageChanging"] = useCallback((params) => {
        _preventFromChangingStage.current = true;
        setTimeout(() => {
            _preventFromChangingStage.current = false;
        }, params.time);
    }, []);

    return (
        <BreakTheIceContext.Provider
            value={{
                hobbies: props.hobbies,
                schools: props.schools,
                previousJobs: props.previousJobs,
                //
                currentIceBreakingStage,
                previousIceBreakingStage,
                //
                changeStage,
                blockStageChanging,
            }}
        >
            {props.children}
        </BreakTheIceContext.Provider>
    );
};
