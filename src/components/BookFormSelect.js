const BookFormSelect = (props) => {
    return (
        <div className='bookFormSelect'>
            <label htmlFor={props.name}>{props.label}</label>
            <select name={props.name} id={props.name}>
                <option value='' selected disabled hidden>None</option>
            </select>
        </div>
    );
}

export default BookFormSelect;