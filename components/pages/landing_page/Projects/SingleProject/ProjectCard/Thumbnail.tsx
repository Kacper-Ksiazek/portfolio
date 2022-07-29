// Tools
import { styled } from "@mui/system";
import uploadedProjectImageURLBuilder from "@/utils/client/uploaded_image_url_builder/project";
// Types
import type { FunctionComponent } from "react";
// Other components
import Image from "next/Image";
const ThumbnailWrapper = styled("div")(({ theme }) => ({
    position: "relative",
    height: "180px",
}));
interface ThumbnailProps {
    folder: string;
}

const Thumbnail: FunctionComponent<ThumbnailProps> = (props) => {
    return (
        <ThumbnailWrapper>
            <Image
                alt={props.folder}
                layout="fill"
                src={uploadedProjectImageURLBuilder({
                    folder: props.folder,
                    resolution: "thumbnail",
                    subject: "thumbnail",
                })}
            />
        </ThumbnailWrapper>
    );
};

export default Thumbnail;
