// Tools
import { useCVContext } from "@/hooks/pages/cv/useCVContext";
// Types
import type { CV } from "@/@types/pages/CV";
// Styled Components
import RowWithLabel from "../../_RowWithLabel";
import LanguageOption from "./LanguageOption";

function _getImgPath(lang: CV.Language): string {
    return `/images/langs/${lang}.jpg`;
}

const OPTIONS: CV.Language[] = ["en", "pl"];

const PickLanguage: React.FunctionComponent = () => {
    const { cvToDownload, updateCVToDownload } = useCVContext();

    function handleOnClick(lang: CV.Language): void {
        updateCVToDownload({ lang });
    }

    return (
        <RowWithLabel label="Language:">
            {OPTIONS.map((language, index) => {
                return (
                    <LanguageOption
                        role="button"
                        key={language} //
                        onClick={() => handleOnClick(language)}
                        className={language === cvToDownload.lang ? "current" : ""}
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
