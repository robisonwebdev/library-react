const Button = (props) => {
    return (
        <button className={props.class} onClick={props.click} type={props.type}>{props.name}</button>
    );
}

export default Button;