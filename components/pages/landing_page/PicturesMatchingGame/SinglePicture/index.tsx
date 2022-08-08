// Types
import type { FunctionComponent } from "react";
// Other components
import Image from "next/Image";
import QuestionMark from "./QuestionMark";
// Styled components
import SinglePictureBase from "./SinglePictureBase";
import OpenFullsizeButton from "./OpenFullsizeButton";

interface SinglePictureProps {
    image: string;
    id: number;
    displayImage: boolean;
    isInvalid: boolean;
    isMatched: boolean;
    itsTheFirstGameInSession: boolean;
    onClick: () => void;
}

const SinglePicture: FunctionComponent<SinglePictureProps> = (props) => {
    return (
        <SinglePictureBase
            role="button" //
            className={[
                props.displayImage ? "display-image" : "", //
                props.isInvalid ? "is-invalid" : "", //
                "single-picture",
                props.itsTheFirstGameInSession ? "first-game-in-the-session" : "",
            ].join(" ")}
            onClick={props.onClick}
        >
            {(() => {
                if (props.displayImage) {
                    return (
                        <>
                            <Image
                                alt={`${props.id}-image`} //
                                layout="fill"
                                src={`/images/landing-page/images-matching-game/${props.image}/thumbnail.jpg`}
                                objectFit="cover"
                                objectPosition="center"
                                priority
                            />
                            {props.isMatched && <OpenFullsizeButton />}
                        </>
                    );
                } else return <QuestionMark />;
            })()}
        </SinglePictureBase>
    );
};

export default SinglePicture;
