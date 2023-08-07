// Tools
import { CSS_REFERENCES } from "./css_references";
import { useEditModeContext } from "../../hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
import type { Task } from "landing_page/ToDoList2/@types";
// Other components
import { StyledInput, StyledCheckbox } from "@/components/atoms/forms";
import { LabelPicker, DueDatePicker } from "landing_page/ToDoList2/atoms/modifiers";
// Other components
import MobileEditModeModalWrapper from "./Wrapper";

const MobileEditModeModal: FunctionComponent = () => {
    const editModeContext = useEditModeContext();

    function updateOptionalProperty(property: keyof Task["additionalInformation"], value: Task["additionalInformation"][typeof property]) {
        editModeContext.updateNewState({
            additionalInformation: {
                ...editModeContext.newState.additionalInformation,
                [property]: value,
            },
        });
    }

    return (
        <MobileEditModeModalWrapper>
            <StyledInput
                value={editModeContext.newState.title} //
                onChange={(e) => editModeContext.updateNewState({ title: e.target.value as string })}
                componentThemeID="TRANSPARENT_WHITE"
                className={CSS_REFERENCES.DESCRIPTION_INPUT}
                sx={{
                    input: {
                        padding: "10px 12px",
                    },
                }}
            />
            <StyledCheckbox
                label="Urgent" //
                value={editModeContext.newState.urgent}
                className={CSS_REFERENCES.URGENCY_SWITCH}
                updateValue={(val) => editModeContext.updateNewState({ urgent: val })}
                componentThemeID="TRANSPARENT_WHITE"
            />

            <LabelPicker
                value={editModeContext.newState.labelID} //
                updateValue={(val) => editModeContext.updateNewState({ labelID: val })}
                componentThemeID="TRANSPARENT_WHITE"
            />

            <DueDatePicker
                value={editModeContext.newState.additionalInformation.dueDate} //
                className={CSS_REFERENCES.DATE_PICKER}
                updateValue={(val) => updateOptionalProperty("dueDate", val)}
                componentThemeID="TRANSPARENT_WHITE"
            />
        </MobileEditModeModalWrapper>
    );
};

export default MobileEditModeModal;
