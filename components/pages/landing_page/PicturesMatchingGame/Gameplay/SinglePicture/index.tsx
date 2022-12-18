// Types
import type { FunctionComponent } from "react";
import type { PictureToMatch } from "@/@types/pages/PicturesMatchingGame";
// Other components
import Image from "next/image";
import QuestionMark from "./QuestionMark";
// Styled components
import SinglePictureBase from "./SinglePictureBase";
import OpenFullsizeButton from "./OpenFullsizeButton";

interface SinglePictureProps {
    data: PictureToMatch;
    introAnimaton: boolean;
    onClick: () => void;
}

const SinglePicture: FunctionComponent<SinglePictureProps> = (props) => {
    return (
        <SinglePictureBase
            role="button" //
            className={[
                props.introAnimaton ? "intro-animation" : "",
                props.data.unfold ? "display-image" : "", //
                "single-picture",
            ].join(" ")}
            onClick={props.onClick}
        >
            <Image
                alt={"minigame-picture"} //
                layout="fill"
                src={`/images/landing-page/images-matching-game/${props.data.url}/thumbnail.jpg`}
                objectFit="cover"
                objectPosition="center"
                unoptimized
            />
            ;
            {(() => {
                if (props.data.unfold) {
                    return <>{props.data.isMatched && <OpenFullsizeButton />}</>;
                } else return <QuestionMark />;
            })()}
        </SinglePictureBase>
    );
};

export default SinglePicture;
