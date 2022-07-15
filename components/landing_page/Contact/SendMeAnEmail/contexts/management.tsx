// Tools
import { useState, useEffect, createContext } from "react";
// Types
import type { Status, FormFillingStage, SpecialWayOfRenderingForm } from "./@types";
import type { Dispatch, SetStateAction, FunctionComponent, ReactNode } from "react";

interface ManagementContextInterface {
    formFillingStage: FormFillingStage;
    setFormFillingStage: Dispatch<SetStateAction<FormFillingStage>>;
    //
    requestStatus: Status;
    setRequestStatus: Dispatch<SetStateAction<Status>>;
    //
    specialWayOfRenderingForm: SpecialWayOfRenderingForm;
}

export const ManagemetContext = createContext<ManagementContextInterface>({} as any);

export const ManagementContextProvider: FunctionComponent<{ children: ReactNode }> = (props) => {
    const [formFillingStage, setFormFillingStage] = useState<FormFillingStage>("purpose");
    const [requestStatus, setRequestStatus] = useState<Status>("fillingForm");
    const [specialWayOfRenderingForm, setSpecialWayOfRenderingForm] = useState<SpecialWayOfRenderingForm>(null);

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
                formFillingStage,
                requestStatus,
                setFormFillingStage,
                setRequestStatus,
                specialWayOfRenderingForm,
            }}
        >
            {props.children}
        </ManagemetContext.Provider>
    );
};
