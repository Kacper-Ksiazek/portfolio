// Tools
import { CSS_REFERENCES } from "./css_references";
import { useEditModeContext } from "../../hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import { StyledInput, StyledCheckbox } from "@/components/atoms/forms";
import { LabelPicker, DueDatePicker } from "landing_page/ToDoList2/atoms/modifiers";
// Other components
import MobileEditModeModalWrapper from "./Wrapper";

const MobileEditModeModal: FunctionComponent = () => {
    const editModeContext = useEditModeContext();

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

            <span style={{ display: "flex" }}>
                <LabelPicker
                    value={editModeContext.newState.labelID} //
                    updateValue={(val) => editModeContext.updateNewState({ labelID: val })}
                    componentThemeID="TRANSPARENT_WHITE"
                />
            </span>

            <DueDatePicker
                value={editModeContext.newState.dueDate} //
                className={CSS_REFERENCES.DATE_PICKER}
                updateValue={(dueDate) => editModeContext.updateNewState({ dueDate })}
                componentThemeID="TRANSPARENT_WHITE"
            />
        </MobileEditModeModalWrapper>
    );
};

export default MobileEditModeModal;
