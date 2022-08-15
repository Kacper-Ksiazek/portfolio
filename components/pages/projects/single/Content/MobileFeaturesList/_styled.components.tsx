// Tools
import { styled } from "@mui/system";
// Styled components

export const MobileFeaturesListBase = styled("section")(({ theme }) => ({
    background: theme.palette.background.default,
    display: "flex",
    flexWrap: "wrap",
}));
export const PrimaryStrong = styled("strong")(({ theme }) => ({
    color: theme.palette.primary.main,
}));
