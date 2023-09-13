// Tools
import { CSS_REFERENCES } from "./css_references";
import useWindowSizes from "@/hooks/useWindowSizes";
import { useEditModeContext, useTaskDataContext } from "./hooks";
// Types
import type { FunctionComponent } from "react";
import type { EditTask, Task } from "landing_page/ToDoList/2023/@types/Tasks";
// Other components
import Manage from "./Manage";
import Content from "./Content";
import Background from "./Background";
import CompletionButton from "./CompletionButton";
import * as ContextProvider from "./context/Providers";
// Styled components
import SingleTaskBase from "./Base";

interface SingleTaskWithContextProps {
    data: Task;
    introAnimationsHaveEnded: boolean;

    update: EditTask;
    remove: () => void;
}

const SingleTaskWithContext: FunctionComponent<SingleTaskWithContextProps> = (props) => {
    return (
        <ContextProvider.TaskDataContext
            data={props.data} //
            remove={props.remove}
            update={props.update}
        >
            <ContextProvider.EditModeContext>
                <ContextProvider.ValidationResultContext>
                    {/*  */}
                    <SingleTask introAnimationsHaveEnded={props.introAnimationsHaveEnded} />
                    {/*  */}
                </ContextProvider.ValidationResultContext>
            </ContextProvider.EditModeContext>
        </ContextProvider.TaskDataContext>
    );
};

export default SingleTaskWithContext;

export const MOBILE_LAYOUT_APPLIANCE_BREAKPOINT: number = 620;

const SingleTask: FunctionComponent<{ introAnimationsHaveEnded: boolean }> = (props) => {
    const { taskIsBeingRemoved, originalTask } = useTaskDataContext();
    const { isOpened: isInEditMode } = useEditModeContext();

    const { width } = useWindowSizes();

    const applyMobileLayout: boolean = width !== 0 && width < MOBILE_LAYOUT_APPLIANCE_BREAKPOINT;

    return (
        <SingleTaskBase
            urgent={originalTask.urgent} //
            completed={props.introAnimationsHaveEnded && originalTask.isCompleted}
            currentlyBeingRemoved={taskIsBeingRemoved}
            className={CSS_REFERENCES.SINGLE_TASK_WRAPPER}
        >
            <Background isUrgent={originalTask.urgent} isInEditMode={isInEditMode} />

            {applyMobileLayout === false && <CompletionButton introAnimationsHaveEnded={props.introAnimationsHaveEnded} />}

            {/* Following span prevents all interactions with task, until evey intro animation is done */}
            {props.introAnimationsHaveEnded === false && (
                <span
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 100,
                    }}
                />
            )}

            <Content
                data={originalTask} //
                introAnimationsHaveEnded={props.introAnimationsHaveEnded}
                applyMobileLayout={applyMobileLayout}
            />

            <Manage />
        </SingleTaskBase>
    );
};
