// Tools
import { styled, alpha } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Material UI Icons
import OpenInFull from "@mui/icons-material/OpenInFull";

const OpenFullsizeBase = styled("span")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 5,
    width: "100%",
    top: 0,
    left: 0,
    height: "100%",
    borderRadius: "5px 10px 5px 10px",
    transition: "background .3s",
    svg: {
        color: "#fff",
        opacity: 0,
        fontSize: "48px",
        transition: "opacity .3s",
    },
    "&:hover": {
        background: alpha("#000", 0.3),
        svg: {
            opacity: 1,
        },
    },
}));

const OpenFullsize: FunctionComponent = (props) => {
    return (
        <OpenFullsizeBase>
            <Tooltip title="Preview image" placement="top">
                <OpenInFull />
            </Tooltip>
        </OpenFullsizeBase>
    );
};

export default OpenFullsize;
