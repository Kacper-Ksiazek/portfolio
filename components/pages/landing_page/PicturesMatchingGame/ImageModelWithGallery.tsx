// Tools
import { useMemo, useState } from "react";
import { usePicturesMatchingGameContext } from "./hooks/usePicturesMatchingGameContext";
import { picturesMatchingGameURLBuilder } from "@/utils/client/uploaded_image_url_builder/pictures_matching_game";
// Types
import type { FunctionComponent } from "react";
import type { PictureToMatch } from "@/@types/pages/PicturesMatchingGame";
// Other components
import ImageModel from "@/components/utils/ImageModel";

const ImageModelWithGallery: FunctionComponent = (props) => {
    const context = usePicturesMatchingGameContext();
    const [currentIndex, setCurrentImageIndex] = useState<number>(0);

    const gallery = useMemo<PictureToMatch[]>(() => {
        if (context.pictureToDisplayInFullsize === null) return [];
        const { url: URL } = context.pictureToDisplayInFullsize;

        const unique: Record<string, PictureToMatch> = {};
        context.gameplay.pictures.forEach((el) => (unique[el.url] = el));

        return Object.values(unique).sort((el) => (el.url === URL ? -1 : 1));
    }, [context.gameplay.pictures, context.pictureToDisplayInFullsize]);

    const onClose = () => {
        context.methods.setPictureToDisplayInFullsize(null);
        setCurrentImageIndex(0);
    };

    if (context.pictureToDisplayInFullsize === null) return <></>;
    return (
        <ImageModel
            open={true} //
            title={gallery[currentIndex].title}
            onClose={onClose}
            imageURL={picturesMatchingGameURLBuilder({
                folder: gallery[currentIndex].url,
                resolution: "fullsize",
            })}
            gallery={{
                currentIndex,
                imagesInTotal: gallery.length,
                setCurrentImageIndex,
            }}
        />
    );
};

export default ImageModelWithGallery;
