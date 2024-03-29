// Tools
import { CSS_REFERENCES } from "./css_references";
// Types
import type { Release } from "../../@types";
import type { FunctionComponent } from "react";
// Other components
import SingleRelease from "./SingleRelease";
// Styled components
import ReleasesTogglerBase from "./Base";

interface ReleasesTogglerProps {
    id: string;
    currentRelease: Release;
    toggleReleases: () => void;
}

const ReleasesToggler: FunctionComponent<ReleasesTogglerProps> = (props) => {
    return (
        <span id={props.id}>
            <ReleasesTogglerBase transform={props.currentRelease === "legacy" ? 1 : 0}>
                <span id={CSS_REFERENCES.LABEL}>Release: </span>
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

                <span id={CSS_REFERENCES.CHOICE_INDICATOR} />
            </ReleasesTogglerBase>
        </span>
    );
};

export default ReleasesToggler;
