// Tools
import { styled, alpha } from "@mui/material";

export const ProjectDescriptionBase = styled("p")(({ theme }) => ({
    cursor: "default",
    fontSize: "16px",
    marginTop: "8px",
    lineHeight: 1.5,
    color: alpha(theme.palette.text.primary, 0.8),
    flexGrow: 1,
    "@media (max-width:1000px)": {
        fontSize: "18px",
    },
}));
