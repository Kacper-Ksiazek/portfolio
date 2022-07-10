// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/_keyframes/fadeSimple";
import fadeFromLeft from "@/components/_keyframes/fadeFromLeft";
// Styled components
export default styled("div")(({ theme }) => ({
    display: " flex",
    alignItems: "center",
    width: "100%",
    padding: "5px 10px",
    background: "#fff",
    borderRadius: "3px",
    cursor: "default",
    color: theme.palette.text.primary,
    position: "relative",
    transition: "all .3s .3s",
    boxSizing: "border-box",
    overflow: "hidden",
    maxHeight: "55px",
    "&.freshlyCreated": {
        animation: `${fadeFromLeft} .5s both`,
        button: {
            "&:nth-of-type(1)": {
                animation: `${fadeSimple} .3s .4s both`,
            },
            "&:nth-of-type(2)": {
                animation: `${fadeSimple} .3s .5s both`,
            },
        },
    },
    "span.index": {
        background: theme.palette.primary.main,
        borderRadius: "3px",
        color: "#fff",
        width: "30px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        marginRight: "20px",
        fontSize: "20px",
    },
    "span.text": {
        width: "calc(100% - 100px)",
        fontWeight: 500,
        transition: "opacity .3s .2s",
    },
    "&:not(&:nth-of-type(1))": {
        marginTop: "10px",
    },
    "&.deleting": {
        transform: "scaleY(0)",
        maxHeight: 0,
        marginTop: "0px !important",
        padding: 0,
    },
}));
