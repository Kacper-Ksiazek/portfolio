// Tools
import { picturesMatchingGameURLBuilder } from "@/utils/client/uploaded_image_url_builder/pictures_matching_game";
// Types
import type { FunctionComponent } from "react";
import type { PictureToMatch } from "@/@types/pages/PicturesMatchingGame";
// Other components
import Image from "next/image";
import HidingMask from "./HidingMask";
import QuestionMark from "./QuestionMark";
// Styled components
import OpenFullsizeButton from "./OpenFullsizeButton";
import { SinglePictureBase } from "./styled_components";

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
                props.introAnimaton ? "intro-animation" : "", //
                "single-picture",
            ].join(" ")}
            onClick={props.onClick}
        >
            <HidingMask unfold={props.data.unfold} />

            <Image
                alt={"minigame-picture"} //
                layout="fill"
                unoptimized
                objectFit="cover"
                objectPosition="center"
                src={picturesMatchingGameURLBuilder({
                    folder: props.data.url,
                    resolution: "thumbnail",
                })}
            />

            {(() => {
                if (props.data.unfold) {
                    return <>{props.data.isMatched && <OpenFullsizeButton />}</>;
                } else return <QuestionMark />;
            })()}
        </SinglePictureBase>
    );
};

export default SinglePicture;
