import { useState } from "react";

const BookFormSelect = (props) => {
    const [selectValue, setSelectValue] = useState('Select One');

    function handleChange(e) {
        setSelectValue(e.target.value);
    }

    return (
        <div className='bookFormSelect'>
            <label htmlFor={props.name}>{props.label}</label>
            <select value={selectValue} onChange={handleChange} name={props.name} id={props.name} readOnly>
                <option value='Select One' disabled hidden>Select One</option>
                <option value='Read'>Read</option>
                <option value='Reading'>Currently Reading</option>
                <option value='Not Read'>Not Read</option>
            </select>
        </div>
    );
}

export default BookFormSelect;