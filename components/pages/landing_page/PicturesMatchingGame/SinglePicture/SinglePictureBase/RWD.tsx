// Types
import type { SxProps } from "@mui/system";

export const SinglePictureBaseRWD: SxProps = {
    //
    ["@media (max-width:840px)"]: {
        width: "120px",
        height: "120px",
    },
    ["@media (max-width:780px)"]: {
        width: "140px",
        height: "140px",
    },
    ["@media (max-width:700px)"]: {
        width: "130px",
        height: "130px",
    },
    ["@media (max-width:660px)"]: {
        width: "160px",
        height: "160px",
    },
    ["@media (max-width:600px)"]: {
        width: "150px",
        height: "150px",
    },
    ["@media (max-width:560px)"]: {
        width: "140px",
        height: "140px",
    },
    //
    ["@media (min-width:781px)"]: {
        "&:nth-of-type(5n + 1)": {
            marginLeft: "0",
        },
        "&:nth-of-type(1)": {
            marginBottom: "10px",
        },
    },
    ["@media (min-width:661px) and (max-width: 780px)"]: {
        "&:nth-of-type(4n + 1)": {
            marginLeft: "0",
        },
        "&:nth-of-type(1), &:nth-of-type(5)": {
            marginBottom: "10px",
        },
    },
    ["@media (min-width:521px) and (max-width:660px)"]: {
        "&:nth-of-type(3n + 1)": {
            marginLeft: "0",
        },
        "&:nth-of-type(1), &:nth-of-type(4), &:nth-of-type(7)": {
            marginBottom: "10px",
        },
    },
    ["@media (max-width:520px)"]: {
        width: "200px",
        height: "200px",
        "&:nth-of-type(2n + 1)": {
            marginLeft: "0",
        },
        "&:nth-of-type(1), &:nth-of-type(3), &:nth-of-type(5), &:nth-of-type(7), &:nth-of-type(9)": {
            marginBottom: "10px",
        },
    },
    ["@media (max-width:450px)"]: {
        width: "190px",
        height: "190px",
    },
    ["@media (max-width:430px)"]: {
        width: "180px",
        height: "180px",
    },
    ["@media (max-width:410px)"]: {
        width: "170px",
        height: "170px",
    },
    ["@media (max-width:390px)"]: {
        width: "160px",
        height: "160px",
    },
    ["@media (max-width:370px)"]: {
        width: "150px",
        height: "150px",
    },
    ["@media (max-width:350px)"]: {
        width: "140px",
        height: "140px",
    },
    ["@media (max-width:330px)"]: {
        width: "130px",
        height: "130px",
    },
    ["@media (max-width:310px)"]: {
        width: "120px",
        height: "120px",
    },
};
