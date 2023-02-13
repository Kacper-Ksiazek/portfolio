// Tools
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
import { useSendEmailContext } from "@/components/pages/landing_page/Contact/content/SendMeAnEmail/hooks/useSendEmailContext";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Material UI Icons
import CodeOff from "@mui/icons-material/CodeOff";
// Other components
import ButtonWithTooltip from "../../_utils_components/ButtonWithTooltip";
// Styled Components
import { Divider } from "../_styled_components";

const PendingFeignedPart: FunctionComponent<MUIStyledCommonProps> = (props) => {
    const { updateRequest } = useSendEmailContext();

    return (
        <>
            <Divider />
            <div>
                <ButtonWithTooltip
                    color="success" //
                    icon={<CodeOff />}
                    tooltip="Fake successful request"
                    onClick={() => updateRequest({ status: "success_but_feigned" })}
                    sx={{
                        animation: `${fadeSimple} .2s .3s linear both `,
                    }}
                />{" "}
                <ButtonWithTooltip
                    color="error" //
                    icon={<CodeOff />}
                    tooltip="Fake rejected request"
                    onClick={() => updateRequest({ status: "error_but_feigned" })}
                    sx={{
                        animation: `${fadeSimple} .2s .4s linear both `,
                    }}
                />
            </div>
        </>
    );
};

export default PendingFeignedPart;
