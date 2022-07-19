// Tools
import { styled, keyframes } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Styled components
const fadeFromLeft = keyframes({
    from: {
        transform: "translateX(-30px)",
        opacity: 0,
    },
    to: {
        opacity: 0.1,
        transform: "translateX(0px)",
    },
});

const fadeFromRight = keyframes({
    from: {
        transform: "translateX(30px)",
        opacity: 0,
    },
    to: {
        opacity: 0.1,
        transform: "translateX(0px)",
    },
});

const SingleTechnology = styled("div")(({ theme }) => ({
    position: "absolute",
    width: "110px",
    height: "110px",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: 14,
    opacity: 0.1,
    // Vue && Prisma
    "&:nth-of-type(1), &:nth-of-type(8)": {
        top: "120px",
    },
    // Git && Next
    "&:nth-of-type(2), &:nth-of-type(9)": {
        top: "190px",
    },
    // React && Python
    "&:nth-of-type(3), &:nth-of-type(10)": {
        top: "380px",
    },
    // Sass && jest
    "&:nth-of-type(4), &:nth-of-type(11)": {
        top: "310px",
    },
    // Material %% Node
    "&:nth-of-type(5), &:nth-of-type(12)": {
        top: "590px",
    },
    // JS %% TS
    "&:nth-of-type(6), &:nth-of-type(13)": {
        top: "470px",
    },
    // HTML && CSS
    "&:nth-of-type(7), &:nth-of-type(14)": {
        top: "680px",
        ["@media (max-height:840px)"]: {
            top: "630px",
        },
    },
    "&:nth-of-type(1)": {
        left: "-90px",
        animation: `${fadeFromRight} .3s .5s linear both`,
    },
    // Git
    "&:nth-of-type(2)": {
        left: "-230px",
        animation: `${fadeFromRight} .3s .6s linear both`,
    },
    // React
    "&:nth-of-type(3)": {
        left: "-310px",
        animation: `${fadeFromRight} .3s .7s linear both`,
    },
    // Sass
    "&:nth-of-type(4)": {
        left: "-150px",
        animation: `${fadeFromRight} .3s .8s linear both`,
    },
    // Material
    "&:nth-of-type(5)": {
        left: "-300px",
        animation: `${fadeFromRight} .3s .9s linear both`,
    },
    // JS
    "&:nth-of-type(6)": {
        left: "-180px",
        animation: `${fadeFromRight} .3s 1s linear both`,
    },
    // HTML
    "&:nth-of-type(7)": {
        left: "-130px",
        animation: `${fadeFromRight} .3s 1.1s linear both`,
    },
    // Prisma
    "&:nth-of-type(8)": {
        right: "-90px",
        animation: `${fadeFromLeft} .3s 1.3s linear both`,
    },
    // Next
    "&:nth-of-type(9)": {
        animation: `${fadeFromLeft} .3s 1.4s linear both`,
        right: "-230px",
        opacity: 0.2,
    },
    // Python
    "&:nth-of-type(10)": {
        animation: `${fadeFromLeft} .3s 1.5s linear both`,
        right: "-310px",
    },
    // jest
    "&:nth-of-type(11)": {
        right: "-150px",
        animation: `${fadeFromLeft} .3s 1.6s linear both`,
    },
    // Node
    "&:nth-of-type(12)": {
        animation: `${fadeFromLeft} .3s 1.7s linear both`,
        right: "-330px",
    },
    // TS
    "&:nth-of-type(13)": {
        animation: `${fadeFromLeft} .3s 1.8s linear both`,
        right: "-180px",
    },
    // TS
    "&:nth-of-type(14)": {
        animation: `${fadeFromLeft} .3s 1.9s linear both`,
        right: "-130px",
    },
}));

const Technologies: FunctionComponent = (props) => {
    const technologies: string[] = ["vue", "git", "react", "sass", "material", "javascript", "html", "prisma", "next", "python", "jest", "node", "typescript", "css"];

    return (
        <>
            {technologies.map((item, index) => {
                return <SingleTechnology sx={{ backgroundImage: `url("./images/technologies/white/${item}.png")` }} key={item} />;
            })}
        </>
    );
};

export default Technologies;
