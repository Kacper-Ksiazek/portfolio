// Tools
import { styled } from "@mui/material";
import { fadeFromTop } from "@/components/keyframes/intro";
import { useFormContext } from "@/components/pages/landing_page/Contact/hooks/useFormContext";
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

const EmailFormSubsection1: FunctionComponent = () => {
    const { form, updateForm, invalidFormFields } = useFormContext();

    return (
        <>
            <CountryInput
                value={form.country} //
                onChange={(val) => updateForm({ country: val })}
                error={form.country !== null && invalidFormFields.includes("country")}
            />
            <StyledInput
                label="Email" //
                color="secondary"
                type="email"
                value={form.email}
                onChange={(e) => updateForm({ email: e.target.value })}
                error={form.email !== "" && invalidFormFields.includes("email")}
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
