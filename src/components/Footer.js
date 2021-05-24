import '../styles/Footer.css';

const Footer = (props) => {
    return (
        <div id='footer'>
            <small>Developed by <a href={props.address} target='_blank' rel='noreferrer'>{props.name}</a></small>
        </div>
    );
}

export default Footer;