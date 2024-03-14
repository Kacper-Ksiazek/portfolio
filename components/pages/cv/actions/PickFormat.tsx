// Tools
import { useCVContext } from "@/hooks/pages/cv/useCVContext";
// Types
import type { CV } from "@/@types/pages/CV";
// Other components
import StyledSelect from "@/components/atoms/forms/StyledSelect";
// MUI Icons
import HdRoundedIcon from "@mui/icons-material/HdRounded";

const PickFormat: React.FunctionComponent = () => {
    const { cvToDownload, updateCVToDownload } = useCVContext();

    function updateFormat(updatedFormat: CV.Format) {
        updateCVToDownload({ format: updatedFormat });
    }

    return (
        <StyledSelect
            value={cvToDownload.format} //
            onChange={({ target }) => updateFormat(target.value)}
            componentThemeID="TEXT_PRIMARY"
            startAdornment={<HdRoundedIcon />}
            options={[
                { value: "pdf", alias: "PDF" },
                { value: "png-valid-a4", alias: "A4 Format Image" },
                { value: "png-high-res", alias: "High Quality Image" },
            ]}
        />
    );
};

export default PickFormat;
