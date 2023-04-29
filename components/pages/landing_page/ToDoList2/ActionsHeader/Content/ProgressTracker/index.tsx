// Tools
import { useMemo } from "react";
import { useTasksListContext } from "landing_page/ToDoList2/hooks";
// Types
import type { FunctionComponent } from "react";
// Other components
import LabelsRatio from "./LabelsRatio";
import SingleLabel from "./LabelsRatio/SingleLabel";
// Styled components
import { FlexWrapper } from "./styled_components";
import { Paragraph } from "landing_page/ToDoList2/atoms";

const ProgressTracker: FunctionComponent = () => {
    const { tasks } = useTasksListContext();

    const amountOfAllTasks: number = tasks.length;

    const amountOfCompletedTasks = useMemo<number>(() => {
        return tasks.filter((el) => el.isCompleted).length;
    }, [tasks]);

    return (
        <>
            <Paragraph>General completion</Paragraph>
            <FlexWrapper>
                <SingleLabel
                    progress={{
                        completed: amountOfCompletedTasks,
                        inTotal: amountOfAllTasks,
                        extensiveDescription: true,
                    }}
                    width="100%" //
                />
            </FlexWrapper>
            <Paragraph sx={{ margin: "16px 0 0 0" }}>Labels ratio</Paragraph>
            <FlexWrapper>
                <LabelsRatio
                    tasks={tasks} //
                    amountOfTasksInTotal={tasks.length}
                />
            </FlexWrapper>
        </>
    );
};

export default ProgressTracker;
