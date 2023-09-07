// Tools
import { styled } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
import { fadeSimpleOUT } from "@/components/keyframes/outro";
// Types
import type { FunctionComponent } from "react";
import type { ActionHeaderSection } from "landing_page/ToDoList/2023/ActionsHeader/@types";
// Other components
import EditLabels from "./EditLabels";
import AddNewTask from "./AddNewTask";
import ProgressTracker from "./ProgressTracker";
import { TasksCounterContextProvider } from "./context/TaskCounterContext";

const Wrapper = styled("div")(({ theme }) => ({
    flexGrow: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    animation: `${fadeSimple} .16s both linear`,
    width: "100%",
    "&>*": {
        position: "relative",
        margin: "8px 0 0 0 !important",
    },
    "&.is-changing": {
        animation: `${fadeSimpleOUT} .3s both linear`,
    },
}));

interface ToDoListActionsContentProps {
    currentStage: ActionHeaderSection;
    isStageChanging: boolean;

    foldActionsHeaderPanel: () => void;
}

const ToDoListActionsContent: FunctionComponent<ToDoListActionsContentProps> = (props) => {
    return (
        <TasksCounterContextProvider>
            <Wrapper className={props.isStageChanging ? "is-changing" : ""}>
                {(() => {
                    switch (props.currentStage) {
                        case "ADD_NEW_TASK":
                            return <AddNewTask foldActionsHeaderPanel={props.foldActionsHeaderPanel} />;
                        case "EDIT_LABELS":
                            return <EditLabels />;
                        case "PROGRESS_TRACKER":
                            return <ProgressTracker />;
                    }
                })()}
            </Wrapper>
        </TasksCounterContextProvider>
    );
};

export default ToDoListActionsContent;
