// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Other components
import SingleSchool from "./SingleSchool";
// Styled Components
import Paragraph from "../_styled_components/Paragraph";
import OverflowScrollDiv from "@/components/_styled_components/content_placement/OverflowScrollDiv";

const ScrollbarHidder = styled("span")(({ theme }) => ({
    position: "absolute",
    right: "0",
    background: "#fff",
    height: "100%",
    width: "10px",
    animation: `${fadeSimple} reverse .3s 1.1s both`,
}));

const Education: FunctionComponent<MUIStyledCommonProps> = (props) => {
    return (
        <>
            <Paragraph animationDelay={0.7}>
                {formatTextViaBolding(`I have always been *eager to learn*, because I thing this is a great way to develop such qualities as *meticulousness*, *gratitude* and
                *respectfulness* and furthermore I deem they considerably improve personality in general and also make farther life easier. Back in my school, I was always the student
                with the best results, mainly because I was *always striving to innovate* and find more efficient solutions, but most importantly because I was
                *never making excuses*.`)}
            </Paragraph>
            <OverflowScrollDiv
                maxHeight="380px" //
                sx={{
                    mt: "20px", //
                }}
            >
                <ScrollbarHidder />
                <SingleSchool
                    start="2022"
                    description="I study at the faculty called *Engineering and Data Analysis*"
                    thumbnailURL="/images/landing-page/schools/agh.jpg"
                    title="Akademia Górniczo-Hutnicza im. Stanisława Staszica w Krakowie"
                    type="University"
                    schoolURL="https://www.agh.edu.pl/en/"
                />
                <SingleSchool
                    start="2021"
                    end="2022"
                    description="During my last year of high school I enrolled myself in *English language* extra classes so as to improve my language skills. I got assigned to *B2/C1* group and was
                    attending 90 minutes long sessions two times a week for 7 months. "
                    thumbnailURL="/images/landing-page/schools/magic.jpg"
                    title="Szkoła językowa Magic"
                    type="Extra classes"
                    schoolURL="http://www.magic.edu.pl/"
                />
                <SingleSchool
                    start="2018"
                    end="2022"
                    description="I was attending there to the IT related class (*technikum informatyczne*) and eventually obtained all possible certification."
                    thumbnailURL="/images/landing-page/schools/gorzen.jpg"
                    title="Centrum Kształcenia Zawodowego i Ustawicznego nr 2 im. ks. Stanisława Staszica w Wadowicach"
                    type="High school"
                    schoolURL="https://ckziuwadowice.pl/"
                />
            </OverflowScrollDiv>
        </>
    );
};

export default Education;
