// Tools
import { useRef } from "react";
// Types
import type { FunctionComponent } from "react";
import type { RedirectionProps } from "./@types";
// Material UI Icons
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// Other components
import RedirectionWrapper from "./_RedirectionWrapper";
// Styled components
import RedirectBase from "./_styled_components/RedirectBase";

const ExternalRedirection: FunctionComponent<RedirectionProps> = (props) => {
    const ExternalRedirectionRef = useRef<HTMLButtonElement | null>(null);

    const onClick = () => {
        ExternalRedirectionRef.current?.blur();
    };

    return (
        <RedirectionWrapper tooltip={props.tooltip}>
            <a href={props.url} target="_blank" rel="noreferrer">
                <RedirectBase
                    sx={props.sx} //
                    onClick={onClick}
                    componentThemeID="PRIMARY"
                    ref={ExternalRedirectionRef}
                    className={[props.small ? "small" : "", "redirect", props.className].join(" ")}
                >
                    {props.children}
                    <KeyboardArrowRight className="right-arrow" />
                </RedirectBase>
            </a>
        </RedirectionWrapper>
    );
};

export default ExternalRedirection;
