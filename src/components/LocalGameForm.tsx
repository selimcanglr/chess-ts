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
                <SettingsButton />
                <Button>
                    Start
                </Button>
            </div>
        </div>
    </form>
    );
}
 
export default LocalGameForm;