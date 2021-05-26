import Button from './Button';
import DeleteButton from './DeleteButton';

const BookDetails = (props) => {
    return (
        <tr className='bookDetails'>
            <td>{props.details.title}</td>
            <td>{props.details.author}</td>
            <td>{props.details.pages}</td>
            <td><Button class={'bookStatus'} name={props.details.status} /></td>
            <td><DeleteButton /></td>
        </tr>
    );
}

export default BookDetails;