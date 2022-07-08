// Tools
import { styled, keyframes } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Other components
import DisplayTechnologies from "@/components/_utils/DisplayTechnologies";
// Styled Components
import Label from "../_styled_components/Label";
import Paragraph from "../_styled_components/Paragraph";
import RatedInStars from "../_styled_components/RatedInStars";

const fade = keyframes({
    from: {
        opacity: 0,
    },
    to: {
        opacity: 1,
    },
});

const DisplayTechnologiesWrapper = styled("div")(({ theme }) => ({
    ".single-technology": {
        opacity: 0,
        "&:nth-of-type(9),&:nth-of-type(3),&:nth-of-type(16),&:nth-of-type(13),&:nth-of-type(6)": {
            animation: `${fade} .2s 1.2s both`,
        },
        "&:nth-of-type(5),&:nth-of-type(18),&:nth-of-type(8),&:nth-of-type(2),&:nth-of-type(15)": {
            animation: `${fade} .2s 1.3s both`,
        },
        "&:nth-of-type(1),&:nth-of-type(6),&:nth-of-type(12),&:nth-of-type(19),&:nth-of-type(8)": {
            animation: `${fade} .2s 1.4s both`,
        },
        "&:nth-of-type(4),&:nth-of-type(20),&:nth-of-type(10),&:nth-of-type(11),&:nth-of-type(17)": {
            animation: `${fade} .2s 1.5s both`,
        },
    },
}));

const Competences: FunctionComponent<MUIStyledCommonProps> = (props) => {
    return (
        <>
            <Paragraph animationDelay={0.7}>
                I have been doing <strong>web development</strong> for <strong>over 3 years</strong> and during this period I tried a lot of different technologies and also encountered a great deal of
                varying approaches to tackle different problems and eventually distinquished a few favorites.
            </Paragraph>
            <Label animationDelay={0.8}>Programming languages</Label>
            <RatedInStars name="TS / JS" stars={5} description="Since the first day, my favorite " animationDelay={0.9} />
            <RatedInStars name="Python" stars={2} description="Have some understanding, but nothing spectacular" animationDelay={1} />
            <RatedInStars name="PHP" stars={1} description="I used to know it" animationDelay={1.1} />
            <Label animationDelay={1.2}>Technologies</Label>
            <Paragraph animationDelay={1.3} sx={{ mt: "0" }}>
                Only those in which I feel confident
            </Paragraph>

            <DisplayTechnologiesWrapper>
                <DisplayTechnologies
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
                        "Postgre",
                        "Prisma",
                        "Sequelize",
                        "Next",
                        "Express",
                        "Electron",
                        "Cypress",
                        "Mongo",
                        "REST",
                        "Node",
                        "ReactQuery",
                    ]}
                />
            </DisplayTechnologiesWrapper>
        </>
    );
};

export default Competences;
