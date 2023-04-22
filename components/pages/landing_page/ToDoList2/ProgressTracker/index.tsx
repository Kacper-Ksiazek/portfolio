// Tools
import { ratio } from "./utils/ratio";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { Task } from "../@types";
import type { FunctionComponent } from "react";
// Other components
import LabelsRatio from "./LabelsRatio";
import SingleLabel from "./LabelsRatio/SingleLabel";
// Styled components
import { Paragraph, FlexWrapper, SectionWrapper } from "./styled_components";

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
                    completion={ratio(props.amountOfAllTasks.completed, props.amountOfAllTasks.inTotal)}
                    width="100%" //
                    description={formatTextViaBolding(`*${props.amountOfAllTasks.completed}* out of *${props.amountOfAllTasks.inTotal}* have been completed so far`)}
                />
            </FlexWrapper>
            <Paragraph>Labels ratio</Paragraph>
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
