// Tools
import { styled } from "@mui/material";
// Styled components
interface SingleNavigationStepProps {
    selected: boolean;
    preventFromBeingClick: boolean;
}

export default styled("div", {
    shouldForwardProp: (prop: string) => !(["preventFromBeingClick", "selected"] as (keyof SingleNavigationStepProps)[]).includes(prop as any),
})<SingleNavigationStepProps>(({ theme, ...props }) => ({
    fontWeight: 500,
    fontSize: "18px",
    position: "relative",
    overflow: "hidden",
    padding: "0 10px",
    transition: "background .2s",
    borderRadius: "3px",
    cursor: "default",
    "&:before": {
        content: "''",
        position: "absolute",
        top: "0",
        left: "0",
        background: theme.palette.secondary.main,
        width: "100%",
        height: "100%",
        transition: "transform .2s, background .3s",
        transform: "translateY(00%)",
    },
    "&:nth-of-type(even)": {
        "&:before": {
            transform: "translateY(-100%)",
        },
    },
    "&:nth-of-type(odd)": {
        "&:before": {
            transform: "translateY(100%)",
        },
    },
    "span.text": {
        position: "relative",
        zIndex: 1,
        transition: "color .2s",
    },

    ...(props.selected && {
        background: theme.palette.primary.main,
        "span.text": {
            color: "#fff",
        },
        "&:before": {
            background: theme.palette.primary.main,
        },
    }),

    ...(props.preventFromBeingClick === false && {
        cursor: "pointer",
        "&:hover": {
            "span.text": {
                color: "#fff",
            },
            "&:before": {
                transform: "translateY(0%)",
            },
        },
    }),
}));
