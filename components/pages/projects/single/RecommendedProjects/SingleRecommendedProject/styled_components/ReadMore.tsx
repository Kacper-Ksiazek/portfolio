// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import ChevronRight from "@mui/icons-material/ChevronRight";
// Other components
import Link from "next/Link";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

const ReadMoreButton = styled(StyledButton)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    width: "170px",
    fontFamily: "Montserrat Alternates",
    padding: "4px 0",
    svg: {
        fontSize: "18px",
        margin: "1px 0 0 10px",
    },
    ["@media (max-width:1300px)"]: {
        marginTop: "12px",
    },
    ["@media (max-width:680px)"]: {
        width: "100%",
        marginTop: "24px",
    },
}));

interface ReadMoreProps {
    id: string;
}

const ReadMore: FunctionComponent<ReadMoreProps> = (props) => {
    return (
        <Link href={`/projects/${props.id}`} passHref>
            <ReadMoreButton color="primary" className="read-more">
                <span>Read more</span>
                <ChevronRight />
            </ReadMoreButton>
        </Link>
    );
};

export default ReadMore;
