// Tools
import { CSS_REFERENCES } from "./css_references";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";

interface _SimpleExternalRedirectionProps {
    url: string;
    icon: ReactNode;
    tooltip: string;
}

const _SimpleExternalRedirection: FunctionComponent<_SimpleExternalRedirectionProps> = (props) => {
    return (
        <Tooltip title={props.tooltip} placement="top">
            <span className={CSS_REFERENCES.SOCIAL_MEDIA_ICON}>
                <a href={props.url} target="_blank" rel="noreferrer">
                    {props.icon}
                </a>
            </span>
        </Tooltip>
    );
};

export default _SimpleExternalRedirection;
