// Tools
import { styled } from "@mui/system";
import above_1600px from "./rwd/above_1641px";
import between_1501px_and_1640px from "./rwd/between_1501px_and_1640px";
import between_1351px_and_1500px from "./rwd/between_1351px_and_1500px";
import between_1151px_and_1350px from "./rwd/between_1151px_and_1350px";
// Styled components
export default styled("div")(({ theme }) => ({
    position: "absolute",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: 14,
    //
    ["@media (min-width:1641px)"]: {
        ...(above_1600px as any),
    },
    ["@media (min-width:1501px) and (max-width: 1640px)"]: {
        ...(between_1501px_and_1640px as any),
    },
    ["@media (min-width:1351px) and (max-width: 1500px)"]: {
        ...(between_1351px_and_1500px as any),
    },
    ["@media (min-width:1151px) and (max-width: 1351px)"]: {
        ...(between_1151px_and_1350px as any),
    },
    ["@media (max-width:1150px)"]: {
        display: "none",
    },
}));
