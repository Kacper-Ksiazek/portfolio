// Tools
import { styled } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
import fadeSimpleOUT from "@/components/keyframes/outro/fadeSimpleOUT";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    marginTop: "16px",
    width: "100%",
    "&.features-intro": {
        transition: "max-height .3s linear, background .3s linear",
        ".single-feature": {
            "&:not(&:nth-of-type(-n + 5))": {
                animation: `${fadeSimple} .2s .2s both`,
            },
        },
    },
    "&.features-outro": {
        transition: "max-height .3s .15s linear, background .3s",
        ".single-feature": {
            "&:not(&:nth-of-type(-n + 5))": {
                animation: `${fadeSimpleOUT} .2s both`,
            },
        },
    },
}));
