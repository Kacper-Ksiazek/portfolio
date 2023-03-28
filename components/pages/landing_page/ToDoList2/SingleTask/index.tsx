// Types
import type { Task } from "../@types";
import type { FunctionComponent } from "react";
// Other components
import Label from "./Label";
import Manage from "./Manage";
import CheckIcon from "./CheckIcon";
// Styled components
import FlexBox from "@/components/atoms/content_placement/FlexBox";
import { SingleTaskBase, Description } from "./styled_components";

interface SingleTaskProps {
    data: Task;
    markAsComplete: () => void;
}

const SingleTask: FunctionComponent<SingleTaskProps> = (props) => {
    const { data } = props;

    return (
        <SingleTaskBase className={props.data.urgent ? "urgent" : ""}>
            <CheckIcon isChecked={data.isCompleted} />

            <FlexBox column horizontal="start">
                <Description>{data.description}</Description>
                <FlexBox>
                    {props.data.urgent && <Label indicateUrgency />}
                    <Label label={props.data.label} />
                </FlexBox>
            </FlexBox>

            <Manage />
        </SingleTaskBase>
    );
};

export default SingleTask;
