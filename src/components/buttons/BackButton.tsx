import { RiArrowLeftLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate()
    const onClick: React.MouseEventHandler = (e: React.MouseEvent<HTMLElement>) => {
        navigate(-1)
    }

    return (
        <div>
            <RiArrowLeftLine 
                onClick={onClick}
                size={48}
                className="hover:cursor-pointer hover:bg-gray-100 rounded-3xl duration-300 ease-out"
            />
        </div>
    );
}
 
export default BackButton;