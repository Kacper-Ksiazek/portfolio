// Tools
import { styled } from "@mui/system";
import RWD from "./RWD";
import introAnimations from "./introAnimations";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    marginTop: "16px",
    width: "calc(100% - 20px)",
    "&:not(&:nth-of-type(1))": {
        marginTop: "64px",
        "&::after": {
            content: "''",
            position: "absolute",
            top: "-32px",
            left: 0,
            width: "75%",
            height: "2px",
            background: "#000",
            opacity: 0.05,
        },
    },
    "&:nth-of-type(odd)": {
        ".single-previous-job-thumbnail-wrapper": {
            borderRadius: "20px 5px 20px 5px;",
        },
        "&::before": {
            left: "160px",
        },
    },
    "&:nth-of-type(even)": {
        flexDirection: "row-reverse",
        ".single-previous-job-thumbnail-wrapper": {
            borderRadius: "5px 20px 5px 20px",
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
        background: theme.palette.mode === "light" ? "#EEDFE9" : "#343435",
        width: "80px",
        transform: "translateY(-50%)",
        zIndex: "-1",
        borderRadius: "3px",
        transition: "transform .3s",
    },
    "&.hoverable": {
        "&:hover": {
            "&::before": {
                transform: "translate(20px,-50%) scaleX(1.4)",
            },
            ".single-previous-job-thumbnail-wrapper": {
                transform: "translate(8px,0)",
            },
        },
    },
    ...(RWD as any),
    ...(introAnimations as any),
}));
