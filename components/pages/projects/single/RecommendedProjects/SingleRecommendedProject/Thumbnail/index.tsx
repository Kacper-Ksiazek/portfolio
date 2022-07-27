// Tools
import { styled } from "@mui/system";
import uploadedProjectImageURLBuilder from "@/utils/client/uploaded_image_url_builder/project";
// Types
import type { FunctionComponent } from "react";
// Other components
import Link from "next/Link";
import Image from "next/Image";
// Styled components
import ThumbnailMainWrapper from "./ThumbnailMainWrapper";
import ThumbnailSecondWrapper from "./ThumbnailSecondWrapper";
import { ShapeBottomBig, ShapeBottomSmall, ShapeTopBig, ShapeTopSmall } from "./BorderShapes";

interface ThumbnailProps {
    id: string;
    folder: string;
}

const Thumbnail: FunctionComponent<ThumbnailProps> = (props) => {
    return (
        <Link href={`/projects/${props.id}`} passHref>
            <ThumbnailMainWrapper className="thumbnail-wrapper">
                <ShapeBottomBig className="border-shape" />
                <ShapeBottomSmall className="border-shape" />
                <ShapeTopBig className="border-shape" />
                <ShapeTopSmall className="border-shape" />
                <ThumbnailSecondWrapper>
                    <Image
                        alt={props.folder}
                        layout="fill"
                        src={uploadedProjectImageURLBuilder({
                            folder: props.folder,
                            resolution: "thumbnail",
                            subject: "thumbnail",
                        })}
                    />
                </ThumbnailSecondWrapper>
            </ThumbnailMainWrapper>
        </Link>
    );
};

export default Thumbnail;
