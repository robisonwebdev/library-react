import Button from "./Button"
import Library from "./Library";
import '../styles/main.css';
import { useEffect, useState } from "react";
import AddBookForm from "./AddBookForm";

const Main = (props) => {
    const [libraryArray, setLibraryArray] = useState([
        {
            title: 'Name of the Wind',
            author: 'Pat Roft',
            pages: '3442',
        }
    ]);
    const [showAddBookBtn, setAddBookBtn] = useState(true);
    const [showBookForm, setShowBookForm] = useState(false);

    const handleMainEvents = () => {
        setAddBookBtn((prevState) => !prevState);
        setShowBookForm((prevState) => !prevState);
    };

    const getFormData = () => {
        const author = document.querySelector('#authorInput');
        const title = document.querySelector('#titleInput');
        const pages = document.querySelector('#pagesInput');
        const status = document.querySelector('#readStatus');

        let newObject = {
            author: author.value,
            title: title.value,
            pages: pages.value,
            status: status.value
        }

        setLibraryArray((prevState) => {
            return [...prevState, newObject]
        });
    }

    useEffect(() => {
        console.log(libraryArray);
    }, [libraryArray]);

    return (
        <div id='main'>
            <Library currentState={libraryArray} />
            <div id='addBook'>
                {showAddBookBtn ? <Button click={handleMainEvents} class={'addBookBtn'} name={'Add Book'} /> : null}
                {showBookForm ? <AddBookForm events={handleMainEvents} update={getFormData} /> : null}
            </div>
        </div>
    );
}

export default Main;