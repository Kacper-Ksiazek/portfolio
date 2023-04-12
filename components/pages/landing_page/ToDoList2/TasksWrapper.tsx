// Tools
// Types
import OverflowScrollDiv from "@/components/atoms/content_placement/OverflowScrollDiv";
import type { FunctionComponent, ReactNode } from "react";

interface TasksWrapperProps {
    children: ReactNode;
    amountOfTasks: number;
}

const TasksWrapper: FunctionComponent<TasksWrapperProps> = (props) => {
    return (
        <section className="tasks-wrapper" style={{ minHeight: "376px" }}>
            {/* <p>{formatTextViaBolding(`There ${tasks.length === 1 ? "is" : "are"} currenty: *${tasks.length}* task${tasks.length === 1 ? "" : "s"} to be shown`)}</p> */}
            <OverflowScrollDiv maxHeight="400px">{props.children}</OverflowScrollDiv>
        </section>
    );
};

export default TasksWrapper;
