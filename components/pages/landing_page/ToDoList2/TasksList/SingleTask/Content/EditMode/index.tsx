// Tools
import { useEditModeContext } from "../../hooks/useEditModeContext";
import { CSS_REFERENCES } from "landing_page/ToDoList2/TasksList/SingleTask/css_references";
// Types
import type { FunctionComponent } from "react";
// Other components
import FlexBox from "@/components/atoms/content_placement/FlexBox";
import { StyledInput, StyledCheckbox } from "@/components/atoms/forms";
import { LabelPicker, DueDatePicker } from "landing_page/ToDoList2/atoms/modifiers";

const EditMode: FunctionComponent = () => {
    const editModeContext = useEditModeContext();

    return (
        <>
            <StyledInput
                value={editModeContext.newState.title} //
                onChange={(e) => editModeContext.updateNewState({ title: e.target.value as string })}
                componentThemeID="TRANSPARENT_WHITE"
                sx={{
                    width: "100%",
                    input: {
                        padding: "4px 12px",
                        width: "100%",
                        fontSize: "16px",
                    },
                }}
            />

            <StyledInput
                value={editModeContext.newState.description ?? ""} //
                onChange={(e) => editModeContext.updateNewState({ description: e.target.value as string })}
                componentThemeID="TRANSPARENT_WHITE"
                multiline
                sx={{
                    width: "100%",
                    input: {
                        padding: "4px 12px",
                        width: "100%",
                        fontSize: "16px",
                    },
                }}
            />

            <FlexBox className={CSS_REFERENCES.CONTENT.PIECE_OF_CONTENT_WRAPPER}>
                <span>
                    <StyledCheckbox
                        label="Urgent" //
                        value={editModeContext.newState.urgent}
                        updateValue={(val) => editModeContext.updateNewState({ urgent: val })}
                        componentThemeID="TRANSPARENT_WHITE"
                        small
                    />
                </span>
                <span>
                    <DueDatePicker
                        value={editModeContext.newState.dueDate} //
                        updateValue={(dueDate) => editModeContext.updateNewState({ dueDate })}
                        componentThemeID="TRANSPARENT_WHITE"
                        small
                    />
                </span>
                <span style={{ display: "flex" }}>
                    <LabelPicker
                        value={editModeContext.newState.labelID} //
                        updateValue={(val) => editModeContext.updateNewState({ labelID: val })}
                        componentThemeID="TRANSPARENT_WHITE"
                        small
                    />
                </span>
            </FlexBox>
        </>
    );
};

export default EditMode;
