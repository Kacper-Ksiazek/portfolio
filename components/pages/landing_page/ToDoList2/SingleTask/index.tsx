// Tools
import { SINGLE_TASK_STAGES } from "../css_references";
import { useTaskRemover } from "./hooks/useTaskRemover";
import { useEditModeContext } from "./hooks/useEditModeContext";
// Types
import { FunctionComponent } from "react";
import type { Task, TaskEditCallback } from "../@types";
// Other components
import Manage from "./Manage";
import Content from "./Content";
import Background from "./Background";
import CompletionButton from "./CompletionButton";
import EditModeContextProvider from "./context/editModeContext";
// Styled components
import SingleTaskBase from "./Base";

interface SingleTaskProps {
    data: Task;
    update: (cb: TaskEditCallback) => void;
    remove: () => void;
}

const SingleTask: FunctionComponent<SingleTaskProps> = (props) => {
    const { data } = props;

    const { isOpened: isInEditMode } = useEditModeContext();
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
                isInEditMode ? SINGLE_TASK_STAGES.IN_EDIT_MODE : "",
                data.urgent ? SINGLE_TASK_STAGES.URGENT : "",
            ].join(" ")}
        >
            <Background isUrgent={data.urgent} isInEditMode={isInEditMode} />

            <CompletionButton
                isCompleted={data.isCompleted} //
                isInEditMode={isInEditMode}
                toggleCompletion={toggleCompletion}
            />

            <Content
                description={data.description} //
                isUrgent={data.urgent}
                label={data.label}
                dueDate={data.dueDate}
            />

            <Manage
                isUrgent={data.urgent}
                isInEditMode={isInEditMode}
                isCompleted={data.isCompleted}
                isDeleting={isTaskBeingRemoved}
                //
                remove={remove}
                toggleUrgency={toggleUrgency}
            />
        </SingleTaskBase>
    );
};

const SingleTaskWithContext: FunctionComponent<SingleTaskProps> = (props) => {
    return (
        <EditModeContextProvider
            taskToBeEdited={props.data} //
            applyChanges={props.update}
        >
            <SingleTask {...props} />
        </EditModeContextProvider>
    );
};

export default SingleTaskWithContext;
