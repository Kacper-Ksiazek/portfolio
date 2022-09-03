// Tools
import { hiddenURL } from "./utils/hiddenURL";
import { forwardRef } from "react";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import ClickabilityIndicatingArrow from "./ClickabilityIndicatingArrow";
// Styled components
import SingleWayToReachMeText from "./styled_components/SingleWayToReachMeText";
import SingleWayToReachMeBase from "./styled_components/SingleWayToReachMeBase";

interface SingleWayToReachMeProps {
    url: string;
    icon: ReactNode;
    /** The received `url` would be opened in new tab after click at any place on the card. */
    redirectAfterClick?: boolean;
    /** Instead of url the dots would be displayed */
    hideURL?: boolean;

    children?: ReactNode;
}

const SingleWayToReachMe = forwardRef<HTMLDivElement, SingleWayToReachMeProps>((props, ref) => {
    const { icon, url, children, hideURL, redirectAfterClick, ...forwardRefProps } = props;

    const onClick = () => {
        if (redirectAfterClick && window) {
            (window.open(url, "_blank") as any).focus();
        }
    };

    return (
        <SingleWayToReachMeBase
            role={redirectAfterClick ? "button" : "cell"}
            onClick={onClick}
            ref={ref}
            {...forwardRefProps}
            className={[
                (forwardRefProps as any).className ? (forwardRefProps as any).className : "", //
                redirectAfterClick ? "clickable" : "",
            ].join(" ")} //
        >
            {icon}
            <SingleWayToReachMeText>{hiddenURL({ text: url, hide: hideURL ?? false })}</SingleWayToReachMeText>
            {redirectAfterClick && <ClickabilityIndicatingArrow />}

            {children}
        </SingleWayToReachMeBase>
    );
});

SingleWayToReachMe.displayName = "SingleWayToReachMe";
export default SingleWayToReachMe;
