import Button from "./Button"
import Library from "./Library";
import '../styles/main.css';
import { useState } from "react";

const Main = (props) => {
    const [libraryArray, setLibraryArray] = useState([]);

    return (
        <div id='main'>
            <Library />
            <Button id={'addBookBtn'} name={'Add Book'} />
        </div>
    );
}

export default Main;