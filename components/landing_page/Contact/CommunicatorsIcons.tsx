// Tools
import { styled, keyframes } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import GitHub from "@mui/icons-material/GitHub";
import Twitter from "@mui/icons-material/Twitter";
import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";
// Styled Components
const CommunicatorsIconsWrapper = styled("div")(({ theme }) => ({
    marginTop: "20px",
    display: "flex",
}));

const SingleIcon = styled("a")(({ theme }) => ({
    width: "80px",
    height: "80px",
    background: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    svg: {
        position: "relative",
        zIndex: 2,
        fontSize: "4rem",
        color: "#fff",
    },
    "&:not(&:nth-of-type(1))": {
        marginLeft: "20px",
    },
    "&::after,&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "50%",
        background: theme.palette.secondary.main,
        transition: "transform .3s",
    },
    "&::after": {
        top: "0",
        transform: "translate(0%,calc(-100% - 10px))",
    },
    "&::before": {
        bottom: "0",
        transform: "translate(0%,calc(+100% + 10px))",
    },
    "&:hover": {
        "&::after,&::before": {
            transform: "translate(0%,0%) ",
        },
    },
}));

const CommunicatorsIcons: FunctionComponent = (props) => {
    return (
        <CommunicatorsIconsWrapper>
            <SingleIcon target="_blank" href="https://www.facebook.com/profile.php?id=100008306838462">
                <Facebook />
            </SingleIcon>
            <SingleIcon target="_blank" href="https://www.linkedin.com/in/kacper-ksi%C4%85%C5%BCek-454b14244/">
                <LinkedIn />
            </SingleIcon>
            <SingleIcon target="_blank" href="https://github.com/Kacper-Ksiazek">
                <GitHub />
            </SingleIcon>
            <SingleIcon target="_blank" href="https://twitter.com/KacperKsiazekJG">
                <Twitter />
            </SingleIcon>
        </CommunicatorsIconsWrapper>
    );
};

export default CommunicatorsIcons;
