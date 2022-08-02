// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import GitHub from "@mui/icons-material/GitHub";
import Twitter from "@mui/icons-material/Twitter";
import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";
// Styled Components
import SingleCommunicatorIcon from "./styled_components/SingleCommunicatorIcon";

const CommunicatorsIconsWrapper = styled("div")(({ theme }) => ({
    marginTop: "20px",
    display: "flex",
}));

const CommunicatorsIcons: FunctionComponent = (props) => {
    return (
        <CommunicatorsIconsWrapper>
            <SingleCommunicatorIcon target="_blank" href="https://www.facebook.com/profile.php?id=100008306838462">
                <span className="intro-animation-bar" />
                <Facebook />
            </SingleCommunicatorIcon>
            <SingleCommunicatorIcon target="_blank" href="https://www.linkedin.com/in/kacper-ksi%C4%85%C5%BCek-454b14244/">
                <span className="intro-animation-bar" />
                <LinkedIn />
            </SingleCommunicatorIcon>
            <SingleCommunicatorIcon target="_blank" href="https://github.com/Kacper-Ksiazek">
                <span className="intro-animation-bar" />
                <GitHub />
            </SingleCommunicatorIcon>
            <SingleCommunicatorIcon target="_blank" href="https://twitter.com/KacperKsiazekJG">
                <span className="intro-animation-bar" />
                <Twitter />
            </SingleCommunicatorIcon>
        </CommunicatorsIconsWrapper>
    );
};

export default CommunicatorsIcons;
