// Tools
import { useTheme } from "@mui/material";
import { useRef, useEffect } from "react";
import useWindowSizes from "@/hooks/useWindowSizes";
// Types
import type { FunctionComponent } from "react";
// Other components
import ReCAPTCHA from "react-google-recaptcha";

interface GoogleReCAPTCHAProps {
    setReCAPTCHAIsApproved: (val: boolean) => void;
}

const GoogleReCAPTCHA: FunctionComponent<GoogleReCAPTCHAProps> = (props) => {
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);
    const theme = useTheme();
    const { width } = useWindowSizes();

    useEffect(() => (recaptchaRef.current as ReCAPTCHA).reset(), []);

    function getSiteKey() {
        try {
            return (window as any).Cypress ? "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" : (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string);
        } catch (e: unknown) {
            return "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
        }
    }

    function onReCAPTCHAChange(captchaCode: unknown) {
        if (!captchaCode) {
            return props.setReCAPTCHAIsApproved(false);
        }
        props.setReCAPTCHAIsApproved(true);
    }

    return (
        <ReCAPTCHA
            ref={recaptchaRef} //
            sitekey={getSiteKey()}
            onChange={onReCAPTCHAChange}
            theme={theme.palette.mode}
            hidden={false}
            style={
                width < 750
                    ? {
                          margin: "0 auto",
                      }
                    : {}
            }
        />
    );
};

export default GoogleReCAPTCHA;
