// Tools
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { Release } from "../@types";
import type { FunctionComponent } from "react";
// Styled components
import { HeaderElementBase, type HeaderElementProps } from "./Base";

const AVAILABLE_DESCRIPTIONS: Record<Release, string> = {
    legacy: `The *original version* was much simpler, a basic to-do list app with no frills. After completing it, I didn't feel a sense of pride, because I wanted *every piece* of my portfolio to truly shine and be *exceptional.`,
    //
    "2023": `I rebuilt it from scratch, as a hobby, *alongside my first year at university*. It's a *customizable* and complex app, but not overly intricate. I poured *a lot of effort* into this seemingly simple app, introducing *many interesting features*.`,
};

const Description: FunctionComponent<HeaderElementProps> = (props) => {
    return (
        <HeaderElementBase isChanging={props.isChanging}>
            {formatTextViaBolding(AVAILABLE_DESCRIPTIONS[props.currentRelease])}
            {/*  */}
        </HeaderElementBase>
    );
};

export default Description