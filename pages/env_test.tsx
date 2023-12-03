// Tools
// Types
import type { FunctionComponent } from "react";

const ENVIRONEMNT = process.env.NODE_ENV;

interface DotEnvProps {
    //
}

const DotEnv: FunctionComponent<DotEnvProps> = (props) => {
    return (
        <div style={{ margin: "100px auto 0 auto" }}>
            <span style={{ color: "red", fontSize: "32px" }}>env: {JSON.stringify(ENVIRONEMNT)}</span>
        </div>
    );
};

export default DotEnv;
