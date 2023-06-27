// Tools
import { ratio } from "@/utils/ratio";
import { alpha, styled } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
import type { TaskCounts, ColorInHEX } from "landing_page/ToDoList2/@types";
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
        width: "132px",
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
    amountOfTasks: TaskCounts;
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
                            sx={{
                                width: "auto",
                                flexGrow: 1,
                            }}
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
