// Tools
import { styled } from "@mui/material";
import { useLabelsContext } from "landing_page/ToDoList/2023/hooks/useLabelsContext";
// Types
import type { FunctionComponent } from "react";
import type { SpecificLabelOnlyFilter } from "landing_page/ToDoList/2023/@types/Filters";
// Styled components
const DistinguishSelectedLabelBase = styled("span")(({ theme }) => ({
    marginTop: "4px",
    strong: {
        color: "#fff",
        background: theme.palette.primary.main,
        padding: "0px 6px",
        borderRadius: "3px",
    },
}));

interface DistinguishSelectedLabelProps {
    labelFilter: SpecificLabelOnlyFilter;
}

const DistinguishSelectedLabel: FunctionComponent<DistinguishSelectedLabelProps> = (props) => {
    const { getLabelWithID } = useLabelsContext();

    const labelName: string | null = getLabelWithID(props.labelFilter)?.name;

    if (labelName === null) return <></>;

    return (
        <DistinguishSelectedLabelBase>
            <span>Label: </span>
            <strong>{labelName}</strong>
        </DistinguishSelectedLabelBase>
    );
};

export default DistinguishSelectedLabel;
