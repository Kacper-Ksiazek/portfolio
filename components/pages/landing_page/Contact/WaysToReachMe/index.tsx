// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Other components
import Email from "./Email";
import SingleWayToReachMe from "./SingleWayToReachMe";
// Material UI Icons
import GitHub from "@mui/icons-material/GitHub";
import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";

const WaysToReachMe: FunctionComponent = (props) => {
    return (
        <>
            <Email emailToCopy="kacper.b.ksiazek@gmail.com" />

            <Tooltip title="See me on github" placement="top-start">
                <SingleWayToReachMe
                    icon={<GitHub />} //
                    redirectAfterClick
                    url="https://github.com/Kacper-Ksiazek"
                />
            </Tooltip>

            <Tooltip title="See me on linkedin" placement="top-start">
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
