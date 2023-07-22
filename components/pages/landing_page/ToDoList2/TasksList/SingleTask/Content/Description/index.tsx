// Tools
import { CSS_REFERENCES } from "landing_page/ToDoList2/TasksList/css_references";
// Types
import type { FunctionComponent } from "react";
// Other components
import StyledInput from "@/components/atoms/forms/StyledInput";
import SmoothConditionalRender from "@/components/utils/SmoothConditionalRender";
// Styled components
import DescriptionWrapper from "./Base";

interface DescriptionProps {
    description: string;
    // Edit mode only
    newValue: string;
    isInEditMode: boolean;
    updateNewValue: (val: string) => void;
}

const Description: FunctionComponent<DescriptionProps> = (props) => {
    return (
        <DescriptionWrapper className={CSS_REFERENCES.SINGLE_TASK.DESCRIPTION}>
            <SmoothConditionalRender when={!props.isInEditMode}>
                <h4>{props.description}</h4>
            </SmoothConditionalRender>

            <SmoothConditionalRender when={props.isInEditMode} styles={{ width: "100%" }}>
                <StyledInput
                    value={props.newValue} //
                    onChange={(e) => props.updateNewValue(e.target.value as string)}
                />
            </SmoothConditionalRender>
        </DescriptionWrapper>
    );
};

export default Description;
