// Tools
import { styled } from "@mui/system";
// Styled components
const square = (size: string): any => {
    return {
        width: size,
        height: size,
    };
};

export default styled("span")(({ theme }) => ({
    position: "relative",
    ...square("80px"),
    "&:not(&:nth-of-type(1))": {
        marginLeft: "50px",
    },
    ["@media (max-width:1200px)"]: {
        "&:not(&:nth-of-type(1))": {
            marginLeft: "32px",
        },
    },
    ["@media (max-width:1000px)"]: {
        ...square("70px"),
    },
    ["@media (max-width:900px)"]: {
        ...square("140px"),
        "&:not(&:nth-of-type(4n +1))": {
            marginLeft: "32px",
        },
        "&:nth-of-type(4n +1)": {
            marginLeft: "0 !important",
        },
        "&:nth-of-type(1)": {
            marginBottom: "32px",
        },
    },
    ["@media (max-width:800px)"]: {
        ...square("130px"),
    },
    ["@media (max-width:730px)"]: {
        ...square("120px"),
    },
    ["@media (max-width:690px)"]: {
        ...square("110px"),
    },
    ["@media (max-width:650px)"]: {
        ...square("100px"),
    },
    ["@media (max-width:590px)"]: {
        ...square("90px"),
    },
    ["@media (max-width:550px)"]: {
        ...square("80px"),
    },
    ["@media (max-width:510px)"]: {
        ...square("70px"),
    },
    ["@media (max-width:500px)"]: {
        ...square("80px"),
    },
    ["@media (max-width:480px)"]: {
        ...square("70px"),
    },
    ["@media (max-width:430px)"]: {
        "&:not(&:nth-of-type(4n +1))": {
            marginLeft: "24px",
        },
        "&:nth-of-type(4n +1)": {
            marginLeft: "0 !important",
        },
        "&:nth-of-type(1)": {
            marginBottom: "24px",
        },
    },
    ["@media (max-width:400px)"]: {
        ...square("60px"),
    },
    ["@media (max-width:360px)"]: {
        ...square("50px"),
    },
    ["@media (max-width:316px)"]: {
        ...square("40px"),
    },
}));
