// Tools
import { styled } from "@mui/material";
import { useRouter } from "next/router";
import { fadeSimple } from "@/components/keyframes/intro";
import { SELECTORS, CSS_REFERENCES } from "landing_page/css_references";
// Types
import type { MouseEvent, FunctionComponent } from "react";
// Other components
import StyledButton from "@/components/atoms/forms/StyledButton";
// Material UI Icons
import MailOutline from "@mui/icons-material/MailOutline";
// Styled components
import Tooltip from "@mui/material/Tooltip";

const RedirectionButton = styled(StyledButton)(({ theme }) => ({
    height: "42px",
    padding: "0 36px",
    animation: `${fadeSimple} .3s .5s both linear`,
}));

const GoToContactForm: FunctionComponent = () => {
    const router = useRouter();

    function redirectToContactForm(e: MouseEvent<HTMLButtonElement>) {
        if (!window) return;
        (e.target as HTMLButtonElement).blur();

        // If the user is in the home page, scroll to the contact form
        if (window.location.pathname === "/") {
            const contactMeSection = document.querySelector(SELECTORS.CONTACT_ME);
            // If the contact form is found, scroll to it
            if (contactMeSection) {
                contactMeSection.scrollIntoView({ behavior: "smooth" });

                // Additionally, open the email form after 1 second
                setTimeout(() => {
                    const openEmailFormButton = document.querySelector(SELECTORS.CONTACT_ME_OPEN_EMAIL_FORM_BUTTON);
                    if (openEmailFormButton) (openEmailFormButton as HTMLButtonElement).click();
                }, 200);
            }
        }
        // If the user is in another page, redirect to the home page and scroll to the contact form
        else {
            router.push({
                pathname: "/",
                query: {
                    skipIntroductionAnimationEvenThoughItsCool: "1",
                    scrollToElement: CSS_REFERENCES.CONTACT_ME_OPEN_EMAIL_FORM_BUTTON,
                },
            });
        }
    }

    return (
        <Tooltip title="Go to the contact panel of my portfolio" placement="top">
            <RedirectionButton
                onClick={redirectToContactForm} //
                componentThemeID="MUI"
                subtleHoverEffect
            >
                <MailOutline sx={{ mr: "6px" }} />
                {"Use portfolio's contact form"}
            </RedirectionButton>
        </Tooltip>
    );
};

export default GoToContactForm;
