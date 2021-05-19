import Button from "./Button"

const BookFormControls = () => {
    return (
        <div className='bookFormControls'>
            <Button class={'bookFormButtons'} name={'Submit'} />
            <Button class={'bookFormButtons'} name={'Cancel'} />
        </div>
    );
}

export default BookFormControls;