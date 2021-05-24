import Button from './Button';
import DeleteButton from './DeleteButton';

const BookDetails = (props) => {
    return (
        <tr className='bookDetails'>
            <td>{props.details.currentState[0].title}</td>
            <td>{props.details.currentState[0].author}</td>
            <td>{props.details.currentState[0].pages}</td>
            <td><Button class={'bookStatus'} name={null} /></td>
            <td><DeleteButton /></td>
        </tr>
    );
}

export default BookDetails;