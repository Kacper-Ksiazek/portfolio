// Tools
import { useMemo } from "react";
import { useTasksListContext } from "landing_page/ToDoList/2023/hooks";
// Types
import type { FunctionComponent } from "react";
// Other components
import LabelsRatio from "./LabelsRatio";
import SingleLabel from "./LabelsRatio/SingleLabel";
// Styled components
import FlexBox from "@/components/atoms/content_placement/FlexBox";
import { ProgressTrackerBase, StyledFlexWrapper } from "./styled_components";
import Header from "@/components/pages/landing_page/ToDoList/2023/atoms/Header";

const ProgressTracker: FunctionComponent = () => {
    const { tasks } = useTasksListContext();

    const amountOfAllTasks: number = tasks.length;

    const amountOfCompletedTasks = useMemo<number>(() => {
        return tasks.filter((el) => el.isCompleted).length;
    }, [tasks]);

    return (
        <>
            <FlexBox column sx={{ width: "100%" }}>
                <Header>General completion</Header>
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

                <Header>Labels ratio</Header>

                <ProgressTrackerBase>
                    <LabelsRatio amountOfTasksInTotal={tasks.length} />
                </ProgressTrackerBase>
            </FlexBox>
        </>
    );
};

export default ProgressTracker;
