// Tools
import { CLASSES } from "../css_references";
import { alpha, styled } from "@mui/material";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { FunctionComponent } from "react";
// Styled components
const AmountOfTasksBase = styled("p")(({ theme }) => ({
    color: alpha("#fff", 0.8),
    boxSizing: "border-box",
    borderRadius: "3px",
    margin: "8px 0 0 0",
    fontSize: "16px",
    userSelect: "none",
}));

interface AmountOfTasksProps {
    quantity: number;
}

const AmountOfTasks: FunctionComponent<AmountOfTasksProps> = ({ quantity }) => {
    return (
        <AmountOfTasksBase className={CLASSES.AMOUNT_OF_TASKS}>
            {/*  */}
            {formatTextViaBolding(`There ${quantity === 1 ? "is" : "are"} currenty *${quantity}* task${quantity === 1 ? "" : "s"} to be shown`)}
        </AmountOfTasksBase>
    );
};

export default AmountOfTasks;
