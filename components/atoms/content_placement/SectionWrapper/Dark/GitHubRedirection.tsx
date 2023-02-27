// Tools
import { useState } from "react";
import { styled, keyframes } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Material UI Icons
import ArrowForward from "@mui/icons-material/ArrowForward";
// Styled components
const GitHubRedirectionBase = styled("span")(({ theme }) => ({
    marginTop: "32px",
    position: "relative",
    zIndex: 10,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    "svg.github-icon": {
        opacity: 0.3,
        fontSize: "32px",
        color: "#fff",
        transition: "transform .3s, opacity .3s",
        margin: "0 8px",
    },
    "&.is-hovered": {
        "svg.github-icon": {
            transform: "scale(1.1)",
            opacity: 1,
        },
        "span.bar": {
            width: "64px",
            opacity: 0.5,
        },
        "svg.redirect-icon": {
            opacity: 0.5,
            transition: "opacity .25s .3s linear",
            animation: `${keyframes({
                from: {
                    transform: "translateX(0)",
                    opacity: 0.5,
                },
                to: {
                    transform: "translateX(2px)",
                    opacity: 0.6,
                },
            })} .5s .3s alternate infinite both`,
        },
    },
    "span.bar": {
        width: "32px",
        height: "3px",
        background: "#fff",
        opacity: 0.1,
        borderRadius: "1px",
        transition: "width .3s, opacity .3s",
        overflow: "hidden",
        "&:nth-of-type(1)": {
            marginLeft: "44px",
        },
    },
    "svg.redirect-icon": {
        fontSize: "32px",
        opacity: 0,
    },
}));

interface GitHubRedirectionProps {
    href: string;
}

const GitHubRedirection: FunctionComponent<GitHubRedirectionProps> = (props) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const onBlur = () => setIsHovered(false);
    const onHover = () => setIsHovered(true);

    return (
        <GitHubRedirectionBase
            className={[
                "dark-content-wrapper-github-redirection", //
                isHovered ? "is-hovered" : "",
            ].join(" ")} //
        >
            <span className="bar" />
            <Tooltip title="Inspect code on github" placement="top">
                <a
                    href={props.href} //
                    target="_blank"
                    rel="noreferrer"
                    onMouseOver={onHover}
                    onMouseLeave={onBlur}
                >
                    <GitHubIcon className="github-icon" />
                </a>
            </Tooltip>
            <span className="bar" />
            <ArrowForward className="redirect-icon" />
        </GitHubRedirectionBase>
    );
};

export default GitHubRedirection;
