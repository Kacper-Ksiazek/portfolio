// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("span")(({ theme }) => ({
    position: "relative",
    width: "80px",
    height: "80px",
    "&:not(&:nth-of-type(1))": {
        marginLeft: "50px",
    },
    ["@media (max-width:1200px)"]: {
        "&:not(&:nth-of-type(1))": {
            marginLeft: "32px",
        },
    },
    ["@media (max-width:1000px)"]: {
        width: "70px",
        height: "70px",
    },
    ["@media (max-width:900px)"]: {
        width: "140px",
        height: "140px",
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
        width: "130px",
        height: "130px",
    },
    ["@media (max-width:730px)"]: {
        width: "120px",
        height: "120px",
    },
    ["@media (max-width:690px)"]: {
        width: "110px",
        height: "110px",
    },
    ["@media (max-width:650px)"]: {
        width: "100px",
        height: "100px",
    },
    ["@media (max-width:590px)"]: {
        width: "90px",
        height: "90px",
    },
    ["@media (max-width:550px)"]: {
        width: "80px",
        height: "80px",
    },
    ["@media (max-width:510px)"]: {
        width: "70px",
        height: "70px",
    },
    ["@media (max-width:500px)"]: {
        width: "80px",
        height: "80px",
    },
    ["@media (max-width:480px)"]: {
        width: "70px",
        height: "70px",
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
        width: "60px",
        height: "60px",
    },
    ["@media (max-width:360px)"]: {
        width: "50px",
        height: "50px",
    },
    ["@media (max-width:316px)"]: {
        width: "40px",
        height: "40px",
    },
    // ["@media (max-width:600px)"]: {
    //     width: "140px",
    //     height: "140px",
    //     "&:not(&:nth-of-type(3n +1))": {
    //         marginLeft: "32px !important",
    //     },
    //     "&:nth-of-type(3n +1)": {
    //         marginLeft: "0 !important",
    //     },
    //     "&:nth-of-type(1), &:nth-of-type(4)": {
    //         marginBottom: "32px",
    //     },
    // },
    // ["@media (max-width:580px)"]: {
    //     width: "130px",
    //     height: "130px",
    // },
    // ["@media (max-width:550px)"]: {
    //     width: "120px",
    //     height: "120px",
    // },
    // ["@media (max-width:520px)"]: {
    //     width: "110px",
    //     height: "110px",
    // },
    // ["@media (max-width:490px)"]: {
    //     width: "100px",
    //     height: "100px",
    // },
    // ["@media (max-width:430px)"]: {
    //     width: "80px",
    //     height: "80px",
    // },
    // ["@media (max-width:390px)"]: {
    //     width: "80px",
    //     height: "80px",
    // },
    // ["@media (max-width:370px)"]: {
    //     width: "70px",
    //     height: "70px",
    // },
    // ["@media (max-width:330px)"]: {
    //     width: "60px",
    //     height: "60px",
    // },
}));
