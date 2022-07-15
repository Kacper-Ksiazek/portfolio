// Tools
import { useRef, useEffect } from "react";
// Types
import type { FunctionComponent, SetStateAction, Dispatch } from "react";
// Other components
import ReCAPTCHA from "react-google-recaptcha";

interface GoogleReCAPTCHAProps {
    setReCAPTCHAIsApproved: Dispatch<SetStateAction<boolean>>;
}

const GoogleReCAPTCHA: FunctionComponent<GoogleReCAPTCHAProps> = (props) => {
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);

    useEffect(() => (recaptchaRef.current as ReCAPTCHA).reset(), []);

    const siteKey = (): string => {
        try {
            return (window as any).Cypress ? "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" : (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string);
        } catch (e: unknown) {
            return "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
        }
    };

    const onReCAPTCHAChange = (captchaCode: unknown) => {
        if (!captchaCode) {
            return props.setReCAPTCHAIsApproved(false);
        }
        props.setReCAPTCHAIsApproved(true);
    };

    return (
        <ReCAPTCHA
            ref={recaptchaRef} //
            sitekey={siteKey()}
            onChange={onReCAPTCHAChange}
            theme="dark"
        />
    );
};

export default GoogleReCAPTCHA;
