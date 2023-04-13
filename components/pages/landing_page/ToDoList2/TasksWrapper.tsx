// Tools
import { alpha, styled } from "@mui/material";
import { renderNTimes } from "@/utils/client/renderNTimes";
import { fadeSimple } from "../Projects/SingleProjectRow/intro_animations/_keyframes";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
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
    paddingTop: "32px",
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
}));

interface TasksWrapperProps {
    children: ReactNode;
    amountOfTasks: number;
}

const TasksWrapper: FunctionComponent<TasksWrapperProps> = (props) => {
    return (
        <TaskWrapperBase className="tasks-wrapper">
            {(() => {
                if (props.amountOfTasks > 4) {
                    return <OverflowScrollDiv maxHeight="406px">{props.children}</OverflowScrollDiv>;
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
