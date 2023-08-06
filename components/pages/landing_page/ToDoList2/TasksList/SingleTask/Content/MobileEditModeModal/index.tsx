// Tools
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
                value={editModeContext.newState.description} //
                onChange={(e) => editModeContext.updateNewState({ description: e.target.value as string })}
                componentThemeID="TRANSPARENT_WHITE"
                sx={{
                    input: {
                        padding: "10px 12px",
                    },
                }}
            />
            <DueDatePicker
                value={editModeContext.newState.dueDate} //
                updateValue={(val) => editModeContext.updateNewState({ dueDate: val })}
                componentThemeID="TRANSPARENT_WHITE"
            />
            <span>
                <StyledCheckbox
                    label="Urgent" //
                    value={editModeContext.newState.urgent}
                    updateValue={(val) => editModeContext.updateNewState({ urgent: val })}
                    componentThemeID="TRANSPARENT_WHITE"
                    sx={{ mr: "6px" }}
                />

                <LabelPicker
                    value={editModeContext.newState.labelID} //
                    updateValue={(val) => editModeContext.updateNewState({ labelID: val })}
                    componentThemeID="TRANSPARENT_WHITE"
                />
            </span>
        </MobileEditModeModalWrapper>
    );
};

export default MobileEditModeModal;
