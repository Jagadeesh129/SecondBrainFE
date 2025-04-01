
// we want variant, size, text, onClick

import { ReactElement } from "react"

type Variants = "primary" | "secondary";

interface ButtonProps {
    variant: Variants;
    size?: "sm" | "md" | "lg";
    text: String;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600",
}

const defaultStyles = " rounded-md px-6 py-2 flex ";


export const Button = (props: ButtonProps)=> {
    
    return <button className={variantStyles[props.variant] + defaultStyles}>
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null} {props.text} {props.endIcon}
    </button>
}