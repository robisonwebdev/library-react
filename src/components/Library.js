import BookDetails from "./BookDetails"
import TableHead from "./TableHead"
import '../styles/Library.css';

const Library = (props) => {

    return (
        <div id='library'>
            <table id='libraryTable'>
                <thead>
                    <TableHead />
                </thead>
                <tbody>
                    {
                        props.currentState.map((obj) => (
                            <BookDetails details={obj} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Library;