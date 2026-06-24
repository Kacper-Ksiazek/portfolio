// Tools
import { styled } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import WarningAmberRounded from "@mui/icons-material/WarningAmberRounded";

const Banner = styled("aside")(({ theme }) => ({
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    padding: "14px 20px",
    boxSizing: "border-box",
    backgroundColor: "#FFC107",
    color: "#1a1200",
    boxShadow: "0 -4px 24px rgba(0, 0, 0, 0.25)",
    borderTop: "3px solid #F57F17",
    fontSize: "15px",
    fontWeight: 600,
    lineHeight: 1.45,
    textAlign: "center",
    userSelect: "none",
    pointerEvents: "none",
    ".deprecation-banner__icon": {
        flexShrink: 0,
        fontSize: "28px",
        color: "#E65100",
    },
    ".deprecation-banner__text": {
        maxWidth: "960px",
    },
    ".deprecation-banner__highlight": {
        fontWeight: 800,
    },
    ["@media (max-width:500px)"]: {
        flexDirection: "column",
        gap: "8px",
        padding: "12px 16px",
        fontSize: "13px",
        ".deprecation-banner__icon": {
            fontSize: "24px",
        },
    },
}));

const DeprecationBanner: FunctionComponent = () => {
    return (
        <Banner role="status" aria-live="polite">
            <WarningAmberRounded className="deprecation-banner__icon" aria-hidden="true" />
            <p className="deprecation-banner__text">
                <span className="deprecation-banner__highlight">Deprecated portfolio</span> — this site was used in{" "}
                <span className="deprecation-banner__highlight">2022–2024</span> and is no longer updated. 100% of the code
                here was hand-written before AI was popularized :D
            </p>
        </Banner>
    );
};

export default DeprecationBanner;
