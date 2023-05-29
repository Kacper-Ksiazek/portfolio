// Tools
import { useEditModeContext } from "../../hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
import type { LabelID } from "landing_page/ToDoList2/@types";
// Other components
import SmoothConditionalRender from "@/components/utils/SmoothConditionalRender";
// Styled components
import EditMode from "./EditMode";
import DefaultMode from "./DefaultMode";
import LabelsAndDueTimeBase from "./Wrapper";

interface LabelsAndDueTimeProps {
    labelID: LabelID;
    isUrgent: boolean;
    dueDate: string | null;
}

const LabelsAndDueTime: FunctionComponent<LabelsAndDueTimeProps> = (props) => {
    const editModeContext = useEditModeContext();

    return (
        <LabelsAndDueTimeBase>
            <SmoothConditionalRender when={!editModeContext.isOpened}>
                <DefaultMode
                    labelID={props.labelID} //
                    dueDate={props.dueDate}
                    isUrgent={props.isUrgent}
                />
            </SmoothConditionalRender>

            <SmoothConditionalRender when={editModeContext.isOpened}>
                <EditMode />
            </SmoothConditionalRender>
        </LabelsAndDueTimeBase>
    );
};

export default LabelsAndDueTime;
