// Tools
import { styled, keyframes } from "@mui/system";
// Other components
import DarkWrapperBase from "@/components/_styled_components/content_placement/SectionWrapper/Dark/DarkWrapperBase";

const fadeSimpleButWithSmallerOpacity = keyframes({
    from: {
        opacity: 0,
    },
    to: {
        opacity: 0.5,
    },
});

export default styled(DarkWrapperBase)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    "&.visible": {
        ".single-relevent-technology": {
            "&:nth-of-type(1)": {
                animation: `${fadeSimpleButWithSmallerOpacity} .3s .3s linear both`,
            },
            "&:nth-of-type(2)": {
                animation: `${fadeSimpleButWithSmallerOpacity} .3s .4s linear both`,
            },
            "&:nth-of-type(3)": {
                animation: `${fadeSimpleButWithSmallerOpacity} .3s .5s linear both`,
            },
            "&:nth-of-type(4)": {
                animation: `${fadeSimpleButWithSmallerOpacity} .3s .6s linear both`,
            },
            "&:nth-of-type(5)": {
                animation: `${fadeSimpleButWithSmallerOpacity} .3s .7s linear both`,
            },
            "&:nth-of-type(6)": {
                animation: `${fadeSimpleButWithSmallerOpacity} .3s .8s linear both`,
            },
            "&:nth-of-type(7)": {
                animation: `${fadeSimpleButWithSmallerOpacity} .3s .9s linear both`,
            },
            "&:nth-of-type(8)": {
                animation: `${fadeSimpleButWithSmallerOpacity} .3s 1s linear both`,
            },
        },
    },
    ["@media (max-width:900px)"]: {
        flexWrap: "wrap",
    },
    ["@media (max-width:400px)"]: {
        padding: "16px",
    },
}));
