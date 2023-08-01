// Tools
import { styled } from "@mui/material";
import { CSS_REFERENCES } from "landing_page/ToDoList2/TasksList/SingleTask/css_references";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Styled Components
const LabelsWrapperBase = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "0 !important",
}));

const LabelsWrapper: FunctionComponent<{ children: ReactNode }> = (props) => {
    const className: string = `${CSS_REFERENCES.VIEW_MODE.LABELS_WRAPPER} ${CSS_REFERENCES.SMALL_CONTENT_WRAPPER}`;

    return (
        <LabelsWrapperBase className={className}>
            {props.children}
            {/*  */}
        </LabelsWrapperBase>
    );
};

export default LabelsWrapper;
