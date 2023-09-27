// Tools
import dynamic from "next/dynamic";
import { styled } from "@mui/material";
import { useFooterContext } from "../hooks/useFooterContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import SmoothConditionalRender from "@/components/utils/SmoothConditionalRender";
const CopyMyEmail = dynamic(() => import("./CopyMyEmail"));
const CopyMyPhoneNumber = dynamic(() => import("./CopyMyPhoneNumber"));
const FooterLogoAnimation = dynamic(() => import("./FooterLogoAnimation"), { ssr: false });

// Styled components
const FooterContentWrapper = styled("div")(({ theme }) => ({
    height: "300px",
    width: "504px",
    position: "relative",
    ".smooth-conditional-render-wrapper": {
        position: "relative",
        width: "100%",
        height: "100%",
    },
}));

const FooterContent: FunctionComponent = () => {
    const { contentToDisplay } = useFooterContext();

    return (
        <FooterContentWrapper>
            <SmoothConditionalRender when={contentToDisplay === "LOGO"}>
                <FooterLogoAnimation />
            </SmoothConditionalRender>

            <SmoothConditionalRender when={contentToDisplay === "PHONE_NUMBER"}>
                <CopyMyPhoneNumber />
            </SmoothConditionalRender>

            <SmoothConditionalRender when={contentToDisplay === "EMAIL"}>
                <CopyMyEmail />
            </SmoothConditionalRender>
        </FooterContentWrapper>
    );
};

export default FooterContent;
