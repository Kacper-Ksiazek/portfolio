// Toolc
import { CSS_REFERENCES } from "./css_references";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";

interface SingleReleaseProps {
    tooltip: string;
    disabled: boolean;
    children: ReactNode;

    onClick: () => void;
}

const SingleRelease: FunctionComponent<SingleReleaseProps> = (props) => {
    const tooltip: string = props.disabled === true ? "" : props.tooltip;

    return (
        <Tooltip title={tooltip} placement="top">
            <span className={CSS_REFERENCES.SINGLE_RELEASE_BUTTON}>
                <button onClick={props.onClick} disabled={props.disabled}>
                    {props.children}
                </button>
            </span>
        </Tooltip>
    );
};

export default SingleRelease;
