// Tools
import { useEditModeContext } from "../../hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import FlexBox from "@/components/atoms/content_placement/FlexBox";
import { StyledInput, StyledCheckbox } from "@/components/atoms/forms";
import { LabelPicker, DueDatePicker } from "landing_page/ToDoList2/atoms/modifiers";

interface EditModeProps {
    //
}

const EditMode: FunctionComponent<EditModeProps> = (props) => {
    const editModeContext = useEditModeContext();

    return (
        <>
            <StyledInput
                value={editModeContext.newState.description} //
                onChange={(e) => editModeContext.updateNewState({ description: e.target.value as string })}
                componentThemeID="TRANSPARENT_LIGHT_THEME_WHITE_FONT"
                sx={{
                    width: "100%",
                    input: {
                        padding: "4px 12px",
                        width: "100%",
                        fontSize: "16px",
                    },
                }}
            />
            <FlexBox className="flex-wrapper">
                <StyledCheckbox
                    label="Urgent" //
                    value={editModeContext.newState.urgent}
                    updateValue={(val) => editModeContext.updateNewState({ urgent: val })}
                    componentThemeID="TRANSPARENT_LIGHT_THEME_WHITE_FONT"
                    small
                />
                <DueDatePicker
                    value={editModeContext.newState.dueDate} //
                    updateValue={(val) => editModeContext.updateNewState({ dueDate: val })}
                    componentThemeID="TRANSPARENT_LIGHT_THEME_WHITE_FONT"
                    small
                />
                <span style={{ display: "flex" }}>
                    <LabelPicker
                        value={editModeContext.newState.labelID} //
                        updateValue={(val) => editModeContext.updateNewState({ labelID: val })}
                        componentThemeID="TRANSPARENT_LIGHT_THEME_WHITE_FONT"
                        small
                    />
                </span>
            </FlexBox>
        </>
    );
};

export default EditMode;
