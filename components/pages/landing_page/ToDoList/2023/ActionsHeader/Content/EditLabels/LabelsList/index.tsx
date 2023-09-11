// Types
import type { FunctionComponent } from "react";
import type { LabelWithAssociatedCounts } from "landing_page/ToDoList/2023/@types/Counters";
// Other components
import SingleLabel from "./SingleLabel";
import LabelsListWrapper from "./Wrapper";

interface LabelsListWrapperProps {
    labels: LabelWithAssociatedCounts[];
    applyUrgentModeAlternativeAppearance: boolean;
}

const LabelsList: FunctionComponent<LabelsListWrapperProps> = (props) => {
    return (
        <LabelsListWrapper>
            {props.labels.map((item, index) => {
                return (
                    <SingleLabel
                        key={index} //
                        index={index + 1}
                        amountOfTasks={item.amountOfTasks}
                        labelID={item.id}
                        urgentMode={props.applyUrgentModeAlternativeAppearance}
                    />
                );
            })}
        </LabelsListWrapper>
    );
};

export default LabelsList;
