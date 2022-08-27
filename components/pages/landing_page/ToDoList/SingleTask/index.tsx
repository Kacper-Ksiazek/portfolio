// Tools
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import Delete from "@mui/icons-material/Delete";
import Settings from "@mui/icons-material/Settings";
// Other components
const EditMode = dynamic(() => import("./EditMode"));
import TaskManagementButton from "./TaskManagementButton";
const DeleteTaskConfirmation = dynamic(() => import("./DeleteTaskConfirmation"));
// Styled components
import TaskIndex from "./styled_components/TaskIndex";
import SingleTaskBase from "./styled_components/SingleTaskBase";

interface SingleTaskProps {
    task: string;
    index: number;
    freshlyCreated: boolean;
    deleteThisTask: () => void;
    showIntroAnimation: boolean;
    modifyThisTask: (value: string) => void;
}

const SingleTask: FunctionComponent<SingleTaskProps> = (props) => {
    const [classAppliedToWrapper, setClassAppliedToWrapper] = useState<"deleting" | "freshlyCreated" | "">(props.freshlyCreated ? "freshlyCreated" : "");
    const [displayEditMode, setDisplayEditMode] = useState<boolean>(false);
    const [displayDeletionConfirmation, setDisplayDeletionConfirmation] = useState<boolean>(false);

    const handleDeletion = () => {
        setClassAppliedToWrapper("deleting");
        setTimeout(() => {
            props.deleteThisTask();
        }, 650);
    };

    const handleModification = (vaLue: string) => {
        props.modifyThisTask(vaLue);
    };

    useEffect(() => {
        if (classAppliedToWrapper === "freshlyCreated") {
            setTimeout(() => {
                setClassAppliedToWrapper("");
            }, 700);
        }
    }, [classAppliedToWrapper]);

    return (
        <SingleTaskBase
            className={[
                props.showIntroAnimation ? "show-intro-animation" : "", //
                classAppliedToWrapper,
                "single-task",
            ].join(" ")} //
        >
            <TaskIndex className="index">{props.index + 1}</TaskIndex>
            <span className="text">{props.task}</span>

            <TaskManagementButton
                tooltip="Modify" //
                icon={<Settings />}
                onClick={() => setDisplayEditMode(true)}
            />

            <TaskManagementButton
                tooltip="Delete" //
                icon={<Delete />}
                onClick={() => setDisplayDeletionConfirmation(true)}
            />

            {displayEditMode && (
                <EditMode
                    currentTask={props.task} //
                    exitEditMode={() => setDisplayEditMode(false)}
                    handleModification={handleModification}
                />
            )}

            {displayDeletionConfirmation && (
                <DeleteTaskConfirmation
                    handleDelete={handleDeletion} //
                    closeDeletionConfirmation={() => setDisplayDeletionConfirmation(false)}
                />
            )}
        </SingleTaskBase>
    );
};

export default SingleTask;
