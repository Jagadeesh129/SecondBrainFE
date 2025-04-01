
// we want variant, size, text, onClick

import { ReactElement } from "react"

interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: String;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick: () => void;
}

export const Button = (props: ButtonProps)=> {
    
    return <button>

    </button>
}