// Tools
import { useState } from "react";
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
import type { SingleWayToReachMeProps, ViaEmailAddress } from "./@types";
// Material UI Icons
import ArrowForward from "@mui/icons-material/ArrowForward";
// Other components
import ShowEmailButton from "./email_managing_buttons/ShowEmailButton";
import CopyEmailButton from "./email_managing_buttons/CopyEmailButton";
// Styled components
import SingleWayToReachMeBase from "./styled_components/SingleWayToReachMeBase";

const Text = styled("span")(({ theme }) => ({
    flexGrow: 1,
}));

const RightPointingArrow = styled("span")(({ theme }) => ({
    position: "absolute",
    right: "10%",
    display: "flex",
    alignItems: "center",
    opacity: 0.1,
    svg: {
        fontSize: "2.4rem",
    },
}));

const SingleWayToReachMe: FunctionComponent<SingleWayToReachMeProps> = (props) => {
    const [showEmail, setShowEmail] = useState<boolean>(false);

    const isEmail: boolean = props.via === "EMAIL";

    return (
        <SingleWayToReachMeBase
            className={isEmail ? "" : "clickable"} //
            href={props.via === "PARTICULAR_SERVICE" ? props.url : undefined}
            target="_blank"
        >
            {props.icon}
            <Text>
                {(() => {
                    if (props.via === "PARTICULAR_SERVICE") {
                        return props.url;
                    } else {
                        let hiddenEmail = "";
                        props.email.split("").forEach(() => (hiddenEmail += "*"));
                        return showEmail ? props.email : hiddenEmail;
                    }
                })()}
            </Text>
            {!isEmail && (
                <RightPointingArrow className="right-pointing-arrow">
                    <ArrowForward />
                </RightPointingArrow>
            )}
            {isEmail && <ShowEmailButton showEmail={showEmail} setShowEmail={setShowEmail} />}
            {isEmail && showEmail && <CopyEmailButton emailToCopy={(props as ViaEmailAddress).email} />}
        </SingleWayToReachMeBase>
    );
};

export default SingleWayToReachMe;
