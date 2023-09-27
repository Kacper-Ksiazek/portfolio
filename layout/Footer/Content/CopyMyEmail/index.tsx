// Tools
import { useSnackbar } from "@/hooks/useSnackbar";
import { SOCIAL_MEDIA_LINKS } from "@/data/social_media_links";
// Types
import type { FunctionComponent } from "react";
// Other components
import ContentToCopy from "../_ContentToCopy";
// Styled components
import CopyMyEmailWrapper from "./Base";
import GoToContactForm from "./GoToContactForm";

const CopyMyEmail: FunctionComponent = () => {
    const { displaySnackbar } = useSnackbar();

    function copyEmailAddressToClipboard() {
        if (!navigator) return;

        navigator.clipboard.writeText(SOCIAL_MEDIA_LINKS.EMAIL);

        displaySnackbar({
            msg: "Email address has been copied to the clipboard! Make a good use of it 😎",
            severity: "info",
            hideAfter: 5000,
        });
    }

    return (
        <CopyMyEmailWrapper>
            <ContentToCopy
                header="My email address"
                content={SOCIAL_MEDIA_LINKS.EMAIL} //
                onClick={copyEmailAddressToClipboard}
                tooltip="Copy my email address to the clipboard"
            />

            <GoToContactForm />
        </CopyMyEmailWrapper>
    );
};

export default CopyMyEmail;
