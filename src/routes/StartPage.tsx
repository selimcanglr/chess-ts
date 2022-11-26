import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";
import IconButton from "../components/buttons/SettingsButton";
import LocalGameForm from "../components/LocalGameForm";
import TextField from "../components/TextField";

const StartPage = () => {
    return (
        <div className="w-screen h-screen flex justify-center">
            <div className="w-100 flex items-center">
                <div className="grid gap-6">
                    <Link to='/online-init'>
                        <Button>
                            Play Online
                        </Button>
                    </Link>
                    <Link to='/local-init'>
                        <Button>
                            Play Locally
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default StartPage;