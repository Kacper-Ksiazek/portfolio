// Tools
import useWindowSizes from "@/hooks/useWindowSizes";
import { SINGLE_TASK_STAGES } from "./css_references";
import { useTaskRemover } from "./hooks/useTaskRemover";
import { useEditModeContext } from "./hooks/useEditModeContext";
// Types
import { FunctionComponent } from "react";
import type { Task, TaskEditCallback } from "landing_page/ToDoList2/@types";
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

    remove: () => void;
    update: (cb: TaskEditCallback) => void;
}

const SingleTask: FunctionComponent<SingleTaskProps> = (props) => {
    const { data } = props;

    const { width } = useWindowSizes();
    const { isOpened: isInEditMode } = useEditModeContext();
    const { isTaskBeingRemoved, remove } = useTaskRemover(props.remove);

    const applyMobileDeviceLayout: boolean = width < 840;

    function toggleCompletion() {
        props.update((currentValue) => ({ isCompleted: !currentValue.isCompleted }));
    }

    function toggleUrgency() {
        props.update((currentValue) => ({ urgent: !currentValue.urgent }));
    }

    return (
        <SingleTaskBase
            urgent={data.urgent} //
            completed={data.isCompleted}
            currentlyBeingRemoved={isTaskBeingRemoved}
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
                labelID={data.labelID}
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
