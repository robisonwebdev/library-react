import '../styles/AddBookForm.css';
import BookFormInputs from './BookFormInputs';

const AddBookForm = () => {
    return (
        <form id='addBookForm'>
            <h3>New Book</h3>

            <BookFormInputs type={'text'} name={'authorInput'} placeholder={"Enter Author's Name"} />

            <div className='bookFormInputs'>
                <label for='authorInput'>Author</label>
                <input type='text' name='authorInput' id='authorInput' placeholder="Enter Author's Name" />
            </div>

            <div className='bookFormInputs'></div>

            <div className='bookFormInputs'></div>
        </form>
    );
}

export default AddBookForm;