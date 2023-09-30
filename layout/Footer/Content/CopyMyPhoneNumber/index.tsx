// Tools
import { styled } from "@mui/material";
import { SOCIAL_MEDIA_LINKS } from "@/data/social_media_links";
// Types
import type { FunctionComponent } from "react";
// Other components
import CallMeStraightAway from "./CallMeStraightAway";
import { ContentToCopy, SectionWrapper } from "../common";

const PolandFlag = styled("div")(({ theme }) => ({
    width: "32px",
    height: "24px",
    backgroundImage: "url('https://flagcdn.com/w20/pl.png')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
}));

const CopyMyEmail: FunctionComponent = () => {
    return (
        <SectionWrapper>
            <ContentToCopy
                header="My phone number" //
                tooltip="Copy my phone number to the clipboard"
                contentToCopy={{
                    value: SOCIAL_MEDIA_LINKS.PHONE,
                    snackbarMsg: "Phone number has been copied to the clipboard! Make a good use of it 😎",
                }}
                startAdornment={
                    <>
                        <PolandFlag />
                        <strong style={{ margin: "0 8px 0 8px" }}>+48 </strong>
                    </>
                }
            />

            <CallMeStraightAway />
        </SectionWrapper>
    );
};

export default CopyMyEmail;
