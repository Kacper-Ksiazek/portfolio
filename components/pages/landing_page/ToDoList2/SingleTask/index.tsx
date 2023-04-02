// Tools
import { useSingleTaskContext } from "./hooks/useSingleTaskContext";
// Types
import type { FunctionComponent } from "react";
import type { Task, TaskWithoutID } from "../@types";
// Other components
import Label from "./Label";
import Manage from "./Manage";
import CheckIcon from "./CheckIcon";
import { SingleTaskContextProvider } from "./context";
// Styled components
import FlexBox from "@/components/atoms/content_placement/FlexBox";
import { SingleTaskBase, Description, UrgencyBar } from "./styled_components";

const SingleTask: FunctionComponent = () => {
    const { data, edit } = useSingleTaskContext();

    function markAsCompleted() {
        edit({ isCompleted: true });
    }

    return (
        <SingleTaskBase>
            <UrgencyBar className={data.urgent ? "active" : ""} />

            <CheckIcon isChecked={data.isCompleted} onClick={markAsCompleted} />

            <FlexBox column horizontal="start">
                <Description>{data.description}</Description>
                <FlexBox>
                    {data.urgent && <Label indicateUrgency />}
                    <Label label={data.label} />
                </FlexBox>
            </FlexBox>

            <Manage />
        </SingleTaskBase>
    );
};

interface SingleTaskWithContextProps {
    data: Task;
    edit: (val: Partial<TaskWithoutID>) => void;
}

const SingleTaskWithContext: FunctionComponent<SingleTaskWithContextProps> = (props) => {
    return (
        <SingleTaskContextProvider
            data={props.data} //
            edit={props.edit}
        >
            <SingleTask />
        </SingleTaskContextProvider>
    );
};

export default SingleTaskWithContext;
