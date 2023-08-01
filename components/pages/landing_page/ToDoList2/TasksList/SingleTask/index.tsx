// Tools
import { useTaskRemover } from "./hooks/useTaskRemover";
import { useEditModeContext } from "./hooks/useEditModeContext";
// Types
import { FunctionComponent } from "react";
import type { UpdatedTask } from "./context/editModeContext";
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
    applyMobileDeviceLayout: boolean;

    remove: () => void;
    update: (cb: TaskEditCallback) => void;
}

const SingleTask: FunctionComponent<SingleTaskProps> = (props) => {
    const { data } = props;

    const { isOpened: isInEditMode, isClosing: isEditModeBeingClosed, updateNewState } = useEditModeContext();
    const { isTaskBeingRemoved, remove } = useTaskRemover(props.remove);

    function toggleCompletion() {
        props.update((currentValue) => ({ isCompleted: !currentValue.isCompleted }));
    }

    function toggleUrgency() {
        props.update((currentValue) => {
            const newValue: Partial<UpdatedTask> = { urgent: !currentValue.urgent };

            updateNewState(newValue);
            return newValue;
        });
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

            <Content data={data} />

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
