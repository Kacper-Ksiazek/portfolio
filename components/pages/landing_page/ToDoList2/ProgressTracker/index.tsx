// Tools
import { useMemo } from "react";
import { useTasksListContext } from "../hooks/useTaskListContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import LabelsRatio from "./LabelsRatio";
import SingleLabel from "./LabelsRatio/SingleLabel";
// Styled components
import { FlexWrapper } from "./styled_components";
import { SectionWrapper, Paragraph } from "../atoms";

const ProgressBars: FunctionComponent = (props) => {
    const { tasks } = useTasksListContext();

    const amountOfAllTasks: number = tasks.length;

    const amountOfCompletedTasks = useMemo<number>(() => {
        return tasks.filter((el) => el.isCompleted).length;
    }, [tasks]);

    return (
        <SectionWrapper>
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
        </SectionWrapper>
    );
};

export default ProgressBars;
