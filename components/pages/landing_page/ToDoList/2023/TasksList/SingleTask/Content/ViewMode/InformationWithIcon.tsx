// Tools
import { styled, alpha } from "@mui/material";
import { VIEW_MODE_CSS_REFERENCES } from "../../css_references";
// Types
import type { FunctionComponent, ReactNode } from "react";

interface InformationWithIconProps {
    icon: ReactNode;
    info: string | null;
}

const InformationWithIconBase = styled("span")(({ theme }) => ({
    display: "flex",
    color: alpha("#fff", 0.7),
    fontSize: "16px",
    transition: "opacity .3s",
    boxSizing: "border-box",
    paddingTop: "2px",
    userSelect: "none",
    // border: "2px solid",
    // borderColor: theme.palette.error.main,
    // color: theme.palette.error.main,
    // padding: "0 6px",

    strong: {
        marginLeft: "4px",
    },
    "span.text": {
        marginTop: "1px",
    },
    svg: {
        marginRight: "2px",
    },
}));

const InformationWithIcon: FunctionComponent<InformationWithIconProps> = (props) => {
    if (props.info === null) return <></>;

    return (
        <InformationWithIconBase className={VIEW_MODE_CSS_REFERENCES.INFORMATION_WITH_ICON}>
            {props.icon}
            <span className="text">{props.info}</span>
        </InformationWithIconBase>
    );
};

export default InformationWithIcon;
