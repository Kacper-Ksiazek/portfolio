// Types
import type { Task } from "../@types";
import type { FunctionComponent } from "react";
// Other components
import LabelsRatio from "./LabelsRatio";
import SingleLabel from "./LabelsRatio/SingleLabel";
// Styled components
import { FlexWrapper } from "./styled_components";
import { SectionWrapper, Paragraph } from "../atoms";

interface ProgressBarsProps {
    filteredTasks: Task[];
    amountOfAllTasks: {
        inTotal: number;
        completed: number;
    };
}

const ProgressBars: FunctionComponent<ProgressBarsProps> = (props) => {
    return (
        <SectionWrapper>
            <Paragraph>General completion</Paragraph>
            <FlexWrapper>
                <SingleLabel
                    progress={{
                        ...props.amountOfAllTasks,
                        extensiveDescription: true,
                    }}
                    width="100%" //
                />
            </FlexWrapper>

            <Paragraph sx={{ margin: "16px 0 0 0" }}>Labels ratio</Paragraph>

            <FlexWrapper>
                <LabelsRatio
                    tasks={props.filteredTasks} //
                    amountOfTasksInTotal={props.filteredTasks.length}
                />
            </FlexWrapper>
        </SectionWrapper>
    );
};

export default ProgressBars;
