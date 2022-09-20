// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
import useManagementContext from "@/components/pages/landing_page/Contact/SendMeAnEmail/hooks/useManagementContext";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Material UI Icons
import Check from "@mui/icons-material/Check";
import Close from "@mui/icons-material/Close";
// Other components
import ButtonWIthTooltip from "../../_utils_components/ButtonWIthTooltip";
// Styled Components
import Divider from "../../_styled_components/Divider";

const SimpleFlexBox = styled("div")(({ theme }) => ({
    display: "flex",
}));

const PendingFeignedPart: FunctionComponent<MUIStyledCommonProps> = (props) => {
    const { setRequestStatus } = useManagementContext();

    return (
        <>
            <Divider />
            <SimpleFlexBox>
                <ButtonWIthTooltip
                    color="success" //
                    icon={<Check />}
                    tooltip="Feign success scenario"
                    onClick={() => setRequestStatus("success_but_feigned")}
                    sx={{
                        animation: `${fadeSimple} .2s .3s linear both `,
                    }}
                />{" "}
                <ButtonWIthTooltip
                    color="error" //
                    icon={<Close />}
                    tooltip="Feign success scenario"
                    onClick={() => setRequestStatus("error_but_feigned")}
                    sx={{
                        animation: `${fadeSimple} .2s .4s linear both `,
                    }}
                />
            </SimpleFlexBox>
        </>
    );
};

export default PendingFeignedPart;
