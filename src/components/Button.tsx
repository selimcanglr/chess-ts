import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode,
}

const Button = ({ children } : ButtonProps) => {
    return (
        <button className="text-white flex justify-center text-center font-bold py-2 px-4 bg-black border-2 rounded-md hover:bg-gray-900 duration-300">
            {children}
        </button>
    );
}
 
export default Button;