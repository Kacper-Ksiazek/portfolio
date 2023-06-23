// Tools
import { alpha, styled } from "@mui/material";
import { CLASSES } from "landing_page/ToDoList2/css_references";
// Types
import type { FunctionComponent } from "react";
import type { LabelID } from "landing_page/ToDoList2/@types";
// Other components
import Label from "./Label";
import FlexBox from "@/components/atoms/content_placement/FlexBox";
// Styled components
const DueTo = styled("span")(({ theme }) => ({
    marginLeft: "6px",
    display: "flex",
    alignItems: "center",
    color: alpha("#fff", 0.7),
    fontSize: "16px",
    transition: "opacity .3s",
    strong: {
        marginLeft: "4px",
    },
}));

interface DefaultModeProps {
    labelID: LabelID;
    isUrgent: boolean;
    dueDate: string | null;
}

const DefaultMode: FunctionComponent<DefaultModeProps> = (props) => {
    return (
        <FlexBox className={CLASSES.SINGLE_TASK.LABELS_WRAPPER}>
            <Label indicateUrgency={props.isUrgent} />
            <Label labelID={props.labelID} isTaskUrgent={props.isUrgent} />

            {props.dueDate !== null && (
                <DueTo className={CLASSES.SINGLE_TASK.DUE_DATE}>
                    Due to <strong>{props.dueDate}</strong>
                </DueTo>
            )}
        </FlexBox>
    );
};

export default DefaultMode;
