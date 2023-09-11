// Types
import type { Release } from "../@types";
import type { FunctionComponent } from "react";
// Other components
import SingleRelease from "./SingleRelease";
// Styled components
import ReleasesTogglerBase from "./Base";

interface ReleasesTogglerProps {
    currentRelease: Release;
    toggleReleases: () => void;
}

const ReleasesToggler: FunctionComponent<ReleasesTogglerProps> = (props) => {
    return (
        <ReleasesTogglerBase transform={props.currentRelease === "legacy" ? 1 : 0}>
            <span className="label">Release: </span>

            <SingleRelease
                tooltip="See how it used to look like" //
                disabled={props.currentRelease === "legacy"}
                onClick={props.toggleReleases}
            >
                LEGACY
            </SingleRelease>

            <SingleRelease
                tooltip="See current version" //
                disabled={props.currentRelease === "2023"}
                onClick={props.toggleReleases}
            >
                2023
            </SingleRelease>
        </ReleasesTogglerBase>
    );
};

export default ReleasesToggler;
