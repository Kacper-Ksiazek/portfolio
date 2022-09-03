// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Other components
import Email from "./Email";
import Phone from "./Phone";
import SingleWayToReachMe from "./SingleWayToReachMe";
// Material UI Icons
import GitHub from "@mui/icons-material/GitHub";
import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";

const WaysToReachMe: FunctionComponent = (props) => {
    return (
        <>
            <Email emailToCopy="kacper.b.ksiazek@gmail.com" />
            <Phone phone="690 001 548" />

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
        </>
    );
};

export default WaysToReachMe;
