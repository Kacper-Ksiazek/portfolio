// Tools
import { styled } from "@mui/material";
import { useTasksCounter } from "./hooks/useTasksCounter";
import { fadeSimple } from "@/components/keyframes/intro";
import { fadeSimpleOUT } from "@/components/keyframes/outro";
// Types
import type { Stage } from "../@types";
import type { FunctionComponent } from "react";
// Other components
import EditLabels from "./EditLabels";
import AddNewTask from "./AddNewTask";
import ProgressTracker from "./ProgressTracker";

const Wrapper = styled("div")(({ theme }) => ({
    flexGrow: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    animation: `${fadeSimple} .16s both linear`,
    "&>*": {
        position: "relative",
        margin: "8px 0 0 0 !important",
    },
    "&.is-changing": {
        animation: `${fadeSimpleOUT} .3s both linear`,
    },
}));

interface ToDoListActionsContentProps {
    currentStage: Stage;
    isStageChanging: boolean;
}

const ToDoListActionsContent: FunctionComponent<ToDoListActionsContentProps> = (props) => {
    const { countTasksWithLabel, counter } = useTasksCounter();

    return (
        <Wrapper className={props.isStageChanging ? "is-changing" : ""}>
            {(() => {
                switch (props.currentStage) {
                    case "ADD_NEW_TASK":
                        return <AddNewTask />;
                    case "EDIT_LABELS":
                        return <EditLabels counter={counter} />;
                    case "PROGRESS_TRACKER":
                        return <ProgressTracker counter={counter} />;
                }
            })()}
        </Wrapper>
    );
};

export default ToDoListActionsContent;
