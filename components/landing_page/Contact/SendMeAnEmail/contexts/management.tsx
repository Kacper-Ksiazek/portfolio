// Tools
import { useState } from "react";
import { createContext } from "react";
// Types
import type { Status, FormFillingStage } from "./@types";
import type { Dispatch, SetStateAction, FunctionComponent, ReactNode } from "react";

interface SendMeAnEmailContext {
    formFillingStage: FormFillingStage;
    setFormFillingStage: Dispatch<SetStateAction<FormFillingStage>>;
    //
    requestStatus: Status;
    setRequestStatus: Dispatch<SetStateAction<Status>>;
}

export const ManagemetContext = createContext<SendMeAnEmailContext>({} as any);

export const ManagementContextProvider: FunctionComponent<{ children: ReactNode }> = (props) => {
    const [formFillingStage, setFormFillingStage] = useState<FormFillingStage>("purpose");
    const [requestStatus, setRequestStatus] = useState<Status>("fillingForm");

    return (
        <ManagemetContext.Provider
            value={{
                formFillingStage,
                requestStatus,
                setFormFillingStage,
                setRequestStatus,
            }}
        >
            {props.children}
        </ManagemetContext.Provider>
    );
};
