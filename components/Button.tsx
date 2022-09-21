// Tools
// Types
import type { FunctionComponent } from "react";

interface ButtonProps {
    msg: string;
    color: string;
    backgroundColor: string;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
    return (
        <button style={{ backgroundColor: props.backgroundColor, color: props.color }}>
            <span>{props.msg}</span>
        </button>
    );
};

export default Button;
