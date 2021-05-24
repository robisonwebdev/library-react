const Button = (props) => {
    return (
        <button className={props.class} onClick={props.click}>{props.name}</button>
    );
}

export default Button;