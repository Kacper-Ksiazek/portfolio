// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Styled Components
import Label from "../_styled_components/Label";
import Paragraph from "../_styled_components/Paragraph";
import RatedInStars from "../_styled_components/RatedInStars";

const General: FunctionComponent<MUIStyledCommonProps> = (props) => {
    return (
        <>
            <Paragraph animationDelay={0.7}>
                I was born in 2002 and I have lived in Poland for my entire life. <strong>Since the age of 16</strong> an ardent and ambitious self advancing <strong>software engineer</strong>. I am
                trustworthy, ingenious and resourceful person, role model for peers. Humility is undoubtedly my biggest positive trait.
            </Paragraph>

            <Paragraph animationDelay={0.8}>
                In the year of <strong>2019</strong> I began my <strong>first commercial project</strong>, which was a company side with a custom made CRUD for their blog and offers. I coded
                everything from scratch all by my self using <strong>vue 2</strong> and <strong>laravel</strong> and after 3 months the work was finally done with satisfying for both me and the
                customer result.
            </Paragraph>

            <Paragraph animationDelay={0.9}>
                My <strong>second</strong> major commercial <strong>project</strong> was virtually identical to the first. Having over year and half more of expercience,{" "}
                <strong>everything went considerably better</strong> in all aspects and eventually the project succesfully ended in Feburary 2021 after spending only 3 weeks of hard work.
            </Paragraph>

            <Label animationDelay={1}>Languages</Label>
            <RatedInStars name="Polish" stars={5} description="Native speaker" animationDelay={1.1} />
            <RatedInStars name="English" stars={4} description="Between B2 and C1, learn every day" animationDelay={1.2} />
            <RatedInStars name="German" stars={1} description="Eines tages eines tages, uber leider nicht jetzt" animationDelay={1.3} />
        </>
    );
};

export default General;
