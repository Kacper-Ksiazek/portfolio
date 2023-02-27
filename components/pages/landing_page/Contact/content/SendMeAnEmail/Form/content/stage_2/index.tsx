// Tools
import { styled } from "@mui/material";
import { fadeFromTop } from "@/components/keyframes/intro";
import { useSendEmailContext } from "@/components/pages/landing_page/Contact/content/SendMeAnEmail/hooks/useSendEmailContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import CountryInput from "./CountryInput";
// Styled Components
import StyledInput from "@/components/atoms/forms/StyledInput";

const InformationAboutOptionality = styled("span")(({ theme }) => ({
    fontSize: "14px",
    marginTop: "16px",
    animation: `${fadeFromTop} .2s .6s linear backwards`,
    fontWeight: 300,
    userSelect: "none",
}));

const EmailFormSubsection1: FunctionComponent = (props) => {
    const { form, updateForm, invalidFormFields } = useSendEmailContext();

    return (
        <>
            <CountryInput
                value={form.country} //
                onChange={(val) => updateForm({ country: val })}
                error={invalidFormFields.includes("country")}
            />
            <StyledInput
                label="Email" //
                color="secondary"
                type="email"
                value={form.email}
                onChange={(e) => updateForm({ email: e.target.value })}
                error={invalidFormFields.includes("email")}
            />
            <StyledInput
                label="LinkedIn*" //
                color="secondary"
                value={form.linkedIn}
                onChange={(e) => updateForm({ linkedIn: e.target.value })}
                error={invalidFormFields.includes("linkedIn")}
            />
            <StyledInput
                label="Website*" //
                color="secondary"
                value={form.website}
                onChange={(e) => updateForm({ website: e.target.value })}
                error={invalidFormFields.includes("website")}
            />
            <InformationAboutOptionality>* Optional</InformationAboutOptionality>
        </>
    );
};

export default EmailFormSubsection1;
