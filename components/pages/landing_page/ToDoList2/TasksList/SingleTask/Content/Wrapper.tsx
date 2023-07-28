import { styled } from "@mui/material";
// Styled components
interface SingleTaskContentWrapperProps {
    editModeIsOpened: boolean;
}

function shouldForwardProp(prop: string): boolean {
    return !["editModeIsOpened"].includes(prop);
}

export default styled("div", { shouldForwardProp })<SingleTaskContentWrapperProps>(({ theme, ...props }) => ({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
    minHeight: "70px",
    marginRight: props.editModeIsOpened ? "64px" : "16px",
    gap: "4px",
    ".flex-wrapper": {
        gap: "6px",
    },
}));
