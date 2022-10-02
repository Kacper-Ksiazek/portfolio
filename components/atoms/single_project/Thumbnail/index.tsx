// Tools
import { forwardRef } from "react";
import { uploadedProjectImageURLBuilder } from "@/utils/client/uploaded_image_url_builder/project";
// Types
import type { ForwardRefExoticComponent, ReactNode } from "react";
// Other components
import Image from "next/image";
// Styled components
import ThumbnailMainWrapper from "./ThumbnailMainWrapper";
import ThumbnailSecondWrapper from "./ThumbnailSecondWrapper";
import { ShapeBottomBig, ShapeBottomSmall, ShapeTopBig, ShapeTopSmall } from "./BorderShapes";

interface ThumbnailProps {
    folder: string;
    children?: ReactNode;
    onClick?: () => void;
}

const Thumbnail: ForwardRefExoticComponent<ThumbnailProps> = forwardRef((props, ref) => {
    return (
        <ThumbnailMainWrapper className="thumbnail-wrapper" ref={ref as any} onClick={props.onClick}>
            {props.children}
            <ShapeBottomBig className="border-shape big left" />
            <ShapeBottomSmall className="border-shape small left" />
            <ShapeTopBig className="border-shape big right" />
            <ShapeTopSmall className="border-shape small right" />
            <ThumbnailSecondWrapper className="direct-img-wrapper">
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
    );
});

Thumbnail.displayName = "Thumbnail";
Thumbnail.defaultProps = {
    children: <></>,
};
export default Thumbnail;
