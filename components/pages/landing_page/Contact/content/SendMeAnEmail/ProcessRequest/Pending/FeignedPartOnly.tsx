// Tools
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
import { useSendEmailContext } from "@/components/pages/landing_page/Contact/content/SendMeAnEmail/hooks/useSendEmailContext";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import CodeOff from "@mui/icons-material/CodeOff";
import ArrowBack from "@mui/icons-material/ArrowBack";
// Other components
import ButtonWithTooltip from "../../_utils_components/ButtonWithTooltip";
// Styled Components
import { Divider } from "../_styled_components";

interface PendingFeignedPartProps {
    goBackToTheForm: () => void;
}

const PendingFeignedPart: FunctionComponent<PendingFeignedPartProps> = (props) => {
    const { updateRequest } = useSendEmailContext();

    return (
        <>
            <Divider />
            <div>
                <ButtonWithTooltip
                    color="error" //
                    icon={<CodeOff />}
                    tooltip="Fake rejected request"
                    onClick={() => updateRequest({ status: "staged_error" })}
                    sx={{
                        animation: `${fadeSimple} .2s .5s linear both `,
                    }}
                />
                <ButtonWithTooltip
                    color="success" //
                    icon={<CodeOff />}
                    tooltip="Fake successful request"
                    onClick={() => updateRequest({ status: "staged_success" })}
                    sx={{
                        animation: `${fadeSimple} .2s .4s linear both `,
                    }}
                />
                <ButtonWithTooltip
                    tooltip="Return to the form" //
                    color="error"
                    onClick={props.goBackToTheForm}
                    icon={<ArrowBack />}
                    sx={{
                        animation: `${fadeSimple} .2s .3s linear both `,
                    }}
                />
            </div>
        </>
    );
};

export default PendingFeignedPart;
