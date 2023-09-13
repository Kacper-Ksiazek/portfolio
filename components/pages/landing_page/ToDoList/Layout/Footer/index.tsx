// Tools
import { CSS_REFERENCES } from "./css_references";
import { stylesWhenVisible } from "./styles_when_visible";
// Types
import type { Release } from "../@types";
import type { FunctionComponent } from "react";
// Other components
import ReleasesToggler from "./ReleaseToggler";
import TransformWhenVisible from "@/components/utils/TransformWhenVisible";
// Styled components
import FooterBase from "./Base";

interface ToDoListFooterProps {
    currentRelease: Release;
    toggleReleases: () => void;
}

const ToDoListFooter: FunctionComponent<ToDoListFooterProps> = (props) => {
    return (
        <TransformWhenVisible to={stylesWhenVisible} sx={{ width: "calc(100vw - 20px)" }}>
            <FooterBase>
                <div id={CSS_REFERENCES.RESET_BUTTON}></div>
                <ReleasesToggler
                    id={CSS_REFERENCES.RELEASES_TOGGLER} //
                    currentRelease={props.currentRelease}
                    toggleReleases={props.toggleReleases}
                />
            </FooterBase>
        </TransformWhenVisible>
    );
};

export default ToDoListFooter;
