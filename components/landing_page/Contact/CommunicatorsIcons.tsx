// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Styled Components
const CommunicatorsIconsWrapper = styled("div")(({ theme }) => ({
    marginTop: "20px",
    background: "#e2e2e2",
}));

const CommunicatorsIcons: FunctionComponent<MUIStyledCommonProps> = (props) => {
    return (
        <CommunicatorsIconsWrapper>
            <span>icons</span>
        </CommunicatorsIconsWrapper>
    );
};

export default CommunicatorsIcons;
