// Tools
import { alpha, styled } from "@mui/material";
import { CLASSES } from "./css_references";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
import { fadeSimpleOUT } from "@keyframes/outro/fade";
// Types
import type { FunctionComponent } from "react";
// Styled components
const AmountOfTasksBase = styled("p")(({ theme }) => ({
    color: alpha("#fff", 0.8),
    margin: "0 0 16px 0",
    fontSize: "18px",
    "&.hide": {
        animation: `${fadeSimpleOUT} .3s linear both`,
    },
}));

interface AmountOfTasksProps {
    quantity: number;
}

const AmountOfTasks: FunctionComponent<AmountOfTasksProps> = ({ quantity }) => {
    return (
        <AmountOfTasksBase className={`${CLASSES.AMOUNT_OF_TASKS} ${quantity === 0 ? "hide" : ""}`}>
            {/*  */}
            {formatTextViaBolding(`There ${quantity === 1 ? "is" : "are"} currenty: *${quantity}* task${quantity === 1 ? "" : "s"} to be shown`)}
        </AmountOfTasksBase>
    );
};

export default AmountOfTasks;
