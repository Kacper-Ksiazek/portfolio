// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
import fadeSimpleOUT from "@/components/_keyframes/outro/fadeSimpleOUT";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    marginTop: "16px",
    "&.features-intro": {
        transition: "max-height .3s linear, background .3s linear",
        background: theme.palette.background.default,
        maxHeight: "860px",
        ".single-feature": {
            "&:not(&:nth-of-type(-n + 5))": {
                animation: `${fadeSimple} .2s .2s both`,
            },
        },
    },
    "&.features-outro": {
        transition: "max-height .3s .15s linear, background .3s",
        background: "#fff",
        maxHeight: "200px",
        ".single-feature": {
            "&:not(&:nth-of-type(-n + 5))": {
                animation: `${fadeSimpleOUT} .2s both`,
            },
        },
    },
}));
