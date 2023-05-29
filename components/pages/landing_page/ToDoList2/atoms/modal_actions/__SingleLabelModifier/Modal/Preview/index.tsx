// Types
import type { FunctionComponent } from "react";
import type { ColorInHEX } from "landing_page/ToDoList2/@types";
// Styled components
import Label from "landing_page/ToDoList2/atoms/LabelBase";
import { Divider, PreviewWrapper } from "./styled_components";

interface NewColorPreviewProps {
    name: string;
    color: ColorInHEX;
    validationError: boolean;
}

const NewColorPreview: FunctionComponent<NewColorPreviewProps> = (props) => {
    const labelNameToDisplay: string = props.name.length ? props.name.slice(0, 16) : "your label";

    return (
        <PreviewWrapper className={props.validationError ? "error" : ""}>
            <Label color={props.color} sx={{ minWidth: "100px" }}>
                {labelNameToDisplay}
            </Label>

            <Divider />

            <Label color={props.color} isUrgent sx={{ minWidth: "100px" }}>
                {labelNameToDisplay}
            </Label>
        </PreviewWrapper>
    );
};

export default NewColorPreview;
