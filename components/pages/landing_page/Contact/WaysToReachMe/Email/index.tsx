// Tools
import { useState } from "react";
// Types
import type { FunctionComponent } from "react";
// Other components
import CopyEmailButton from "./CopyEmailButton";
import SingleWayToReachMe from "../SingleWayToReachMe";
import ContentWithRestrictedVisibility from "../ContentWithRestrictedVisibility";
// Material UI Components
import Mail from "@mui/icons-material/Mail";

interface EmailProps {
    emailToCopy: string;
}

const Email: FunctionComponent<EmailProps> = (props) => {
    const [showEmail, setShowEmail] = useState<boolean>(false);

    return (
        <SingleWayToReachMe
            icon={<Mail />} //
            url={props.emailToCopy}
            hideURL={!showEmail}
        >
            <ContentWithRestrictedVisibility
                tooltip="Show my contact email address" //
                onVisible={() => setShowEmail(true)}
            >
                <CopyEmailButton emailToCopy={props.emailToCopy} />
            </ContentWithRestrictedVisibility>
        </SingleWayToReachMe>
    );
};

export default Email;
