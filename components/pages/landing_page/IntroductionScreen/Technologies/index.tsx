// Types
import type { FunctionComponent } from "react";
// Styled components
import SingleTechnology from "./SingleTechnology";

const Technologies: FunctionComponent = () => {
    const technologies: string[] = ["vue", "git", "react", "sass", "material", "javascript", "html", "prisma", "next", "python", "jest", "node", "typescript", "css"];

    return (
        <>
            {technologies.map((item, index) => {
                return (
                    <SingleTechnology
                        sx={{ backgroundImage: `url("./images/technologies/white/${item}.png")` }} //
                        key={item}
                    />
                );
            })}
        </>
    );
};

export default Technologies;
