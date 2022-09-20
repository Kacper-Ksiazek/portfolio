// Tools
import { styled } from "@mui/system";

export const TechnologiesListBase = styled("ul")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    listStyleType: "none",
    margin: "0",
    padding: "0",
}));

export const SingleTechnology = styled("li")(({ theme }) => ({
    position: "relative",
    borderRadius: "3px",
    border: `1px solid ${theme.palette.primary.main}`,
    userSelect: "none",

    "&:not(&.small)": {
        padding: "2px 15px",
        margin: "10px 10px 0 0 ",
        ["@media (max-width:600px)"]: {
            margin: "6px 6px 0 0 ",
        },
    },
    "&.small": {
        padding: "0 6px",
        fontSize: "14px",
        "&:not(&:nth-of-type(1))": {
            marginLeft: "5px",
        },
    },
}));

export const ThereAreMoreTechnologies = styled("span")(({ theme }) => ({
    fontSize: "20px",
    lineHeight: "20px",
    marginLeft: "8px",
}));
