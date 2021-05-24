import Button from "./Button"
import Library from "./Library";
import '../styles/main.css';
import { useState } from "react";
import AddBookForm from "./AddBookForm";

const Main = (props) => {
    const [libraryArray, setLibraryArray] = useState([]);
    const [showBookForm, setShowBookForm] = useState(false);

    const handleAddBookBtn = () => setShowBookForm((prevState) => !prevState);

    return (
        <div id='main'>
            <Library />
            <div id='addBook'>
                <Button click={handleAddBookBtn} class={'addBookBtn'} name={'Add Book'} />
                {showBookForm ? <AddBookForm /> : null}
            </div>
        </div>
    );
}

export default Main;