// Other components
import InternalRedirection from "@/components/atoms/redirections/InternalRedirection";

const GoHome: React.FunctionComponent = () => {
    return (
        <div>
            <InternalRedirection
                reverseArrow //
                componentThemeID="ERROR"
                url="/?skip-introduction-screen-rectangle-animations=true"
                sx={{ width: "100%", marginLeft: "0 !important" }}
            >
                <span>Return Home</span>
            </InternalRedirection>
        </div>
    );
};

export default GoHome;
