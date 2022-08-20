// Tools
import { useEffect, useState, useRef } from "react";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Fade from "@mui/material/Fade";
import Tooltip from "@mui/material/Tooltip";
// Material UI Icons
import Check from "@mui/icons-material/Check";
import ContentCopy from "@mui/icons-material/ContentCopy";
// Styled components
import EmailManagingButtonBase from "./styled_components/EmailManagingButtonBase";
import EmailHasBeenCopiedCommunique from "./styled_components/EmailHasBeenCopiedCommunique";

interface CopyEmailButtonProps {
    emailToCopy: string;
}

const CopyEmailButton: FunctionComponent<CopyEmailButtonProps> = (props) => {
    const [showButton, setShowButton] = useState<boolean>(false);
    const [emailHasBeenCopied, setEmailHasBeenCopied] = useState<boolean>(false);
    const buttonElement = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        let isMounted = true;

        setTimeout(() => {
            if (isMounted) setShowButton(true);
        }, 500);

        return () => {
            isMounted = false;
            setShowButton(false);
        };
    }, []);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(props.emailToCopy);
        setEmailHasBeenCopied(true);

        setTimeout(() => {
            if (buttonElement.current) buttonElement.current.blur();
        }, 1000);

        setTimeout(() => {
            setEmailHasBeenCopied(false);
        }, 5000);
    };

    return (
        <>
            <Fade in={showButton}>
                <Tooltip title="Copy email address to clipboard" placement="top">
                    <EmailManagingButtonBase
                        onClick={copyToClipboard} //
                        color="text"
                        ref={buttonElement}
                    >
                        <ContentCopy />
                    </EmailManagingButtonBase>
                </Tooltip>
            </Fade>
            <Fade in={emailHasBeenCopied}>
                <Tooltip title="Email has been copied to clipboard!" placement="top">
                    <EmailHasBeenCopiedCommunique>
                        <Check />
                    </EmailHasBeenCopiedCommunique>
                </Tooltip>
            </Fade>
        </>
    );
};

export default CopyEmailButton;
