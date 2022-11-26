import { Link } from "react-router-dom";
import Button from "./Button";
import SettingsButton from './SettingsButton';
import TextField from "./TextField";

const LocalGameForm = () => {
    return (
    <form>
        <div className="shadow-2xl p-8">
            <div className="grid gap-6 ">
                <TextField 
                    id="player-1"
                    label="Player 1"
                    placeholder="Player 1"
                />
                <TextField
                    id="player-2"
                    label="Player 2"
                    placeholder="Player 2"
                />
                <div className="flex align-center justify-center gap-6">
                    <SettingsButton />
                    <Link className="inline-block w-100" to='/local-play'>
                        <Button>
                            Start
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    </form>
    );
}
 
export default LocalGameForm;