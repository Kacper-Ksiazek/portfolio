// Tools
import { useTaskRemover } from "./hooks/useTaskRemover";
import { SINGLE_TASK_STAGES } from "../css_references";
// Types
import type { FunctionComponent } from "react";
import type { Task, TaskEditCallback } from "../@types";
// Other components
import Manage from "./Manage";
import Content from "./Content";
import Background from "./Background";
import CompletionButton from "./CompletionButton";
// Styled components
import { SingleTaskBase } from "./styled_components";

interface SingleTaskProps {
    data: Task;
    update: (cb: TaskEditCallback) => void;
    remove: () => void;
}

const SingleTask: FunctionComponent<SingleTaskProps> = (props) => {
    const { data } = props;
    const { isTaskBeingRemoved, remove } = useTaskRemover(props.remove);

    function toggleCompletion() {
        props.update((currentValue) => ({ isCompleted: !currentValue.isCompleted }));
    }

    function toggleUrgency() {
        props.update((currentValue) => ({ urgent: !currentValue.urgent }));
    }

    return (
        <SingleTaskBase
            className={[
                data.isCompleted ? SINGLE_TASK_STAGES.CHECKED : "", //
                isTaskBeingRemoved ? SINGLE_TASK_STAGES.DELETING : "",
            ].join(" ")}
        >
            <Background isUrgent={data.urgent} />

            <CompletionButton
                isCompleted={data.isCompleted} //
                toggleCompletion={toggleCompletion}
            />

            <Content description={data.description} isUrget={data.urgent} label={data.label} />

            <Manage
                isUrgent={data.urgent} //
                isCompleted={data.isCompleted}
                isDeleting={isTaskBeingRemoved}
                remove={remove}
                toggleUrgency={toggleUrgency}
            />
        </SingleTaskBase>
    );
};
export default SingleTask;
