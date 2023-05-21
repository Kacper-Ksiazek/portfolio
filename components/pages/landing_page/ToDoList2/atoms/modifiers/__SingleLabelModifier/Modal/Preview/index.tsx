// Types
import type { FunctionComponent } from "react";
import type { ColorInHEX } from "landing_page/ToDoList2/context/LabelsContext/@types";
// Styled components
import { Divider, Label, PreviewWrapper } from "./styled_components";

interface NewColorPreviewProps {
    name: string;
    color: ColorInHEX;
}

const NewColorPreview: FunctionComponent<NewColorPreviewProps> = (props) => {
    const labelNameToDisplay: string = props.name.length ? props.name : "your label";

    return (
        <PreviewWrapper>
            <Label
                sx={{
                    color: props.color, //
                    borderColor: props.color,
                }}
            >
                {labelNameToDisplay}
            </Label>

            <Divider />

            <Label
                sx={{
                    background: props.color, //
                    borderColor: props.color,
                    color: "#fff",
                }}
            >
                {labelNameToDisplay}
            </Label>
        </PreviewWrapper>
    );
};

export default NewColorPreview;
