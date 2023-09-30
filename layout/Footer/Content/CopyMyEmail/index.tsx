// Tools
import { SOCIAL_MEDIA_LINKS } from "@/data/social_media_links";
// Types
import type { FunctionComponent } from "react";
// Other components
import ContentToCopy from "../common/ContentToCopy";
// Styled components
import CopyMyEmailWrapper from "../common/SectionWrapper";
import GoToContactForm from "./GoToContactForm";

const CopyMyEmail: FunctionComponent = () => {
    return (
        <CopyMyEmailWrapper>
            <ContentToCopy
                header="My email address" //
                tooltip="Copy my email address to the clipboard"
                contentToCopy={{
                    value: SOCIAL_MEDIA_LINKS.EMAIL,
                    snackbarMsg: "Email address has been copied to the clipboard! Make a good use of it 😎",
                }}
            />

            <GoToContactForm />
        </CopyMyEmailWrapper>
    );
};

export default CopyMyEmail;
