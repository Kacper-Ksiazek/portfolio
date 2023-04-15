// Tools
import { alpha, styled } from "@mui/material";
import { fadeSimple } from "@keyframes/intro/fade";
import { renderNTimes } from "@/utils/client/renderNTimes";
// Types
import type { SxProps } from "@/@types/MUI";
import type { FunctionComponent, ReactNode } from "react";
// Other components
import OverflowScrollDiv from "@/components/atoms/content_placement/OverflowScrollDiv";
// Material UI Icons
import BlurOnRoundedIcon from "@mui/icons-material/BlurOnRounded";
import { fadeSimpleOUT } from "@/components/keyframes/outro";
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
    p: {
        color: alpha("#fff", 0.8),
        margin: 0,
        fontSize: "20px",
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
    amountOfTasks: number;
    fadeContentOut: boolean;
}

const TasksWrapper: FunctionComponent<TasksWrapperProps> = (props) => {
    const hidingAnimation: SxProps | null = props.fadeContentOut ? { animation: `${fadeSimpleOUT} .24s linear both` } : null;

    return (
        <TaskWrapperBase className="tasks-wrapper">
            {(() => {
                if (props.amountOfTasks > 4) {
                    return (
                        <OverflowScrollDiv
                            maxHeight="406px" //
                            sx={hidingAnimation as any}
                        >
                            {props.children}
                        </OverflowScrollDiv>
                    );
                } else if (props.amountOfTasks === 0) {
                    return (
                        <NoRecordWrapper sx={hidingAnimation as any}>
                            <BlurOnRoundedIcon />
                            <h2>No tasks</h2>
                            <p>There are no tasks matching given filters</p>
                        </NoRecordWrapper>
                    );
                }
                return (
                    <>
                        {props.children}
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
