// Tools
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
import { useSendEmailContext } from "@/components/pages/landing_page/Contact/content/SendMeAnEmail/hooks/useSendEmailContext";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Material UI Icons
import Check from "@mui/icons-material/Check";
import Close from "@mui/icons-material/Close";
// Other components
import ButtonWIthTooltip from "../../_utils_components/ButtonWithTooltip";
// Styled Components
import { Divider } from "../_styled_components";

const PendingFeignedPart: FunctionComponent<MUIStyledCommonProps> = (props) => {
    const { updateRequest } = useSendEmailContext();

    return (
        <>
            <Divider />
            <div>
                <ButtonWIthTooltip
                    color="success" //
                    icon={<Check />}
                    tooltip="Fake successful request"
                    onClick={() => updateRequest({ status: "success_but_feigned" })}
                    sx={{
                        animation: `${fadeSimple} .2s .3s linear both `,
                    }}
                />{" "}
                <ButtonWIthTooltip
                    color="error" //
                    icon={<Close />}
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
