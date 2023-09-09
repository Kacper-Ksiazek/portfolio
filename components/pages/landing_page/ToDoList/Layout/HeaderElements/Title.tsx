// Types
import type { Release } from "../@types";
import type { FunctionComponent } from "react";
// Styled components
import { HeaderElementBase, type HeaderElementProps } from "./Base";

const prefix :string = "React to do list"
const AVAILABLE_TITLES: Record<Release, string> = {
    legacy: `${prefix}- LEGACY`,
    "2023": `${prefix}- 2023`,
};

const Title: FunctionComponent<HeaderElementProps> = (props) => {
    return (
        <HeaderElementBase isChanging={props.isChanging}>
            {AVAILABLE_TITLES [props.currentRelease]}
            {/*  */}
        </HeaderElementBase>
    );
};

export default Title