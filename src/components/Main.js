import Button from "./Button"
import Library from "./Library";

const Main = (props) => {
    return (
        <div id='main'>
            <Library />
            <Button name={'Add Book'} />
        </div>
    );
}

export default Main;