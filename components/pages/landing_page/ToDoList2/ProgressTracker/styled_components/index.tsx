// Tools
import { styled } from "@mui/material";
import { ProgressBar } from "./ProgressBar";

export { ProgressBar };

export const FlexWrapper = styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    marginTop: "4px",
}));

export const SectionWrapper = styled("div")(({ theme }) => ({
    background: theme.palette.background.default,
    borderRadius: "2px",
    marginBottom: "12px",
    padding: "12px",
    boxSizing: "border-box",
    width: "100%",
}));

export const Paragraph = styled("p")(({ theme }) => ({
    margin: 0,
    fontSize: "18px",
    "&:not(&:nth-of-type(1))": {
        marginTop: "12px",
    },
}));
