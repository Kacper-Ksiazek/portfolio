// Tools
import { styled } from "@mui/material";
import { CSS_REFERENCES } from "landing_page/ToDoList2/TasksList/SingleTask/css_references";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Styled Components
const LabelsWrapperBase = styled("div", {
    shouldForwardProp: (prop: string): boolean => prop !== "indicateUrgency",
})<{ indicateUrgency: boolean }>(({ theme, ...props }) => ({
    display: "flex",
    gap: "0 !important",

    "&>span:nth-of-type(1)": {
        transition: "margin-right .3s",
        marginRight: props.indicateUrgency ? "6px" : 0,
    },
}));

interface LabelsWrapperProps {
    children: ReactNode;
    indicateUrgency: boolean;
}

const LabelsWrapper: FunctionComponent<LabelsWrapperProps> = (props) => {
    const className: string = `${CSS_REFERENCES.CONTENT.VIEW_MODE.LABELS_WRAPPER} ${CSS_REFERENCES.CONTENT.PIECE_OF_CONTENT_WRAPPER}`;

    return (
        <LabelsWrapperBase className={className} indicateUrgency={props.indicateUrgency}>
            {props.children}
        </LabelsWrapperBase>
    );
};

export default LabelsWrapper;
