// Tools
import { styled } from "@mui/material";
import { fadeSimpleOUT } from "@/components/keyframes/outro";
// Types
import type { SxProps } from "@/@types/MUI";
import type { FunctionComponent, ReactNode } from "react";
// Other components
import GhostRecords from "./GhostRecords";
import AmountOfTasks from "./AmountOfTasks";
import EnsureThereAreRecords from "./EnsureThereAreRecords";
import WrapWithOverScrollDiv from "./WrapWithOverScrollDiv";
// Styled components
const TaskWrapperBase = styled("section")(({ theme }) => ({
    minHeight: "406px",
    width: "820px",
}));

interface TasksWrapperProps {
    children: ReactNode;
    progress: string;
    amountOfTasks: number;
    fadeContentOut: boolean;
}

const TasksWrapper: FunctionComponent<TasksWrapperProps> = (props) => {
    const hidingAnimation: SxProps | null = props.fadeContentOut ? { animation: `${fadeSimpleOUT} .24s linear both` } : null;

    return (
        <TaskWrapperBase className="tasks-wrapper" sx={hidingAnimation as any}>
            <EnsureThereAreRecords amountOfTasks={props.amountOfTasks}>
                <WrapWithOverScrollDiv
                    amountOfTasks={props.amountOfTasks} //
                    ghostRecords={<GhostRecords amountOfTasks={props.amountOfTasks} />}
                >
                    <AmountOfTasks quantity={props.amountOfTasks} />
                    {props.children}
                </WrapWithOverScrollDiv>
            </EnsureThereAreRecords>
        </TaskWrapperBase>
    );
};

export default TasksWrapper;
