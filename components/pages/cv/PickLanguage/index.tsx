// Types
import type { CV } from "@/@types/pages/CV";
// MUI Components
import Stack from "@mui/material/Stack";
// Styled Components
import LanguageOption from "./LanguageOption";

interface PickLanguageProps {
    value: CV.Language;
    setValue: React.Dispatch<React.SetStateAction<CV.Language>>;
}

function _getImgPath(lang: CV.Language): string {
    return `/images/langs/${lang}.jpg`;
}

const OPTIONS: CV.Language[] = ["en", "pl"];

const PickLanguage: React.FunctionComponent<PickLanguageProps> = (props) => {
    function handleOnClick(language: CV.Language): void {
        props.setValue(language);
    }

    return (
        <Stack direction="row" spacing={"8px"}>
            {OPTIONS.map((language, index) => {
                return (
                    <LanguageOption
                        role="button"
                        key={language} //
                        onClick={() => handleOnClick(language)}
                        className={language === props.value ? "current" : ""}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={_getImgPath(language)} alt={language} />
                    </LanguageOption>
                );
            })}
        </Stack>
    );
};

export default PickLanguage;
