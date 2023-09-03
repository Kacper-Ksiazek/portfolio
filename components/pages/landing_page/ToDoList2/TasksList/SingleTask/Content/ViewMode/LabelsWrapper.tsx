// Tools
import { styled } from "@mui/material";
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
    return <LabelsWrapperBase indicateUrgency={props.indicateUrgency}>{props.children}</LabelsWrapperBase>;
};

export default LabelsWrapper;
