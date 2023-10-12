// Tools
import { CSS_REFERENCES } from "../css_reference";
import restrictions from "@/utils/restrictions/sendEmailForm";
import { useFormContext } from "@/components/pages/landing_page/Contact/hooks/useFormContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import LengthIndicator from "@/components/atoms/forms/LengthIndicator";
// Styled Components
import StyledInput from "@/components/atoms/forms/StyledInput";

const EmailFormSubsection1: FunctionComponent<{ color: "primary" | "secondary" }> = (props) => {
    const { form, updateForm, invalidFormFields } = useFormContext();

    return (
        <>
            <div className={CSS_REFERENCES.CONTENT_ITEM}>
                <div className={CSS_REFERENCES.LINE_ANIMATION_CONTAINER}>
                    <StyledInput
                        label="Your name" //
                        color={props.color}
                        value={form.author}
                        onChange={(e) => updateForm({ author: e.target.value })}
                        error={form.author !== "" && invalidFormFields.includes("author")}
                        componentThemeID="TEXT_PRIMARY"
                    />
                </div>
                <LengthIndicator
                    currentLength={form.author.length} //
                    max={restrictions.author.max}
                    min={restrictions.author.min}
                    optional
                />
            </div>

            <div className={CSS_REFERENCES.CONTENT_ITEM}>
                <div className={CSS_REFERENCES.LINE_ANIMATION_CONTAINER}>
                    <StyledInput
                        label="Subject" //
                        color={props.color}
                        value={form.subject}
                        onChange={(e) => updateForm({ subject: e.target.value })}
                        error={form.subject !== "" && invalidFormFields.includes("subject")}
                        componentThemeID="TEXT_PRIMARY"
                    />
                </div>

                <LengthIndicator
                    currentLength={form.subject.length} //
                    max={restrictions.subject.max}
                    min={restrictions.subject.min}
                    optional
                />
            </div>

            <div className={CSS_REFERENCES.CONTENT_ITEM}>
                <div className={CSS_REFERENCES.LINE_ANIMATION_CONTAINER}>
                    <StyledInput
                        label="Message" //
                        color={props.color}
                        multiline
                        rows={4}
                        value={form.message}
                        onChange={(e) => updateForm({ message: e.target.value })}
                        error={form.message !== "" && invalidFormFields.includes("message")}
                        componentThemeID="TEXT_PRIMARY"
                    />
                </div>

                <LengthIndicator
                    currentLength={form.message.length} //
                    max={restrictions.message.max}
                    min={restrictions.message.min}
                    optional
                />
            </div>
        </>
    );
};

export default EmailFormSubsection1;
