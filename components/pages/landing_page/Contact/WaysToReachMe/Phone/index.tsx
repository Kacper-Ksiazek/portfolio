// Tools
import { useState } from "react";
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Other components
import SingleWayToReachMe from "../SingleWayToReachMe";
import ContentWithRestrictedVisibility from "../ContentWithRestrictedVisibility";
// Material UI Components
import Phone from "@mui/icons-material/Phone";
// Styled components
const StyledStrong = styled("strong")(({ theme }) => ({
    margin: "0 6px",
}));
const PolandFlag = styled("div")(({ theme }) => ({
    width: "20px",
    height: "20px",
    backgroundImage: "url('https://flagcdn.com/w20/pl.png')",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
}));

interface EmailProps {
    phone: string;
}

const Email: FunctionComponent<EmailProps> = (props) => {
    const [showEmail, setShowEmail] = useState<boolean>(false);

    return (
        <SingleWayToReachMe
            icon={<Phone />} //
            url={props.phone}
            hideURL={!showEmail}
            messagePrefix={
                <>
                    <PolandFlag />
                    <StyledStrong>+48</StyledStrong>
                </>
            }
        >
            <ContentWithRestrictedVisibility
                tooltip="Show my mobile phone number" //
                onVisible={() => setShowEmail(true)}
            />
        </SingleWayToReachMe>
    );
};

export default Email;
