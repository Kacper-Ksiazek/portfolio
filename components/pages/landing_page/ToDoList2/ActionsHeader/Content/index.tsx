// Tools
import { styled } from "@mui/material";
// Types
import type { Stage } from "../@types";
import type { FunctionComponent } from "react";
// Other components
import AddNewTask from "./AddNewTask";
import ProgressTracker from "./ProgressTracker";
import { fadeSimple } from "@/components/keyframes/intro";
import { fadeSimpleOUT } from "@/components/keyframes/outro";

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
    return (
        <Wrapper className={props.isStageChanging ? "is-changing" : ""}>
            {(() => {
                switch (props.currentStage) {
                    case "ADD_NEW_TASK":
                        return <AddNewTask />;
                    case "EDIT_LABELS":
                        return <></>;
                    case "PROGRESS_TRACKER":
                        return <ProgressTracker />;
                }
            })()}
        </Wrapper>
    );
};

export default ToDoListActionsContent;
