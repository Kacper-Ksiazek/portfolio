// Tools
import { styled } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Material UI Icons
import Code from "@mui/icons-material/Code";
// Styled Components
const ITRelatedJobIconBase = styled("span")(({ theme }) => ({
    position: "absolute",
    bottom: "4px",
    left: "4px",
    background: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "24px",
    height: "24px",
    borderRadius: "3px",
    svg: {
        color: "#fff",
        fontSize: "18px",
    },
    ["@media (max-width:600px)"]: {
        width: "32px",
        height: "32px",
        svg: {
            fontSize: "24px",
        },
    },
}));

const ITRelatedJobIcon: FunctionComponent = () => {
    return (
        <Tooltip title="Coding job" placement="top">
            <ITRelatedJobIconBase>
                <Code />
            </ITRelatedJobIconBase>
        </Tooltip>
    );
};

export default ITRelatedJobIcon;
