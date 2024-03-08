// Types
import type { CV } from "@/@types/pages/CV";
// Styled Components
import RowWithLabel from "../_RowWithLabel";
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
        <RowWithLabel label="Language:">
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
        </RowWithLabel>
    );
};

export default PickLanguage;
