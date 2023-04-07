// Tools
import { CLASSES } from "../../css_references";
// Types
import type { FunctionComponent } from "react";
// Other components
import Label from "./Label";
import Description from "./Description";
import FlexBox from "@/components/atoms/content_placement/FlexBox";

interface ContentProps {
    description: string;
    isUrget: boolean;
    label: string;
}

const Content: FunctionComponent<ContentProps> = (props) => {
    return (
        <FlexBox column horizontal="start">
            <Description>
                <span>{props.description}</span>
            </Description>

            <FlexBox className={CLASSES.SINGLE_TASK.LABELS_WRAPPER}>
                <Label indicateUrgency={props.isUrget} />
                <Label label={props.label} />
            </FlexBox>
        </FlexBox>
    );
};

export default Content;
