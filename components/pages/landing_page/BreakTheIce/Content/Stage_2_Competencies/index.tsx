// Tools
import { styled } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
import { SELECTORS as TECHNOLOGIES_LIST } from "components/atoms/TechnologiesList/css_references";
// Types
import type { FunctionComponent } from "react";
// Other components
import TechnologiesList from "@/components/atoms/TechnologiesList";
// Styled Components
import Label from "../_styled_components/Label";
import Paragraph from "../_styled_components/Paragraph";
import RatedInStars from "../_styled_components/RatedInStars";

const DisplayTechnologiesWrapper = styled("div")(({ theme }) => ({
    [TECHNOLOGIES_LIST.SINGLE_TECHNOLOGY]: {
        opacity: 0,
        "&:nth-of-type(9),&:nth-of-type(3),&:nth-of-type(16),&:nth-of-type(13),&:nth-of-type(6)": {
            animation: `${fadeSimple} .2s 1.2s both`,
        },
        "&:nth-of-type(5),&:nth-of-type(18),&:nth-of-type(8),&:nth-of-type(2),&:nth-of-type(15)": {
            animation: `${fadeSimple} .2s 1.3s both`,
        },
        "&:nth-of-type(1),&:nth-of-type(6),&:nth-of-type(12),&:nth-of-type(19),&:nth-of-type(8)": {
            animation: `${fadeSimple} .2s 1.4s both`,
        },
        "&:nth-of-type(4),&:nth-of-type(20),&:nth-of-type(10),&:nth-of-type(11),&:nth-of-type(17)": {
            animation: `${fadeSimple} .2s 1.5s both`,
        },
        animation: `${fadeSimple} .2s 1.6s both`,
    },
}));

const Competencies: FunctionComponent = () => {
    return (
        <>
            <Paragraph animationDelay={0.7}>
                {formatTextViaBolding(`I have been doing *web development* for *over 3 years* and during this period I tried a lot of different technologies and also encountered a great deal of varying approaches to tackle
                different problems and eventually distinguished a few favorites.`)}
            </Paragraph>
            <Label animationDelay={0.8}>Programming languages</Label>
            <RatedInStars name="Javascript" stars={4.5} description="Almost 3 years of regular use" animationDelay={0.9} />
            <RatedInStars name="Typescript" stars={4} description="Undoubtedly my favourite one" animationDelay={1} />
            <RatedInStars name="Python" stars={2} description="Have some understanding, but nothing spectacular" animationDelay={1.1} />
            <RatedInStars name="PHP" stars={0.5} description="I used to know it" animationDelay={1.2} />
            <Label animationDelay={1.2}>Technologies</Label>
            <Paragraph animationDelay={1.3} sx={{ mt: "0" }}>
                Only those in which I feel confident
            </Paragraph>

            <DisplayTechnologiesWrapper>
                <TechnologiesList
                    technologies={[
                        "Vue 2",
                        "Sass",
                        "React",
                        "Vue 3",
                        "Vuex",
                        "Redux",
                        "MaterialUI",
                        "Jest",
                        "Git",
                        "PostgreSQL",
                        "Prisma",
                        "Sequelize",
                        "Next",
                        "MySQL",
                        "Express",
                        "Electron",
                        "Cypress",
                        "MongoDB",
                        "REST",
                        "Node",
                        "ReactQuery",
                    ]}
                />
            </DisplayTechnologiesWrapper>
        </>
    );
};

export default Competencies;
