// Tools
import { ratio } from "@/utils/ratio";
import { alpha, styled } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
import type { SingleTaskCounts } from "../../../@types";
import type { ColorInHEX } from "landing_page/ToDoList2/context/LabelsContext/@types";
// Other components
import { ProgressBar } from "landing_page/ToDoList2/atoms/ProgressBar";
// Material UI Icons
import Close from "@mui/icons-material/Close";
// Styled components
const ProgressWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    span: {
        color: alpha("#fff", 0.8),
    },
    p: {
        textAlign: "right",
        width: "170px",
        margin: "0 0 0 12px",
        strong: {
            marginRight: "8px",
        },
    },
}));

const ThereAreNoTasks = styled("span")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    userSelect: "none",
    transform: "translateX(-4px)",
    svg: {
        marginRight: "4px",
    },
}));

interface ProgressProps {
    color: ColorInHEX;
    amountOfTasks: SingleTaskCounts;
}

const Progress: FunctionComponent<ProgressProps> = (props) => {
    const { amountOfTasks } = props;
    const completion = ratio(amountOfTasks.completed, amountOfTasks.inTotal);

    const thereAreNoTasksWithThisLabel: boolean = props.amountOfTasks.inTotal === 0;

    return (
        <ProgressWrapper>
            {(() => {
                if (thereAreNoTasksWithThisLabel) {
                    return (
                        <ThereAreNoTasks>
                            <Close />
                            <span>There are no tasks associated with this label</span>
                        </ThereAreNoTasks>
                    );
                }
                return (
                    <>
                        <ProgressBar
                            completion={completion} //
                            labelColor={props.color}
                        />
                        <p>
                            <strong>{`${amountOfTasks.completed} / ${amountOfTasks.inTotal}`}</strong>
                            <span>completed</span>
                        </p>
                    </>
                );
            })()}
        </ProgressWrapper>
    );
};

export default Progress;
