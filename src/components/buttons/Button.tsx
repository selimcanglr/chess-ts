import React, { ReactNode } from "react";
import { IconType } from "react-icons/lib";

interface ButtonProps {
    children?: ReactNode,
    onClick?: React.MouseEventHandler<HTMLElement>
}

const Button = ({ children, onClick } : ButtonProps) => {
    return (
        <button 
            className="w-max text-white flex justify-center align-center text-center font-bold py-2 px-4 bg-black border-2 rounded-md hover:bg-gray-900 duration-300"
            onClick={onClick}
        >
            <>
                {children}
            </>
        </button>
    );
}
 
export default Button;