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
const DeleteTaskConfirmation = dynamic(() => import("./DeleteTaskConfirmation"));
// Styled components
import StyledButton from "../_styled_components/StyledButton";
import SingleTaskBase from "../_styled_components/SingleTaskBase";

interface SingleTaskProps {
    task: string;
    index: number;
    freshlyCreated: boolean;
    deleteThisTask: () => void;
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
        <SingleTaskBase className={`${classAppliedToWrapper} single-task`}>
            <span className="index">{props.index + 1}</span>
            <span className="text">{props.task}</span>
            <StyledButton onClick={() => setDisplayEditMode(true)}>
                <Settings />
            </StyledButton>
            <StyledButton onClick={() => setDisplayDeletionConfirmation(true)}>
                <Delete />
            </StyledButton>

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
