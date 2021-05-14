import Button from "./Button"
import Library from "./Library";

const Main = (props) => {
    return (
        <div>
            <Library />
            <Button name={'Add Book'} />
        </div>
    );
}

export default Main;