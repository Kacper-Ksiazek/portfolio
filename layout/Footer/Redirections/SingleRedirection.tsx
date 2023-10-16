// Tools
import { alpha, styled } from "@mui/material";
import { CSS_REFERENCES } from "../css_references";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Other components
import Link from "next/link";
// Styled components
const Redirection = styled("span")(({ theme }) => ({
    fontSize: "14px",
    cursor: "pointer",
    padding: "4px 12px",
    color: alpha("#fff", 0.3),
    transition: "opacity 0.2s ease-in-out",
    a: {
        textDecoration: "none",
        color: "inherit",
    },
    "&:hover": {
        opacity: 1,
    },
}));

interface SingleFooterRedirectionProps {
    path: string;
    tooltip: string;
    children: ReactNode;
}

const SingleFooterRedirection: FunctionComponent<SingleFooterRedirectionProps> = (props) => {
    return (
        <Tooltip placement="top" title={props.tooltip}>
            <Redirection className={CSS_REFERENCES.SINGLE_REDIRECTION}>
                <Link href={props.path}>{props.children}</Link>
            </Redirection>
        </Tooltip>
    );
};

export default SingleFooterRedirection;
