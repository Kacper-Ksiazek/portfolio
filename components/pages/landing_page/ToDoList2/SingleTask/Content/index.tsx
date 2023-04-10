// Tools
import { useEditModeContext } from "../hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import LabelsAndDueTime from "./LabelsAndDueTime";
import Description from "./Description";
import FlexBox from "@/components/atoms/content_placement/FlexBox";

interface ContentProps {
    description: string;
    isUrgent: boolean;
    label: string;
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
                label={props.label}
            />
        </FlexBox>
    );
};

export default Content;
