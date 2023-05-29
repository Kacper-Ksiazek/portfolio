// Tools
import { CLASSES } from "../css_references";
import { fadeSimpleOUT } from "@/components/keyframes/outro";
import { useTasksListContext } from "../hooks/useTaskListContext";
// Types
import type { SxProps } from "@/@types/MUI";
import type { FunctionComponent, ReactNode } from "react";
// Material UI Components
import Box from "@mui/material/Box";
// Other components
import EnsureThereAreRecords from "./EnsureThereAreRecords";
import WrapWithOverScrollDiv from "./WrapWithOverScrollDiv";

interface TasksWrapperProps {
    children: ReactNode;
    progress: string;
    amountOfTasks: number;
    fadeContentOut: boolean;
}

const TasksWrapper: FunctionComponent<TasksWrapperProps> = (props) => {
    const hidingAnimation: SxProps | null = props.fadeContentOut ? { animation: `${fadeSimpleOUT} .24s linear both` } : null;
    const { tasksWrapperRef } = useTasksListContext();

    return (
        <Box
            className={CLASSES.TASKS_WRAPPER} //
            component="section"
            ref={tasksWrapperRef}
            sx={{
                ...(hidingAnimation as any),
                mt: "32px",
                mb: "16px",
            }}
        >
            <EnsureThereAreRecords amountOfTasks={props.amountOfTasks}>
                <WrapWithOverScrollDiv
                    amountOfTasks={props.amountOfTasks} //
                >
                    {props.children}
                </WrapWithOverScrollDiv>
            </EnsureThereAreRecords>
        </Box>
    );
};

export default TasksWrapper;
