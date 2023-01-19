// Tools
import { styled, alpha } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import NavigateNextOutlined from "@mui/icons-material/NavigateNextOutlined";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

const ContinueButtonBase = styled(StyledButton)(({ theme }) => ({
    height: "32px",
    marginBottom: "24px",
    span: {
        marginLeft: "8px",
    },
    "&:disabled": {
        background: alpha("#000", 0.35),
        color: alpha("#fff", 0.3),
        borderColor: "transparent",
    },
}));

interface ContinueButtonProps {
    onClick: () => void;
    disabled: boolean;
}

const ContinueButton: FunctionComponent<ContinueButtonProps> = (props) => {
    return (
        <ContinueButtonBase
            color="success" //
            onClick={props.onClick}
            disabled={!props.disabled}
        >
            <span>Continue</span>
            <NavigateNextOutlined />
        </ContinueButtonBase>
    );
};

export default ContinueButton;
