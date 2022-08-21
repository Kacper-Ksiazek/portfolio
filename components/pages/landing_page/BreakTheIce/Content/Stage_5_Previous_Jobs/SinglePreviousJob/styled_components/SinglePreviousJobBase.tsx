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
}));
