const BookFormInputs = (props) => {
    return (
        <div className='bookFormInputs'>
            <label htmlFor={props.name}>{props.label}</label>
            <input type={props.type} name={props.name} id={props.name} placeholder={props.placeholder} />
        </div>
    );
}

export default BookFormInputs;