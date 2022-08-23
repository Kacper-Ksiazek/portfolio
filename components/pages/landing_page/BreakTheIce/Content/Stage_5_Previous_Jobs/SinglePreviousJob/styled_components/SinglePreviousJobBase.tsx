// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    "&:nth-of-type(1)": {
        marginTop: "24px",
    },
    "&:not(&:nth-of-type(1))": {
        marginTop: "64px",
    },
    "&:nth-of-type(odd)": {
        ".single-previous-job-thumbnail-wrapper": {
            img: {
                borderRadius: "20px 5px 20px 5px;",
            },
        },
        "&::before": {
            left: "160px",
        },
    },
    "&:nth-of-type(even)": {
        flexDirection: "row-reverse",
        ".single-previous-job-thumbnail-wrapper": {
            img: {
                borderRadius: "5px 20px 5px 20px",
            },
        },
        "&::before": {
            right: "160px",
        },
    },
    "&::after": {
        content: "''",
        position: "absolute",
        top: "-32px",
        width: "100%",
        height: "2px",
        background: "#000",
        opacity: 0.1,
    },
    "&::before": {
        content: "''",
        position: "absolute",
        top: "50%",
        height: "calc(100% + 24px)",
        background: theme.palette.secondary.main,
        width: "80px",
        transform: "translateY(-50%)",
        zIndex: "-1",
        opacity: 0.1,
        borderRadius: "3px",
        transition: "transform .3s",
    },
    "&:hover": {
        "&::before": {
            transform: "translate(20px,-50%) scaleX(1.4)",
        },
    },
    ["@media (max-width:600px)"]: {
        flexDirection: "column !important",
        "&::before": {
            left: "auto !important",
            right: "20px !important",
        },
        "&>*": {
            width: "100% !important",
        },
        ".single-previous-job-thumbnail-wrapper": {
            height: "260px",
            marginBottom: "8px",
        },
        "&:nth-of-type(1)": {
            marginTop: "48px",
        },
        "&:not(&:nth-of-type(1))": {
            marginTop: "80px",
        },
        "&::after": {
            top: "-40px",
        },
    },
    ["@media (max-width:420px)"]: {
        ".single-previous-job-thumbnail-wrapper": {
            height: "240px",
        },
    },
    ["@media (max-width:380px)"]: {
        ".single-previous-job-thumbnail-wrapper": {
            height: "220px",
            marginBottom: "12px",
        },
    },
    ["@media (max-width:360px)"]: {
        ".single-previous-job-thumbnail-wrapper": {
            height: "200px",
        },
    },
}));
