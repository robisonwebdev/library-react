const BookFormSelect = (props) => {
    return (
        <div className='bookFormSelect'>
            <label htmlFor={props.name}>{props.label}</label>
            <select name={props.name} id={props.name}>
                
            </select>
        </div>
    );
}

export default BookFormSelect;