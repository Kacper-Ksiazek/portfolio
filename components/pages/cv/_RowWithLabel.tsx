// Tools
import { styled } from "@mui/material";
// Styled components
const RowWithLabelWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    "h3.label": {
        margin: "0 8px 0 0",
    },
}));

interface RowWithLabelProps {
    label: string;
    children: React.ReactNode;
}

const RowWithLabel: React.FunctionComponent<RowWithLabelProps> = (props) => {
    return (
        <RowWithLabelWrapper>
            <h3 className="label only-big-viewports">{props.label}</h3>

            {props.children}
        </RowWithLabelWrapper>
    );
};

export default RowWithLabel;
