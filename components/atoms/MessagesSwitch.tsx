// Tools
import { useTheme } from "@mui/material";
// Types
import type { Styles } from "@/@types/MUI";
import type { FunctionComponent } from "react";
// Other components
import SmoothConditionalRender from "../utils/SmoothConditionalRender";

type MessageType = "success" | "error" | "default";

interface Message {
    content: string;
    renderIf: boolean;

    color?: MessageType;
}

interface MessageSwitchProps {
    messages: Message[];
}

const MessageSwitch: FunctionComponent<MessageSwitchProps> = (props) => {
    const theme = useTheme();

    function getFontColor(color: MessageType | undefined): Styles {
        if (color === "error") return { color: theme.palette.error.main };
        else if (color === "success") return { color: theme.palette.success.main };

        return {};
    }

    return (
        <>
            {props.messages.map((item, index) => {
                const { content, renderIf, color } = item;

                return (
                    <SmoothConditionalRender
                        key={content} //
                        when={renderIf}
                        styles={getFontColor(color)}
                    >
                        {content}
                    </SmoothConditionalRender>
                );
            })}
        </>
    );
};

export default MessageSwitch;
