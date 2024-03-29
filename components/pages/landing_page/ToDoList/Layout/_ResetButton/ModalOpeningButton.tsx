// Tools
import { forwardRef } from "react";
import { SELECTORS } from "../Footer/css_references";
// Material UI Icons
import RestartAltRounded from "@mui/icons-material/RestartAltRounded";
// Other components
import Portal from "@/components/atoms/Portal";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

interface ResetButtonProps {
    disabled?: boolean;
}

const ResetButton = forwardRef<HTMLButtonElement, ResetButtonProps>((props, ref) => {
    return (
        <Portal selector={SELECTORS.RESET_BUTTON}>
            <StyledButton
                componentThemeID="PRIMARY" //
                ref={ref}
                disabled={props.disabled}
                sx={{
                    height: "42px", //
                    alignSelf: "center",
                    padding: "0 48px",
                    "@media (max-width:620px)": {
                        width: "100vw",
                    },
                }}
            >
                <RestartAltRounded />
                <span>Reset tasks and labels</span>
            </StyledButton>
        </Portal>
    );
});

ResetButton.displayName = "ResetButton";

export default ResetButton;
