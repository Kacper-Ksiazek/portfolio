// Tools
import { alpha, styled } from "@mui/material";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { FunctionComponent } from "react";
// Styled components
const AmountOfTasksBase = styled("p")(({ theme }) => ({
    color: alpha("#fff", 0.8),
    boxSizing: "border-box",
    borderRadius: "3px",
    margin: "4px 0 0 0",
    fontSize: "16px",
    userSelect: "none",
}));

interface AmountOfTasksProps {
    id: string;
    quantity: number;
}

const AmountOfTasks: FunctionComponent<AmountOfTasksProps> = ({ quantity, ...props }) => {
    return (
        <AmountOfTasksBase id={props.id}>
            {/*  */}
            {formatTextViaBolding(`There ${quantity === 1 ? "is" : "are"} currenty *${quantity}* task${quantity === 1 ? "" : "s"} to be shown`)}
        </AmountOfTasksBase>
    );
};

export default AmountOfTasks;
