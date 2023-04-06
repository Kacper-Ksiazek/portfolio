// Tools
import { Box, alpha, styled } from "@mui/material";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Other components
const MenuActionButtonBase = styled("button")(({ theme }) => ({
    ...theme.mixins.flex_center,
    padding: "0",
    width: "32px",
    height: "32px",
    fontSize: "14px",
    background: theme.palette.background.lightSectionBackground,
    border: "none",
    color: alpha("#fff", 0.8),
    letterSpacing: "1px",
    boxSizing: "border-box",
    svg: {
        fontSize: "24px",
    },
    cursor: "pointer",
    borderRadius: "3px",
    transition: "all .3s",
    "&:hover": {
        color: "#fff",
        background: theme.palette.primary.main,
    },
    ".label": {
        display: "none",
    },
    "@media (max-width:1000px)": {
        ".label": {
            display: "block",
        },
        width: "140px",
        justifyContent: "flex-start",
        padding: "0 8px",
        svg: {
            marginRight: "6px",
        },
    },
}));

interface MenuActionButtonProps {
    icon: ReactNode;
    label: string;
    color?: "default" | "error";
    onClick: () => void;
}

const MenuActionButton: FunctionComponent<MenuActionButtonProps> = (props) => {
    return (
        <Tooltip title={props.label} placement="right">
            <Box
                sx={{
                    "&:not(&:nth-of-type(1))": {
                        marginTop: "6px",
                    },
                }}
                component="span"
            >
                <MenuActionButtonBase
                    sx={(theme) => (props.color === "error" ? { background: theme.palette.error.main } : new Object())} //
                    onClick={props.onClick}
                >
                    {props.icon}
                    <span className="label">{props.label}</span>
                </MenuActionButtonBase>
            </Box>
        </Tooltip>
    );
};

MenuActionButton.defaultProps = {
    color: "default",
};

export default MenuActionButton;
