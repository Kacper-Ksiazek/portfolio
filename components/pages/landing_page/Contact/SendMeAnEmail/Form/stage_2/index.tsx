// Tools
import { useEffect } from "react";
import { styled } from "@mui/system";
import fadeFromTop from "@/components/_keyframes/intro/fadeFromTop";
import fadeFromLeft from "@/components/_keyframes/intro/fadeFromLeft";
import useFormStageTwo from "@/components/pages/landing_page/Contact/SendMeAnEmail/hooks/useFormStageTwo";
import useManagementContext from "@/components/pages/landing_page/Contact/SendMeAnEmail/hooks/useManagementContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import CountryInput from "./CountryInput";
// Styled Components
import StyledInput from "@/components/pages/landing_page/Contact/SendMeAnEmail/_styled_components/StyledInput";

const InformationAboutOptionality = styled("span")(({ theme }) => ({
    fontSize: "14px",
    marginTop: "16px",
    animation: `${fadeFromTop} .2s .6s linear both`,
    fontWeight: 300,
    userSelect: "none",
}));

const FormStage1: FunctionComponent = (props) => {
    const { everythingIsValid, ...formStageTwoContext } = useFormStageTwo();
    const { setBlockContinueButton } = useManagementContext();

    useEffect(() => {
        setBlockContinueButton(!everythingIsValid);
    }, [everythingIsValid, setBlockContinueButton]);

    return (
        <>
            <CountryInput
                value={formStageTwoContext.country} //
                onChange={(val) => formStageTwoContext.setCountry(val)}
                error={formStageTwoContext.countryIsInvalid}
                sx={{
                    animation: `${fadeFromLeft} .2s .2s linear both`,
                }}
            />
            <StyledInput
                label="Email" //
                color="secondary"
                type="email"
                value={formStageTwoContext.email}
                onChange={(e) => formStageTwoContext.setEmail(e.target.value)}
                error={formStageTwoContext.emailIsInvalid}
                sx={{
                    animation: `${fadeFromLeft} .2s .3s linear both`,
                }}
            />
            <StyledInput
                label="Github*" //
                color="secondary"
                value={formStageTwoContext.github}
                onChange={(e) => formStageTwoContext.setGithub(e.target.value)}
                error={formStageTwoContext.githubIsInvalid}
                sx={{
                    animation: `${fadeFromLeft} .2s .4s linear both`,
                }}
            />
            <StyledInput
                label="Website*" //
                color="secondary"
                value={formStageTwoContext.website}
                onChange={(e) => formStageTwoContext.setWebsite(e.target.value)}
                error={formStageTwoContext.websiteIsInvalid}
                sx={{
                    animation: `${fadeFromLeft} .2s .5s linear both`,
                }}
            />
            <InformationAboutOptionality>* Optional</InformationAboutOptionality>
        </>
    );
};

export default FormStage1;
