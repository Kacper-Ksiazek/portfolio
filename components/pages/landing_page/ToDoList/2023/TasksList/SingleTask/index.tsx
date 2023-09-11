// Tools
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
                    <SingleTask />
                    {/*  */}
                </ContextProvider.ValidationResultContext>
            </ContextProvider.EditModeContext>
        </ContextProvider.TaskDataContext>
    );
};

export default SingleTaskWithContext;

export const MOBILE_LAYOUT_APPLIANCE_BREAKPOINT: number = 620;

const SingleTask: FunctionComponent = () => {
    const { taskIsBeingRemoved, originalTask } = useTaskDataContext();
    const { isOpened: isInEditMode } = useEditModeContext();

    const { width } = useWindowSizes();

    const applyMobileLayout: boolean = width !== 0 && width < MOBILE_LAYOUT_APPLIANCE_BREAKPOINT;

    return (
        <SingleTaskBase
            urgent={originalTask.urgent} //
            completed={originalTask.isCompleted}
            currentlyBeingRemoved={taskIsBeingRemoved}
        >
            <Background isUrgent={originalTask.urgent} isInEditMode={isInEditMode} />

            {applyMobileLayout === false && <CompletionButton />}

            <Content
                data={originalTask} //
                applyMobileLayout={applyMobileLayout}
            />

            <Manage />
        </SingleTaskBase>
    );
};
