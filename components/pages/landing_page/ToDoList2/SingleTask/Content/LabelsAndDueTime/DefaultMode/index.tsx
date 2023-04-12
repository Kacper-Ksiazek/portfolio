// Tools
import { alpha, styled } from "@mui/material";
import { CLASSES } from "landing_page/ToDoList2/css_references";
// Types
import type { FunctionComponent } from "react";
// Other components
import Label from "./Label";
import FlexBox from "@/components/atoms/content_placement/FlexBox";
// Styled components
const DueTo = styled("span")(({ theme }) => ({
    marginLeft: "6px",
    display: "flex",
    alignItems: "center",
    color: alpha(theme.palette.text.primary, 0.7),
    fontSize: "16px",
    strong: {
        marginLeft: "4px",
    },
}));

interface DefaultModeProps {
    label: string;
    isUrgent: boolean;
    dueDate: string | null;
}

const DefaultMode: FunctionComponent<DefaultModeProps> = (props) => {
    return (
        <FlexBox className={CLASSES.SINGLE_TASK.LABELS_WRAPPER}>
            <Label indicateUrgency={props.isUrgent} />
            <Label label={props.label} isTaskUrgent={props.isUrgent} />

            {props.dueDate !== null && (
                <DueTo>
                    Due to <strong>{props.dueDate}</strong>
                </DueTo>
            )}
        </FlexBox>
    );
};

export default DefaultMode;
