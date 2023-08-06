// Tools
import { styled } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import ChevronRight from "@mui/icons-material/ChevronRight";
// Other components
import Link from "next/link";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

const ReadMoreButton = styled(StyledButton)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    fontFamily: "Montserrat Alternates",
    padding: "6px 24px",
    svg: {
        fontSize: "24px",
        margin: "1px 0 0 4px",
    },
    ["@media (max-width:1300px)"]: {
        marginTop: "12px",
    },
    ["@media (max-width:680px)"]: {
        width: "100%",
        height: "50px",
        marginTop: "24px",
        fontSize: "20px",
    },
}));

interface ReadMoreProps {
    id: string;
}

const ReadMore: FunctionComponent<ReadMoreProps> = (props) => {
    return (
        <Link href={`/projects/${props.id}`} passHref>
            <ReadMoreButton componentThemeID="PRIMARY" className="read-more">
                <span>Read more</span>
                <ChevronRight />
            </ReadMoreButton>
        </Link>
    );
};

export default ReadMore;
