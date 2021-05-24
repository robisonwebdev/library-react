import '../styles/AddBookForm.css';
import BookFormControls from './BookFormControls';
import BookFormInputs from './BookFormInputs';
import BookFormSelect from './BookFormSelect';

const AddBookForm = (props) => {
    return (
        <div id='addBookForm'>
            <form id='bookForm' action='#'>
                <h3>New Book</h3>

                <BookFormInputs label={'Author'} type={'text'} name={'authorInput'} placeholder={"Enter Author's Name"} />
                <BookFormInputs label={'Title'} type={'text'} name={'titleInput'} placeholder={"Enter Book Title"} />
                <BookFormInputs label={'Pages'} type={'number'} name={'pagesInput'} placeholder={"Number of Pages"} />
                <BookFormSelect label={'Status:'} name={'readStatus'} />
                <BookFormControls events={props.events} />
            </form>
        </div>
    );
}

export default AddBookForm;