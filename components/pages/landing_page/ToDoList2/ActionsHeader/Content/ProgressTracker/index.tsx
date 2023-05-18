// Tools
import { useMemo } from "react";
import { useTasksListContext } from "landing_page/ToDoList2/hooks";
// Types
import type { FunctionComponent } from "react";
import type { TasksCounter } from "landing_page/ToDoList2/ActionsHeader/@types";
// Other components
import LabelsRatio from "./LabelsRatio";
import SingleLabel from "./LabelsRatio/SingleLabel";
// Styled components
import { FlexWrapper } from "./styled_components";
import { Paragraph } from "landing_page/ToDoList2/atoms";
import FlexBox from "@/components/atoms/content_placement/FlexBox";

interface ProgressTrackerProps {
    counter: TasksCounter;
}

const ProgressTracker: FunctionComponent<ProgressTrackerProps> = (props) => {
    const { tasks } = useTasksListContext();

    const amountOfAllTasks: number = tasks.length;

    const amountOfCompletedTasks = useMemo<number>(() => {
        return tasks.filter((el) => el.isCompleted).length;
    }, [tasks]);

    return (
        <>
            <FlexBox column sx={{ width: "100%" }}>
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
            </FlexBox>

            <FlexBox column sx={{ width: "100%" }}>
                <Paragraph>Labels ratio</Paragraph>
                <FlexWrapper>
                    <LabelsRatio
                        counter={props.counter} //
                        amountOfTasksInTotal={tasks.length}
                    />
                </FlexWrapper>
            </FlexBox>
        </>
    );
};

export default ProgressTracker;
