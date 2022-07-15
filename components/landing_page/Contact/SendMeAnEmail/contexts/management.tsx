// Tools
import { useState, useEffect, createContext } from "react";
// Types
import type { Status, FormFillingStage, SpecialWayOfRenderingForm } from "./@types";
import type { Dispatch, SetStateAction, FunctionComponent, ReactNode } from "react";

interface ManagementContextInterface {
    blockContinueButton: boolean;
    setBlockContinueButton: Dispatch<SetStateAction<boolean>>;
    //
    formFillingStage: FormFillingStage;
    setFormFillingStage: Dispatch<SetStateAction<FormFillingStage>>;
    //
    requestStatus: Status;
    setRequestStatus: Dispatch<SetStateAction<Status>>;
    //
    failedRequestHTTPStatus: number;
    setFailedRequestHTTPStatus: Dispatch<SetStateAction<number>>;
    //
    specialWayOfRenderingForm: SpecialWayOfRenderingForm;
}

export const ManagemetContext = createContext<ManagementContextInterface>({} as any);

export const ManagementContextProvider: FunctionComponent<{ children: ReactNode }> = (props) => {
    const [blockContinueButton, setBlockContinueButton] = useState<boolean>(false);
    const [requestStatus, setRequestStatus] = useState<Status>("fillingForm");
    const [formFillingStage, setFormFillingStage] = useState<FormFillingStage>("purpose");
    const [specialWayOfRenderingForm, setSpecialWayOfRenderingForm] = useState<SpecialWayOfRenderingForm>(null);
    const [failedRequestHTTPStatus, setFailedRequestHTTPStatus] = useState<number>(500);

    useEffect(() => {
        if ((["fillingForm", "fillingForm_after_error", "fillingForm_after_success"] as Status[]).includes(requestStatus)) {
            setSpecialWayOfRenderingForm(null);
            // ---
            // Let the outro animation end and then simply stop rendering <ProcessRequest/> component
            if ((["fillingForm_after_error", "fillingForm_after_success"] as Status[]).includes(requestStatus)) {
                setTimeout(() => {
                    setRequestStatus("fillingForm");
                }, 300);
            }
        }
        //
        else if (specialWayOfRenderingForm === null) {
            setSpecialWayOfRenderingForm("displayOutroAnimation");
            setTimeout(() => {
                setSpecialWayOfRenderingForm("hideIt");
            }, 800);
        }
    }, [specialWayOfRenderingForm, requestStatus]);

    return (
        <ManagemetContext.Provider
            value={{
                blockContinueButton,
                setBlockContinueButton,
                formFillingStage,
                requestStatus,
                setFormFillingStage,
                setRequestStatus,
                specialWayOfRenderingForm,
                failedRequestHTTPStatus,
                setFailedRequestHTTPStatus,
            }}
        >
            {props.children}
        </ManagemetContext.Provider>
    );
};
