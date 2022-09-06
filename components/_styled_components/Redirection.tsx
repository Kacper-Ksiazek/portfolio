// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Material UI Icons
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// Other components
import Link from "next/Link";
// Styled components
import StyledButton from "@/components/_styled_components/forms/StyledButton";

const RedirectBase = styled(StyledButton)(({ theme }) => ({
    fontFamily: "Montserrat Alternates",
    fontSize: "16px",
    padding: "2px 24px",
    boxSizing: "border-box",
    "svg.right-arrow": {
        marginLeft: "4px",
    },
    ["@media (max-width:500px)"]: {
        margin: 0,
        width: "100%",
    },

    "&.small": {
        fontSize: "14px",
        padding: "4px 16px",
        "svg.right-arrow": {
            fontSize: "16px",
        },
        ["@media (max-width:500px)"]: {
            fontSize: "16px",
            padding: "2px 24px",
        },
    },
}));

const TooltipChildrenWrapper = styled("span")(({ theme }) => ({
    ["@media (max-width:500px)"]: {
        width: "100%",
    },
}));

interface RedirectionWrapperProps {
    tooltip?: string;
    children: ReactNode;
}
const RedirectionWrapper: FunctionComponent<RedirectionWrapperProps> = (props) => {
    if (props.tooltip) {
        return (
            <Tooltip title={props.tooltip} placement="top">
                <TooltipChildrenWrapper>{props.children}</TooltipChildrenWrapper>
            </Tooltip>
        );
    }
    return <>{props.children}</>;
};

interface RedirectionProps {
    url: string;
    small?: boolean;
    tooltip?: string;
    children: ReactNode;
    className?: string;
}

const Redirection: FunctionComponent<RedirectionProps> = (props) => {
    return (
        <RedirectionWrapper tooltip={props.tooltip}>
            <Link href={props.url} passHref>
                <RedirectBase
                    color="primary" //
                    className={[props.small ? "small" : "", "redirect", props.className].join(" ")}
                >
                    {props.children}
                    <KeyboardArrowRight className="right-arrow" />
                </RedirectBase>
            </Link>
        </RedirectionWrapper>
    );
};

export default Redirection;
