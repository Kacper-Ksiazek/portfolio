// Tools
import { useMemo } from "react";
import { useTasksListContext } from "landing_page/ToDoList2/hooks";
// Types
import type { FunctionComponent } from "react";
// Other components
import LabelsRatio from "./LabelsRatio";
import SingleLabel from "./LabelsRatio/SingleLabel";
// Styled components
import { Paragraph } from "landing_page/ToDoList2/atoms";
import FlexBox from "@/components/atoms/content_placement/FlexBox";
import { ProgressTrackerBase, StyledFlexWrapper } from "./styled_components";

const ProgressTracker: FunctionComponent = () => {
    const { tasks } = useTasksListContext();

    const amountOfAllTasks: number = tasks.length;

    const amountOfCompletedTasks = useMemo<number>(() => {
        return tasks.filter((el) => el.isCompleted).length;
    }, [tasks]);

    return (
        <>
            <FlexBox column sx={{ width: "100%" }}>
                <Paragraph>General completion</Paragraph>
                <StyledFlexWrapper>
                    <SingleLabel
                        progress={{
                            completed: amountOfCompletedTasks,
                            inTotal: amountOfAllTasks,
                            extensiveDescription: true,
                        }}
                        width="100%" //
                    />
                </StyledFlexWrapper>
            </FlexBox>

            <FlexBox column sx={{ width: "100%" }}>
                <Paragraph>Labels ratio</Paragraph>

                <ProgressTrackerBase>
                    <LabelsRatio amountOfTasksInTotal={tasks.length} />
                </ProgressTrackerBase>
            </FlexBox>
        </>
    );
};

export default ProgressTracker;
