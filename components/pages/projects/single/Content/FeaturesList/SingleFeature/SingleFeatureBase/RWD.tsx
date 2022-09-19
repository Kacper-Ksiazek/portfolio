// Types
import type { SxProps } from "@mui/system";

export default {
    ["@media (min-width:1451px)"]: {
        width: "calc(20% - calc(80px / 5))",
        height: "200px",
        "&:not(&:nth-of-type(5n))": {
            marginRight: "20px",
        },
        "&:nth-of-type(1),&:nth-of-type(2),&:nth-of-type(3),&:nth-of-type(4),&:nth-of-type(5)": {
            marginTop: 0,
        },
    },
    ["@media (min-width:1201px) and (max-width:1451px)"]: {
        width: "calc(25% - calc(60px / 4))",
        height: "200px",
        "&:not(&:nth-of-type(4n))": {
            marginRight: "20px",
        },
        "&:nth-of-type(1),&:nth-of-type(2),&:nth-of-type(3),&:nth-of-type(4)": {
            marginTop: 0,
        },
    },
    ["@media (min-width:701px) and (max-width:1201px)"]: {
        width: "calc(33.33333% - calc(40px / 3))",
        height: "200px",
        "&:not(&:nth-of-type(3n))": {
            marginRight: "20px",
        },
        "&:nth-of-type(1),&:nth-of-type(2),&:nth-of-type(3)": {
            marginTop: 0,
        },
        ["@media (max-width:900px)"]: {
            height: "190px",
            width: "calc(33.33333% - calc(20px / 3))",
            marginTop: "10px",
            "&:nth-of-type(1),&:nth-of-type(2),&:nth-of-type(3)": {
                marginTop: 0,
            },
            "&:not(&:nth-of-type(3n))": {
                marginRight: "10px",
            },
        },
        ["@media (max-width:840px)"]: {
            height: "180px",
        },
        ["@media (max-width:760px)"]: {
            height: "170px",
        },
    },
    ["@media (min-width:451px) and (max-width:700px)"]: {
        width: "calc(50% - calc(10px / 2))",
        height: "200px",
        "&:not(&:nth-of-type(2n))": {
            marginRight: "10px",
        },
        marginTop: "10px",
        "&:nth-of-type(1),&:nth-of-type(2)": {
            marginTop: 0,
        },
        ["@media (max-width:620px)"]: {
            height: "190px",
        },
        ["@media (max-width:600px)"]: {
            height: "180px",
        },
    },
    ["@media (max-width:450px)"]: {
        width: "100%",
        marginRight: 0,
        height: "240px",
        "&:nth-of-type(1)": {
            marginTop: 0,
        },
    },
} as SxProps;
