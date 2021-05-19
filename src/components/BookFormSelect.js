const BookFormSelect = (props) => {
    return (
        <div className='bookFormSelect'>
            <label htmlFor={props.name}>{props.label}</label>
        </div>
    );
}

export default BookFormSelect;