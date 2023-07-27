// Tools
import { styled, alpha } from "@mui/material";
// Types
import type { FunctionComponent, ReactNode } from "react";
import { CSS_REFERENCES } from "../../css_references";

interface InformationWithIconProps {
    icon: ReactNode;
    children: ReactNode;
}

const InformationWithIconBase = styled("span")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    color: alpha("#fff", 0.7),
    fontSize: "16px",
    transition: "opacity .3s",
    // border: "2px solid",
    // borderColor: theme.palette.error.main,
    // color: theme.palette.error.main,
    // padding: "0 6px",

    strong: {
        marginLeft: "4px",
    },

    svg: {
        marginRight: "2px",
    },
}));

const InformationWithIcon: FunctionComponent<InformationWithIconProps> = (props) => {
    return (
        <InformationWithIconBase className={CSS_REFERENCES.INFORMATION_WITH_ICON}>
            {props.icon}
            {props.children}
        </InformationWithIconBase>
    );
};

export default InformationWithIcon;
