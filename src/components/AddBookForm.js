import '../styles/AddBookForm.css';
import BookFormInputs from './BookFormInputs';

const AddBookForm = () => {
    return (
        <form id='addBookForm'>
            <h3>New Book</h3>

            <BookFormInputs label={'Author'} type={'text'} name={'authorInput'} placeholder={"Enter Author's Name"} />
            <BookFormInputs label={'Title'} type={'text'} name={'titleInput'} placeholder={"Enter Book Title"} />
        </form>
    );
}

export default AddBookForm;