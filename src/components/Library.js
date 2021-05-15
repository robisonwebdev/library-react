import BookDetails from "./BookDetails"

const Library = (props) => {
    return (
        <div id='library'>
            <table id='libraryTable'>
                <thead>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Pages</th>
                    <th>Status</th>
                    <th>Del</th>
                </thead>
                <tbody>
                    <td><BookDetails /></td>
                    <td><BookDetails /></td>
                    <td><BookDetails /></td>
                </tbody>
            </table>
        </div>
    );
}

export default Library;