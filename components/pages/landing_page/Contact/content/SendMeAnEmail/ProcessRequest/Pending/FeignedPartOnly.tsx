// Tools
import { fadeSimple } from "@/components/keyframes/intro";
import { useRequestContext } from "@/components/pages/landing_page/Contact/content/SendMeAnEmail/hooks/useRequestContext";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import CodeOff from "@mui/icons-material/CodeOff";
import ArrowBack from "@mui/icons-material/ArrowBack";
// Other components
import ButtonWithTooltip from "@/components/atoms/forms/ButtonWithTooltip";
// Styled Components
import { Divider } from "../_styled_components";

interface PendingFeignedPartProps {
    goBackToTheForm: () => void;
}

const PendingFeignedPart: FunctionComponent<PendingFeignedPartProps> = (props) => {
    const { updateRequest } = useRequestContext();

    return (
        <>
            <Divider />
            <div>
                <ButtonWithTooltip
                    icon={<CodeOff />} //
                    componentThemeID="ERROR"
                    tooltip="Fake rejected request"
                    onClick={() => updateRequest({ status: "staged_error" })}
                    sx={{
                        animation: `${fadeSimple} .2s .5s linear both `,
                    }}
                />
                <ButtonWithTooltip
                    icon={<CodeOff />} //
                    componentThemeID="SUCCESS"
                    tooltip="Fake successful request"
                    onClick={() => updateRequest({ status: "staged_success" })}
                    sx={{
                        animation: `${fadeSimple} .2s .4s linear both `,
                    }}
                />
                <ButtonWithTooltip
                    icon={<ArrowBack />} //
                    componentThemeID="ERROR"
                    tooltip="Return to the form"
                    onClick={props.goBackToTheForm}
                    sx={{
                        animation: `${fadeSimple} .2s .3s linear both `,
                    }}
                />
            </div>
        </>
    );
};

export default PendingFeignedPart;
