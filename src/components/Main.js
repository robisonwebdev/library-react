import Button from "./Button"
import Library from "./Library";
import '../styles/main.css';
import { useState } from "react";
import AddBookForm from "./AddBookForm";

const Main = (props) => {
    const [libraryArray, setLibraryArray] = useState([]);

    return (
        <div id='main'>
            <Library />
            <div id='addBook'>
                <Button class={'addBookBtn'} name={'Add Book'} />
                <AddBookForm />
            </div>
        </div>
    );
}

export default Main;