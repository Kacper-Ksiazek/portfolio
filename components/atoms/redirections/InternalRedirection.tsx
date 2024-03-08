// Types
import type { FunctionComponent } from "react";
import type { RedirectionProps } from "./@types";
// Material UI Icons
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// Other components
import Link from "next/link";
import RedirectionWrapper from "./_RedirectionWrapper";
// Styled components
import RedirectBase from "./_styled_components/RedirectBase";

const InternalRedirection: FunctionComponent<RedirectionProps> = (props) => {
    return (
        <RedirectionWrapper tooltip={props.tooltip}>
            <Link href={props.url} passHref>
                <RedirectBase
                    componentThemeID={props.componentThemeID ?? "PRIMARY"} //
                    className={[props.small ? "small" : "", "redirect", props.className].join(" ")}
                    sx={props.sx}
                >
                    {props.reverseArrow && <KeyboardArrowLeft className="right-arrow" />}
                    {props.children}
                    {props.reverseArrow !== true && <KeyboardArrowRight className="right-arrow" />}
                </RedirectBase>
            </Link>
        </RedirectionWrapper>
    );
};

export default InternalRedirection;
