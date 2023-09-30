// Tools
import { useRouter } from "next/router";
import { SELECTORS, CSS_REFERENCES } from "landing_page/css_references";
// Types
import type { MouseEvent, FunctionComponent } from "react";
// Other components
import AdditionalActionButton from "../common/AdditionalActionButton";
// Material UI Icons
import MailOutline from "@mui/icons-material/MailOutline";

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
        <AdditionalActionButton
            tooltip="Go to the contact panel of my portfolio" //
            buttonMsg="Use portfolio's contact form"
            icon={<MailOutline />}
            onClick={redirectToContactForm}
        />
    );
};

export default GoToContactForm;
