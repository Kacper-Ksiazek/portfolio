// Tools
import { styled } from "@mui/system";
import fadeFromTop from "@/components/keyframes/intro/fadeFromTop";
import fadeFromLeft from "@/components/keyframes/intro/fadeFromLeft";
import { useSendEmailContext } from "@/components/pages/landing_page/Contact/SendMeAnEmail/hooks/useSendEmailContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import CountryInput from "./CountryInput";
// Styled Components
import StyledInput from "@/components/pages/landing_page/Contact/SendMeAnEmail/_styled_components/StyledInput";

const InformationAboutOptionality = styled("span")(({ theme }) => ({
    fontSize: "14px",
    marginTop: "16px",
    animation: `${fadeFromTop} .2s .6s linear backwards`,
    fontWeight: 300,
    userSelect: "none",
}));

const FormStage1: FunctionComponent = (props) => {
    const { form, updateForm, invalidFormFields } = useSendEmailContext();

    return (
        <>
            <CountryInput
                value={form.country} //
                onChange={(val) => updateForm({ country: val })}
                error={invalidFormFields.includes("country")}
                sx={{
                    animation: `${fadeFromLeft} .2s .2s linear backwards`,
                }}
            />
            <StyledInput
                label="Email" //
                color="secondary"
                type="email"
                value={form.email}
                onChange={(e) => updateForm({ email: e.target.value })}
                error={invalidFormFields.includes("email")}
                sx={{
                    animation: `${fadeFromLeft} .2s .3s linear backwards`,
                }}
            />
            <StyledInput
                label="Github*" //
                color="secondary"
                value={form.github}
                onChange={(e) => updateForm({ github: e.target.value })}
                error={invalidFormFields.includes("github")}
                sx={{
                    animation: `${fadeFromLeft} .2s .4s linear backwards`,
                }}
            />
            <StyledInput
                label="Website*" //
                color="secondary"
                value={form.website}
                onChange={(e) => updateForm({ website: e.target.value })}
                error={invalidFormFields.includes("website")}
                sx={{
                    animation: `${fadeFromLeft} .2s .5s linear backwards`,
                }}
            />
            <InformationAboutOptionality>* Optional</InformationAboutOptionality>
        </>
    );
};

export default FormStage1;
