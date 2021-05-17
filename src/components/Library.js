import BookDetails from "./BookDetails"
import TableHead from "./TableHead"

const Library = (props) => {
    return (
        <div id='library'>
            <table id='libraryTable'>
                <thead>
                    <TableHead />
                </thead>
                <tbody>
                    <BookDetails />
                    <BookDetails />
                    <BookDetails />
                </tbody>
            </table>
        </div>
    );
}

export default Library;