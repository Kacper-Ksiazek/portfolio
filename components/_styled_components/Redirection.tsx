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
}));

interface RedirectionWrapperProps {
    tooltip?: string;
    children: ReactNode;
}
const RedirectionWrapper: FunctionComponent<RedirectionWrapperProps> = (props) => {
    if (props.tooltip) {
        return (
            <Tooltip title={props.tooltip} placement="top">
                <span style={{ width: "100%" }}>{props.children}</span>
            </Tooltip>
        );
    }
    return <>{props.children}</>;
};

interface RedirectionProps {
    url: string;
    children: ReactNode;
    tooltip?: string;
}

const Redirection: FunctionComponent<RedirectionProps> = (props) => {
    return (
        <RedirectionWrapper tooltip={props.tooltip}>
            <Link href={props.url} passHref>
                <RedirectBase color="primary" className="redirect">
                    {props.children}
                    <KeyboardArrowRight className="right-arrow" />
                </RedirectBase>
            </Link>
        </RedirectionWrapper>
    );
};

export default Redirection;
