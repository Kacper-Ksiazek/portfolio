// Tools
import { CSS_REFERENCES } from "@/components/pages/landing_page/ToDoList2/TasksList/SingleTask/css_references";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import StyledInput from "@/components/atoms/forms/StyledInput";
import SmoothConditionalRender from "@/components/utils/SmoothConditionalRender";
// Styled components
import DescriptionBase from "./Base";

interface DescriptionProps {
    description: string;
    applyMobileDeviceLayout: boolean;
    // Edit mode only
    newValue: string;
    isInEditMode: boolean;
    updateNewValue: (val: string) => void;
}

const DescriptionWrapper: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    return <DescriptionBase className={CSS_REFERENCES.DESCRIPTION}>{children}</DescriptionBase>;
};

const Description: FunctionComponent<DescriptionProps> = (props) => {
    const TaskDescription: ReactNode = <h4>{props.description}</h4>;

    if (props.applyMobileDeviceLayout) return <DescriptionWrapper>{TaskDescription}</DescriptionWrapper>;

    // Only on viewports with width => 1000px

    return (
        <DescriptionWrapper>
            <SmoothConditionalRender when={!props.isInEditMode}>
                {<h4>{props.description}</h4>}
                {/*  */}
            </SmoothConditionalRender>

            <SmoothConditionalRender when={props.isInEditMode} styles={{ width: "100%" }}>
                <StyledInput
                    value={props.newValue} //
                    onChange={(e) => props.updateNewValue(e.target.value as string)}
                    componentThemeID="TRANSPARENT_LIGHT_THEME_WHITE_FONT"
                />
            </SmoothConditionalRender>
        </DescriptionWrapper>
    );
};

export default Description;
