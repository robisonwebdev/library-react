const Footer = (props) => {
    return (
        <div id='footer'>
            <small>Developed by <a href={props.address} target='_blank'>{props.name}</a></small>
        </div>
    );
}

export default Footer;