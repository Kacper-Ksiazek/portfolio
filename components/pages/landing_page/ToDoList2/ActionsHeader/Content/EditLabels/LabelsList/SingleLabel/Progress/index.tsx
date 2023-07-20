// Tools
import { ratio } from "@/utils/ratio";
import { CSS_REFERENCES } from "./css_references";
// Types
import type { FunctionComponent, HTMLAttributes } from "react";
import type { TaskCounts, ColorInHEX } from "landing_page/ToDoList2/@types";
// Other components
import { ProgressBar } from "landing_page/ToDoList2/atoms/ProgressBar";
// Material UI Icons
import Close from "@mui/icons-material/Close";
// Styled components
import { ProgressWrapper, ThereAreNoTasks } from "./styled_components";

interface ProgressProps {
    color: ColorInHEX;
    amountOfTasks: TaskCounts;
    wrapperProps?: HTMLAttributes<HTMLDivElement>;
}

const Progress: FunctionComponent<ProgressProps> = (props) => {
    const { amountOfTasks } = props;
    const completion = ratio(amountOfTasks.completed, amountOfTasks.inTotal);

    const thereAreNoTasksWithThisLabel: boolean = props.amountOfTasks.inTotal === 0;

    return (
        <ProgressWrapper {...props.wrapperProps}>
            {(() => {
                if (thereAreNoTasksWithThisLabel) {
                    return (
                        <ThereAreNoTasks className={CSS_REFERENCES.THERE_ARE_NO_TASK}>
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
                            className={CSS_REFERENCES.PROGRESS_BAR}
                            sx={{
                                width: "auto",
                                flexGrow: 1,
                            }}
                        />
                        <p className={CSS_REFERENCES.COMPLETION_TRACKER}>
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
