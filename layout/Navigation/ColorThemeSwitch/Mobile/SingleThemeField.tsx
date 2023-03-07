// Tools
import { styled, alpha } from "@mui/material";
// Types
import type { ReactNode, FunctionComponent } from "react";

// Styled components
const Base = styled("div")(({ theme }) => ({
    aspectRatio: "6/5",
    border: "1px solid #fff",
    borderRadius: "5px",
    ...theme.mixins.flex_center,
    flexDirection: "column",
    color: alpha("#fff", 0.7),
    svg: {
        fontSize: "3rem",
        color: "inherit !important" as any,
    },
    transition: "all .3s",
    "&.active": {
        color: "#fff",
        background: theme.palette.primary.main,
    },
    "&.active-by-system-preference": {
        color: "#fff",
    },
    "span.label": {
        marginTop: "4px",
    },
}));

interface SingleThemeFieldProps {
    label: string;
    icon: ReactNode;
    isActive: boolean;
    activeBySystemPreference: boolean;

    onClick?: () => void;
}

const SingleThemeField: FunctionComponent<SingleThemeFieldProps> = (props) => {
    return (
        <Base
            className={[
                props.isActive ? "active" : "", //
                props.activeBySystemPreference ? "active-by-system-preference" : "",
            ].join(" ")}
            role="button"
            onClick={props.onClick}
        >
            {props.icon}
            <span className="label">{props.label}</span>
        </Base>
    );
};

export default SingleThemeField;
