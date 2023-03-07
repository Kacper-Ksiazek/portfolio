// Tools
import { styled } from "@mui/material";
import { OPTIONS } from "../options";
// Types
import type { FunctionComponent } from "react";
import type { Dispatch, SetStateAction } from "react";
// Other components
import SingleThemeField from "./SingleThemeField";
// Styled components
const ThemesFieldsWrapper = styled("div")(({ theme }) => ({
    display: "grid",
    position: "relative",
    gridTemplateColumns: "1fr 1fr 1fr",
    maxWidth: "340px",
    width: "calc(100% - 20px)",
    marginTop: "100px",
    gap: "16px",
}));

interface MobileColorThemeSwitchProps {
    closeMobileMenu: () => void;
    setColorThemeMenuIsOpened: Dispatch<SetStateAction<boolean>>;
}

const MobileColorThemeSwitch: FunctionComponent<MobileColorThemeSwitchProps> = (props) => {
    return (
        <ThemesFieldsWrapper>
            {OPTIONS.map((item) => {
                return (
                    <SingleThemeField
                        key={item.value}
                        isActive={false} //
                        icon={item.icon}
                        label={item.label}
                    />
                );
            })}
        </ThemesFieldsWrapper>
    );
};

export default MobileColorThemeSwitch;
