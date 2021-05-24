import Button from './Button';
import DeleteButton from './DeleteButton';

const BookDetails = (props) => {
    return (
        <tr className='bookDetails'>
            <td>{props.title}</td>
            <td>{props.author}</td>
            <td>{props.pages}</td>
            <td><Button class={'bookStatus'} name={props.status} /></td>
            <td><DeleteButton /></td>
        </tr>
    );
}

export default BookDetails;