import Button from "./Button"

const BookFormControls = (props) => {
    return (
        <div className='bookFormControls'>
            <Button class={'bookFormButtons'} name={'Submit'} type={'button'} click={() => { props.update(); props.events(); }} />
            <Button class={'bookFormButtons'} name={'Cancel'} type={'button'} click={props.events} />
        </div>
    );
}

export default BookFormControls;