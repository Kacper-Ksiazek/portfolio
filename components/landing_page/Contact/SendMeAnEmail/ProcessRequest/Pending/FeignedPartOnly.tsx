// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/_keyframes/fadeSimple";
import useSendMeAnEmailContext from "../../hooks/useSendMeAnEmailContext";
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
    const { status } = useSendMeAnEmailContext();

    return (
        <>
            <Divider />
            <SimpleFlexBox>
                <ButtonWIthTooltip
                    color="success" //
                    icon={<Check />}
                    tooltip="Feign success scenario"
                    onClick={() => status.setValue("success_but_feigned")}
                    sx={{
                        animation: `${fadeSimple} .2s .3s linear both `,
                    }}
                />{" "}
                <ButtonWIthTooltip
                    color="error" //
                    icon={<Close />}
                    tooltip="Feign success scenario"
                    onClick={() => status.setValue("error_but_feigned")}
                    sx={{
                        animation: `${fadeSimple} .2s .4s linear both `,
                    }}
                />
            </SimpleFlexBox>
        </>
    );
};

export default PendingFeignedPart;