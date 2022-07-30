// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
// Styled components
export const HTTPStatusCodeContentWrapper = styled("section", {
    shouldForwardProp: (prop: string) => !["reversedSkew"].includes(prop),
})<{ reversedSkew?: boolean }>(({ theme, ...props }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "calc(100vh - 150px)",
    userSelect: "none",
    "&::before": {
        content: "''",
        position: "absolute",
        top: "42%",
        left: "50%",
        height: "450px",
        opacity: 0.2,
        background: "#fff",
        width: "100vw",
        maxWidth: "800px",
        transform: `translate(-50%,-50%) skewX(${props.reversedSkew ? "-10deg" : "10deg"})`,
    },
    h3: {
        margin: "20px 0 10px 0",
        fontSize: "32px",
        animation: `${fadeSimple} .3s .6s linear both`,
    },
    p: {
        margin: 0,
        fontSize: "18px",
        animation: `${fadeSimple} .3s .6s linear both`,
        maxWidth: "500px",
        textAlign: "center",
    },
    h4: {
        fontSize: "18px",
        margin: "50px 0 20px 0",
        animation: `${fadeSimple} .3s .6s linear both`,
    },
}));

export const StatusCode = styled("h1")(({ theme }) => ({
    margin: 0,
    fontSize: "128px",
    fontFamily: "Montserrat Alternates",
    color: theme.palette.primary.main,
    fontWeight: 900,
    letterSpacing: "10px",
    lineHeight: "100px",
    animation: `${fadeSimple} .3s .3s linear both`,
}));

export const ButtonsWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    a: {
        padding: "4px 32px",
        "&:not(&:nth-of-type(1))": {
            marginLeft: "10px",
        },
        "&:nth-of-type(1)": {
            animation: `${fadeSimple} .3s 1.2s linear both`,
        },
        "&:nth-of-type(2)": {
            animation: `${fadeSimple} .3s 1.3s linear both`,
        },
    },
}));
