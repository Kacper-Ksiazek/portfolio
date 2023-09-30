// Tools
import { useRef } from "react";
import { SOCIAL_MEDIA_LINKS } from "@/data/social_media_links";
// Types
import type { FunctionComponent } from "react";
// Other components
import AdditionalActionButton from "../common/AdditionalActionButton";
// Material UI Icons
import PhoneIcon from "@mui/icons-material/Phone";

const CallMeStraightAway: FunctionComponent = () => {
    const hrefRef = useRef<HTMLAnchorElement>(null);

    function onClick() {
        hrefRef.current?.click();
    }

    return (
        <>
            <AdditionalActionButton
                buttonMsg="Call me straight away" //
                icon={<PhoneIcon />}
                onClick={onClick}
                tooltip=""
            />

            <a
                ref={hrefRef}
                style={{
                    display: "none",
                }}
                href={`tel:+48${SOCIAL_MEDIA_LINKS.PHONE.replaceAll(" ", "-")}`}
            />
        </>
    );
};

export default CallMeStraightAway;
