// Tools
import RWD from "./RWD";
import { styled } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    marginTop: "16px",
    flexGrow: "1",
    justifyContent: "space-between",
    width: "100%",
    "&.visible": {
        "#picture-main-wrapper": {
            "&.play-intro-animation": {
                animation: `${fadeSimple} .5s .5s both`,
            },
        },
    },
    ...(RWD as any),
}));
