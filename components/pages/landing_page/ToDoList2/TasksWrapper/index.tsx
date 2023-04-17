// Tools
import { alpha, styled } from "@mui/material";
import { fadeSimple } from "@keyframes/intro/fade";
import { renderNTimes } from "@/utils/client/renderNTimes";
import { fadeSimpleOUT } from "@/components/keyframes/outro";
// Types
import type { SxProps } from "@/@types/MUI";
import type { FunctionComponent, ReactNode } from "react";
// Other components
import AmountOfTasks from "./AmountOfTasks";
import OverflowScrollDiv from "@/components/atoms/content_placement/OverflowScrollDiv";
// Material UI Icons
import BlurOnRoundedIcon from "@mui/icons-material/BlurOnRounded";
// Styled components
const TaskWrapperBase = styled("section")(({ theme }) => ({
    minHeight: "406px",
    width: "820px",
}));

const GhostRecord = styled("div")(({ theme }) => ({
    width: "100%",
    height: "78px",
    marginTop: "24px",
    background: alpha("#fff", 0.065),
    borderRadius: "5px",
}));
const NoRecordWrapper = styled("div")(({ theme }) => ({
    ...theme.mixins.flex_center,
    flexDirection: "column",
    userSelect: "none",
    animation: `${fadeSimple} .3s`,
    svg: {
        fontSize: "128px",
        marginBottom: "12px",
    },
    h2: {
        fontSize: "32px",
        margin: "0 0 8px 0",
    },
    paddingTop: "64px",
    "@media (max-height:880px)": {
        paddingTop: "32px",
    },
    "@media (max-height:800px)": {
        paddingTop: "16px",
    },
    "@media (max-height:750px)": {
        paddingTop: "0px",
    },
}));

interface TasksWrapperProps {
    children: ReactNode;
    progress: string;
    amountOfTasks: number;
    fadeContentOut: boolean;
}

const TasksWrapper: FunctionComponent<TasksWrapperProps> = (props) => {
    const { amountOfTasks } = props;
    const hidingAnimation: SxProps | null = props.fadeContentOut ? { animation: `${fadeSimpleOUT} .24s linear both` } : null;

    const childrenWithWrapper = (
        <>
            <AmountOfTasks quantity={props.amountOfTasks} />
            {props.children}
        </>
    );

    return (
        <TaskWrapperBase className="tasks-wrapper" sx={hidingAnimation as any}>
            {(() => {
                if (props.amountOfTasks > 4) {
                    return (
                        <OverflowScrollDiv
                            maxHeight="406px" //
                        >
                            {childrenWithWrapper}
                        </OverflowScrollDiv>
                    );
                } else if (props.amountOfTasks === 0) {
                    return (
                        <NoRecordWrapper>
                            <BlurOnRoundedIcon />
                            <h2>No tasks</h2>
                            <p>There are no tasks matching given filters</p>
                        </NoRecordWrapper>
                    );
                }
                return (
                    <>
                        {childrenWithWrapper}
                        {renderNTimes({
                            n: 4 - props.amountOfTasks,
                            renderElement: (index) => <GhostRecord key={index} />,
                        })}
                    </>
                );
            })()}
            {/* <p>{formatTextViaBolding(`There ${tasks.length === 1 ? "is" : "are"} currenty: *${tasks.length}* task${tasks.length === 1 ? "" : "s"} to be shown`)}</p> */}
        </TaskWrapperBase>
    );
};

export default TasksWrapper;
