// Tools
import { CLASSES, SINGLE_TASK_STAGES } from "../css_references";
import { useSingleTaskContext } from "./hooks/useSingleTaskContext";
// Types
import { FunctionComponent, useState } from "react";
import type { Task, TaskWithoutID } from "../@types";
// Other components
import Label from "./Label";
import Manage from "./Manage";
import CheckIcon from "./CheckIcon";
import { SingleTaskContextProvider } from "./context";
// Styled components
import FlexBox from "@/components/atoms/content_placement/FlexBox";
import { SingleTaskBase, Description, Background } from "./styled_components";

const SingleTask: FunctionComponent = () => {
    const { data, edit } = useSingleTaskContext();
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    function toggleCompletion() {
        edit({ isCompleted: !data.isCompleted });
    }

    function remove() {
        setIsDeleting(true);
        //
    }

    return (
        <SingleTaskBase
            className={[
                data.isCompleted ? SINGLE_TASK_STAGES.CHECKED : "", //
                isDeleting ? SINGLE_TASK_STAGES.DELETING : "",
            ].join(" ")}
        >
            <Background
                className={[
                    data.urgent ? "active" : "", //
                    CLASSES.SINGLE_TASK.BACKGROUND,
                ].join(" ")}
            />

            <CheckIcon isChecked={data.isCompleted} onClick={toggleCompletion} />

            <FlexBox column horizontal="start">
                <Description className={CLASSES.SINGLE_TASK.DESCRIPTION}>
                    <span>{data.description}</span>
                </Description>

                <FlexBox className={CLASSES.SINGLE_TASK.LABELS_WRAPPER}>
                    {data.urgent && <Label indicateUrgency />}
                    <Label label={data.label} />
                </FlexBox>
            </FlexBox>

            <Manage
                isCompleted={data.isCompleted} //
                isDeleting={isDeleting}
                remove={remove}
            />
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
