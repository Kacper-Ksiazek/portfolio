// Types
import type { CV } from "@/@types/pages/CV";
// Other components
import StyledButton from "@/components/atoms/forms/StyledButton";
// MUI Icons
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import RowWithLabel from "../_RowWithLabel";

interface PickColorThemeProps {
    value: CV.Variant;
    setValue: React.Dispatch<React.SetStateAction<CV.Variant>>;
}

const OPTIONS: { option: CV.Variant; icon: React.ReactElement }[] = [
    { option: "light", icon: <LightModeRoundedIcon /> },
    { option: "dark", icon: <DarkModeRoundedIcon /> },
];

const PickColorTheme: React.FunctionComponent<PickColorThemeProps> = (props) => {
    function handleOnClick(value: CV.Variant) {
        props.setValue(value);
    }

    return (
        <RowWithLabel label="Theme:">
            {OPTIONS.map((item, index) => {
                return (
                    <StyledButton
                        key={item.option} //
                        iconButton
                        componentThemeID={item.option === props.value ? "PRIMARY" : "TEXT_PRIMARY"}
                        subtleHoverEffect
                        sx={{
                            width: "52px", //
                            height: "52px !important",
                            svg: {
                                fontSize: "32px",
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
