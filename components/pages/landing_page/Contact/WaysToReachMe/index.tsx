// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Other components
import SingleWayToReachMe from "./SingleWayToReachMe";
// Material UI Icons
import GitHub from "@mui/icons-material/GitHub";
import Twitter from "@mui/icons-material/Twitter";
import Facebook from "@mui/icons-material/Facebook";
import Mail from "@mui/icons-material/Mail";
import LinkedIn from "@mui/icons-material/LinkedIn";

const WaysToReachMe: FunctionComponent = (props) => {
    return (
        <>
            <SingleWayToReachMe
                via="PARTICULAR_SERVICE"
                icon={<GitHub />} //
                url="https://github.com/Kacper-Ksiazek"
            />
            <SingleWayToReachMe
                via="EMAIL"
                icon={<Mail />} //
                email="kacper.b.ksiazek@gmail.com"
            />
            <SingleWayToReachMe
                via="PARTICULAR_SERVICE"
                icon={<LinkedIn />} //
                url="https://www.linkedin.com/in/kacper-b-książek"
            />
            <SingleWayToReachMe
                via="PARTICULAR_SERVICE"
                icon={<Facebook />} //
                url="https://www.facebook.com/kacper.b.ksiazek"
            />
        </>
    );
};

export default WaysToReachMe;
