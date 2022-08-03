// Types
import type { SxProps } from "@mui/system";

export default {
    ["@media (max-width:1400px)"]: {
        "#content-main-wrapper": {
            width: "calc(55% - 32px)",
        },
        "#picture-main-wrapper": {
            width: "calc(45% - 32px)",
            "#picture-direct-wrapper": {
                height: "380px",
                width: "calc(100% - 20px)",
                "span.left-horizontal, span.left-vertical": {
                    bottom: "-10px",
                    left: "-10px",
                },
                "span.right-horizontal, span.right-vertical": {
                    top: "-10px",
                    right: "-10px",
                },
                "span.left-horizontal, span.right-horizontal": {
                    height: "10px",
                },
                "span.left-vertical, span.right-vertical": {
                    width: "10px",
                },
            },
        },
    },
    ["@media (max-width:1220px)"]: {
        "#content-main-wrapper": {
            width: "calc(55% - 16px)",
        },
        "#picture-main-wrapper": {
            width: "calc(45% - 16px)",
            "#picture-direct-wrapper": {
                height: "320px",
                width: "calc(100% - 16px)",
                "span.left-horizontal, span.left-vertical": {
                    bottom: "-8px",
                    left: "-8px",
                },
                "span.right-horizontal, span.right-vertical": {
                    top: "-8px",
                    right: "-8px",
                },
                "span.left-horizontal, span.right-horizontal": {
                    height: "8px",
                },
                "span.left-vertical, span.right-vertical": {
                    width: "8px",
                },
            },
        },
    },
    ["@media (max-width:1100px)"]: {
        "#content-main-wrapper": {
            width: "calc(60% - 16px)",
        },
        "#picture-main-wrapper": {
            width: "calc(40% - 16px)",
            "#picture-direct-wrapper": {
                height: "240px",
            },
        },
    },
    ["@media (max-width:1000px)"]: {
        flexDirection: "column-reverse",
        "#content-main-wrapper, #picture-main-wrapper": {
            width: "100%",
        },
        "#picture-main-wrapper": {
            height: "500px",
            marginBottom: "50px",
            "#picture-direct-wrapper": {
                maxWidth: "100%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                height: "calc(100% - 20px)",
                width: "calc(100% - 20px)",
                "span.left-horizontal, span.left-vertical": {
                    bottom: "-10px",
                    left: "-10px",
                },
                "span.right-horizontal, span.right-vertical": {
                    top: "-10px",
                    right: "-10px",
                },
                "span.left-horizontal, span.right-horizontal": {
                    height: "10px",
                },
                "span.left-vertical, span.right-vertical": {
                    width: "10px",
                },
            },
        },
    },
    ["@media (max-width:900px)"]: {
        "#picture-main-wrapper": {
            height: "450px",
            marginBottom: "32px",
        },
    },
    ["@media (max-width:800px)"]: {
        "#picture-main-wrapper": {
            height: "400px",
            marginBottom: "32px",
        },
    },
    ["@media (max-width:600px)"]: {
        "#picture-main-wrapper": {
            height: "350px",
            marginBottom: "32px",
            "#picture-direct-wrapper": {
                width: "calc(100% - 16px)",
                "span.left-horizontal, span.left-vertical": {
                    bottom: "-8px",
                    left: "-8px",
                },
                "span.right-horizontal, span.right-vertical": {
                    top: "-8px",
                    right: "-8px",
                },
                "span.left-horizontal, span.right-horizontal": {
                    height: "8px",
                },
                "span.left-vertical, span.right-vertical": {
                    width: "8px",
                },
            },
        },
    },
    ["@media (max-width:500px)"]: {
        "#picture-main-wrapper": {
            height: "300px",
        },
    },
    ["@media (max-width:400px)"]: {
        "#picture-main-wrapper": {
            height: "250px",
        },
    },
} as SxProps;
