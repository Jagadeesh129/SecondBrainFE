
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
    fullWidth?: boolean;
    loading? : boolean;
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600",
}

const defaultStyles = " rounded-md px-4 py-2 font-normal flex cursor-pointer items-center";

export const Button = (props: ButtonProps)=> {
    return <button onClick={props.onClick} className={variantStyles[props.variant] +" "+ defaultStyles + `${props.fullWidth ? " w-full flex justify-center":""}` + 
    ` ${props.loading ? " opacity-45 ":""}`} disabled = {props.loading} >
        {props.startIcon ? <div className="pr-1">{props.startIcon}</div> : null} {props.text} {props.endIcon}
    </button>
}