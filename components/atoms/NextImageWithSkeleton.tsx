// Tools
import { styled } from "@mui/material";
import { useState } from "react";
// Types
import type { ImageProps } from "next/image";
import type { FunctionComponent } from "react";
// Material UI Components
import Skeleton from "@mui/material/Skeleton";
// Other components
import Image from "next/image";
// Styled components
const StyledSkeleton = styled(Skeleton)(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "100%",
}));

interface NextImageWithSkeletonProps extends ImageProps {
    //
}

const NextImageWithSkeleton: FunctionComponent<NextImageWithSkeletonProps> = (props) => {
    const [renderSkeleton, setRenderSkeleton] = useState<boolean>(true);

    return (
        <>
            {renderSkeleton && <StyledSkeleton variant="rectangular" />}
            <Image
                alt={
                    props.alt ?? "alt" //
                }
                {...props}
                onLoad={() => setRenderSkeleton(false)}
            />
        </>
    );
};

export default NextImageWithSkeleton;
