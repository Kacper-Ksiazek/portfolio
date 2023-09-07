// Tools
import { forwardRef } from "react";
// Material UI Icons
import RestartAltRounded from "@mui/icons-material/RestartAltRounded";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

interface ModalOpeningButtonProps {
    disabled: boolean;
}

const ModalOpeningButton = forwardRef<HTMLButtonElement, ModalOpeningButtonProps>((props, resetTasksButtonRef) => {
    return (
        <StyledButton
            componentThemeID="PRIMARY" //
            ref={resetTasksButtonRef}
            disabled={props.disabled}
            sx={{
                height: "42px", //
                alignSelf: "center",
                marginTop: "64px",
                padding: "0 48px",
                "@media (max-width:62px)": {
                    width: "100vw",
                },
            }}
        >
            <RestartAltRounded />
            <span>Reset tasks and labels</span>
        </StyledButton>
    );
});

ModalOpeningButton.displayName = "ModalOpeningButton";

export default ModalOpeningButton;
