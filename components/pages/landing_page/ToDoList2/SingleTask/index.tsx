// Tools
import { SINGLE_TASK_STAGES } from "../css_references";
import { useTaskRemover } from "./hooks/useTaskRemover";
import { useEditMode } from "./hooks/useEditMode";
// Types
import { FunctionComponent, useState } from "react";
import type { Task, TaskEditCallback } from "../@types";
// Other components
import Manage from "./Manage";
import Content from "./Content";
import Background from "./Background";
import CompletionButton from "./CompletionButton";
// Styled components
import SingleTaskBase from "./Base";

interface SingleTaskProps {
    data: Task;
    update: (cb: TaskEditCallback) => void;
    remove: () => void;
}

const SingleTask: FunctionComponent<SingleTaskProps> = (props) => {
    const { data } = props;
    const { isTaskBeingRemoved, remove } = useTaskRemover(props.remove);

    const {
        isOpened: isInEditMode, //
        newState,
        saveAndExit,
        someChangesHaveBeenMade,
        toggleIsOpened: toggleOpenMode,
        updateNewState,
    } = useEditMode(data, props.update);

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
                isUrget={data.urgent}
                label={data.label}
            />

            <Manage
                newState={newState} //
                isUrgent={data.urgent}
                isInEditMode={isInEditMode}
                isCompleted={data.isCompleted}
                isDeleting={isTaskBeingRemoved}
                somethingHasChanged={someChangesHaveBeenMade}
                //
                remove={remove}
                applyChanges={saveAndExit}
                toggleUrgency={toggleUrgency}
                updateNewState={updateNewState}
                toggleOpenMode={toggleOpenMode}
            />
        </SingleTaskBase>
    );
};
export default SingleTask;
