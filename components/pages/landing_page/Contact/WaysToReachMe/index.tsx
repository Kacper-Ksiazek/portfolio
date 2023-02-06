// Tools
import { styled } from "@mui/system";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Other components
import Email from "./Email";
import Phone from "./Phone";
import SingleWayToReachMe from "./SingleWayToReachMe";
import StyledButton from "@/components/atoms/forms/StyledButton";
// Material UI Icons
import GitHub from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { Label, Paragraph } from "@/components/pages/landing_page/BreakTheIce/Content/_styled_components";

const WaysToReachMeWrapper = styled("div")(({ theme }) => ({
    width: "calc(50% + 64px)",
    cursor: "default",
    position: "relative",
    alignSelf: "flex-start",
    overflow: "hidden",
    boxSizing: "border-box",
}));

const WaysToReachMe: FunctionComponent<{ writeToMe: () => void }> = (props) => {
    return (
        <WaysToReachMeWrapper>
            <Paragraph animationDelay={0.3}>
                {formatTextViaBolding(
                    `I'm freshman at *AGH University of Science and Technology* at the Faculty of *Engineering and Data Analysis* (WGGiOŚ) in Cracow and due to the loads of responsibilities related to my college, at the moment I consider only part-time jobs as well as internships with an opportunity to develop.`
                )}
            </Paragraph>

            <Label animationDelay={0.4}>Reach me via</Label>
            <Email emailToCopy="kacper.b.ksiazek@gmail.com" />
            <Phone phone="690 001 548" />

            <Label animationDelay={0.4}>Social media</Label>
            <Tooltip title="See me on Github" placement="top-start">
                <SingleWayToReachMe
                    icon={<GitHub />} //
                    redirectAfterClick
                    url="https://github.com/Kacper-Ksiazek"
                />
            </Tooltip>

            <Tooltip title="See me on Linkedin" placement="top-start">
                <SingleWayToReachMe
                    icon={<LinkedIn />} //
                    redirectAfterClick
                    url="https://www.linkedin.com/in/kacper-b-książek"
                />
            </Tooltip>

            <Tooltip title="See me on facebook" placement="top-start">
                <SingleWayToReachMe
                    icon={<Facebook />} //
                    redirectAfterClick
                    url="https://www.facebook.com/kacper.b.ksiazek"
                />
            </Tooltip>

            <StyledButton
                color="secondary"
                onClick={props.writeToMe}
                sx={{
                    mt: "32px", //
                    p: "8px 32px",
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                    svg: {
                        marginRight: "8px",
                    },
                }}
            >
                <EmailIcon />
                <span>Write to me</span>
            </StyledButton>
        </WaysToReachMeWrapper>
    );
};

export default WaysToReachMe;
