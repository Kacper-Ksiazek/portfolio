// Tools
import { useEditModeContext } from "../hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
import type { LabelID } from "../../context/LabelsContext/@types";
// Other components
import Description from "./Description";
import LabelsAndDueTime from "./LabelsAndDueTime";
import FlexBox from "@/components/atoms/content_placement/FlexBox";

interface ContentProps {
    description: string;
    isUrgent: boolean;
    labelID: LabelID;
    dueDate: string | null;
}

const Content: FunctionComponent<ContentProps> = (props) => {
    const editModeContext = useEditModeContext();

    return (
        <FlexBox column horizontal="start" sx={{ width: "100%", marginRight: "16px" }}>
            <Description
                description={props.description} //
                isInEditMode={editModeContext.isOpened}
                newValue={editModeContext.newState.description}
                updateNewValue={(val) => editModeContext.updateNewState({ description: val })}
            />

            <LabelsAndDueTime
                isUrgent={props.isUrgent} //
                labelID={props.labelID}
                dueDate={props.dueDate}
            />
        </FlexBox>
    );
};

export default Content;
