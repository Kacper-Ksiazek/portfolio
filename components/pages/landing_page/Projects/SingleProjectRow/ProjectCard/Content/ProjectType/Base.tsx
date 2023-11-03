// Tools
import { styled } from "@mui/material";
// Types
import { ProjectType as I_ProjectType } from "@prisma/client";
// Styled components
const COLORS: Record<I_ProjectType, string> = {
    COMMERCIAL: "#ED701D",
    PERSONAL: "#31C451",
    HACKATHON: "#2C3CC9",
};

function shouldForwardProp(prop: string) {
    return prop !== "type";
}

export default styled("span", {
    shouldForwardProp, //
})<{ type: I_ProjectType }>(({ theme, ...props }) => ({
    padding: "4px 16px",
    alignSelf: "flex-start",
    borderRadius: "10px",
    color: "#fff",
    userSelect: "none",
    display: "flex",
    alignItems: "center",
    background: COLORS[props.type],
    svg: {
        fontSize: "20px",
        marginRight: "4px",
    },
    "@media (max-width:750px)": {
        padding: "6px 16px",
        svg: {
            fontSize: "24px",
        },
    },
}));
