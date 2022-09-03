// Tools
import { useState } from "react";
// Types
import type { FunctionComponent } from "react";
// Other components
import ShowEmailButton from "./ShowEmailButton";
import CopyEmailButton from "./CopyEmailButton";
import SingleWayToReachMe from "../SingleWayToReachMe";
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
            url="kacper.b.ksiazek@gmail.com"
            hideURL={!showEmail}
        >
            <ShowEmailButton
                setShowEmail={setShowEmail} //
                showEmail={showEmail}
            />

            {showEmail && <CopyEmailButton emailToCopy={props.emailToCopy} />}
        </SingleWayToReachMe>
    );
};

export default Email;
