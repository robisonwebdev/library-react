const BookFormSelect = (props) => {
    return (
        <div className='bookFormSelect'>
            <label htmlFor={props.name}>{props.label}</label>
            <select name={props.name} id={props.name}>
                <option value='' selected disabled hidden>None</option>
                <option value='Read'>Read</option>
                <option value='Reading'>Currently Reading</option>
                <option value='Not Read'>Not Read</option>
            </select>
        </div>
    );
}

export default BookFormSelect;