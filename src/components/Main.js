import Button from "./Button"
import Library from "./Library";
import '../styles/main.css';
import { useState } from "react";
import AddBookForm from "./AddBookForm";

const Main = (props) => {
    const [libraryArray, setLibraryArray] = useState([]);
    const [showAddBookBtn, setAddBookBtn] = useState(true);
    const [showBookForm, setShowBookForm] = useState(false);

    const handleMainEvents = () => {
        setAddBookBtn((prevState) => !prevState);
        setShowBookForm((prevState) => !prevState);
    };

    return (
        <div id='main'>
            <Library />
            <div id='addBook'>
                {showAddBookBtn ? <Button click={handleMainEvents} class={'addBookBtn'} name={'Add Book'} /> : null}
                {showBookForm ? <AddBookForm click={handleMainEvents} /> : null}
            </div>
        </div>
    );
}

export default Main;