// Types
import type { FunctionComponent } from "react";
// Styled components
import Label from "landing_page/ToDoList2/atoms/LabelBase";
import { Divider, PreviewWrapper } from "./styled_components";

interface NewColorPreviewProps {
    name: string;
    color: ColorInHEX;
    validationError: boolean;
}

const NewColorPreview: FunctionComponent<NewColorPreviewProps> = (props) => {
    const labelNameToDisplay: string = props.name.length ? props.name.trim().slice(0, 18) : "your label";

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
