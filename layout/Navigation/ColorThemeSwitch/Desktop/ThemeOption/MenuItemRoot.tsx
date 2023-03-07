// Types
import type { FunctionComponent } from "react";

import { ConnectionBar } from "./styled_components";

type Edge = "root_start" | "root_end";

interface MenuItemRootProps {
    menuItemIndex: number;
}

const MenuItemRoot: FunctionComponent<MenuItemRootProps> = (props) => {
    const CSSOrderClass = `menu-element-${props.menuItemIndex}`;

    return (
        <ConnectionBar.MainRoot className="main-root">
            <ConnectionBar.EdgeDot
                className={`main-root-edge-dot ${(props.menuItemIndex === 0 ? "root_start" : "root_end") as Edge}`} //
            />

            <ConnectionBar.MiddleDot className="middle-dot" />
            <ConnectionBar.LinkToTheElement className={`link-to-the-element ${CSSOrderClass}`}>
                <ConnectionBar.EdgeDot className="link-to-the-element-end-dot" />
            </ConnectionBar.LinkToTheElement>
        </ConnectionBar.MainRoot>
    );
};

export default MenuItemRoot;
