// Tools
import { styled } from "@mui/material";
import { CSS_REFERENCES } from "../css_reference";
import { fadeFromTop } from "@/components/keyframes/intro";
import { useFormContext } from "@/components/pages/landing_page/Contact/hooks/useFormContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import CountryInput from "./CountryInput";
import OptionalPropertyIndicator from "components/atoms/forms/OptionalPropertyIndicator";
// Styled Components
import StyledInput from "@/components/atoms/forms/StyledInput";

const InformationAboutOptionality = styled("div")(({ theme }) => ({
    position: "relative",
    fontSize: "14px",
    animation: `${fadeFromTop} .2s .6s linear backwards`,
    fontWeight: 300,
    userSelect: "none",
    paddingTop: "6px",
    paddingLeft: "18px",
}));

const EmailFormSubsection1: FunctionComponent<{ color: "primary" | "secondary" }> = (props) => {
    const { form, updateForm, invalidFormFields } = useFormContext();

    return (
        <>
            <div className={CSS_REFERENCES.CONTENT_ITEM}>
                <CountryInput
                    value={form.country} //
                    onChange={(val) => updateForm({ country: val })}
                    error={form.country !== null && invalidFormFields.includes("country")}
                    color={props.color}
                />
            </div>

            <div className={CSS_REFERENCES.CONTENT_ITEM}>
                <StyledInput
                    label="Email" //
                    color={props.color}
                    type="email"
                    value={form.email}
                    onChange={(e) => updateForm({ email: e.target.value })}
                    error={form.email !== "" && invalidFormFields.includes("email")}
                    componentThemeID="TEXT_PRIMARY"
                />
            </div>

            <div className={CSS_REFERENCES.CONTENT_ITEM}>
                <OptionalPropertyIndicator />

                <StyledInput
                    label="LinkedIn (optional)" //
                    color={props.color}
                    value={form.linkedIn}
                    onChange={(e) => updateForm({ linkedIn: e.target.value })}
                    error={invalidFormFields.includes("linkedIn")}
                    componentThemeID="TEXT_PRIMARY"
                />
            </div>

            <div className={CSS_REFERENCES.CONTENT_ITEM}>
                <OptionalPropertyIndicator />

                <StyledInput
                    label="Website (optional)" //
                    color={props.color}
                    value={form.website}
                    onChange={(e) => updateForm({ website: e.target.value })}
                    error={invalidFormFields.includes("website")}
                    componentThemeID="TEXT_PRIMARY"
                />
            </div>

            <InformationAboutOptionality>
                <OptionalPropertyIndicator />
                <span>- Optional property</span>
            </InformationAboutOptionality>
        </>
    );
};

export default EmailFormSubsection1;
