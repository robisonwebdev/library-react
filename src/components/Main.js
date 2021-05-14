import Button from "./Button"
import Library from "./Library";
import '../styles/main.css';

const Main = (props) => {
    return (
        <div id='main'>
            <Library />
            <Button name={'Add Book'} />
        </div>
    );
}

export default Main;