// Tools
import { useCVContext } from "@/hooks/pages/cv/useCVContext";
// Types
import type { CV } from "@/@types/pages/CV";
// Other components
import StyledButton from "@/components/atoms/forms/StyledButton";
// MUI Icons
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import RowWithLabel from "../../_RowWithLabel";

const OPTIONS: { option: CV.Variant; icon: React.ReactElement }[] = [
    { option: "light", icon: <LightModeRoundedIcon /> },
    { option: "dark", icon: <DarkModeRoundedIcon /> },
];

const PickColorTheme: React.FunctionComponent = () => {
    const { cvToDownload, updateCVToDownload } = useCVContext();

    function handleOnClick(variant: CV.Variant) {
        updateCVToDownload({ variant });
    }

    return (
        <RowWithLabel label="Theme:">
            {OPTIONS.map((item, index) => {
                return (
                    <StyledButton
                        key={item.option} //
                        iconButton
                        componentThemeID={item.option === cvToDownload.variant ? "PRIMARY" : "TEXT_PRIMARY"}
                        subtleHoverEffect
                        sx={{
                            width: "52px", //
                            height: "52px !important",
                            svg: {
                                fontSize: "32px",
                            },
                            "@media (max-width:1000px)": {
                                width: "56px",
                                height: "56px !important",
                                svg: {
                                    fontSize: "36px",
                                },
                            },
                        }}
                        onClick={() => handleOnClick(item.option)}
                    >
                        {item.icon}
                    </StyledButton>
                );
            })}
        </RowWithLabel>
    );
};

export default PickColorTheme;
