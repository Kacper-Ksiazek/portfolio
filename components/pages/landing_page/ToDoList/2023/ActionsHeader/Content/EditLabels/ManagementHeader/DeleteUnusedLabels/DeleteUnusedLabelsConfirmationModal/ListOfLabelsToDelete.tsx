// Tools
import { useLabelsContext } from "landing_page/ToDoList/2023/hooks/useLabelsContext";
// Types
import type { FunctionComponent } from "react";
import type { LabelID } from "landing_page/ToDoList/2023/@types/Labels";
// Other components
import Label from "landing_page/ToDoList/2023/atoms/LabelBase";
// Styled components
import FlexBox from "@/components/atoms/content_placement/FlexBox";

interface LabelsToDeleteListProps {
    idsOfLabelsToBeDeleted: LabelID[];
}

const LabelsToDeleteList: FunctionComponent<LabelsToDeleteListProps> = (props) => {
    const { getLabelWithID } = useLabelsContext();

    return (
        <FlexBox
            sx={{
                flexWrap: "wrap", //
                marginTop: "12px",
                "&>*": {
                    margin: "4px",
                },
            }}
            center
        >
            {props.idsOfLabelsToBeDeleted.map((ID: LabelID) => {
                const label = getLabelWithID(ID);

                return (
                    <Label color={label.color} key={ID}>
                        {label.name}
                    </Label>
                );
            })}
        </FlexBox>
    );
};

export default LabelsToDeleteList;
