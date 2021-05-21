const BookDetails = (props) => {
    return (
        <tr className='bookDetails'>
            <td>{props.title}</td>
            <td>{props.author}</td>
            <td>{props.pages}</td>
            <td><Button className={'bookStatus'} name={props.status} /></td>
        </tr>
    );
}

export default BookDetails;