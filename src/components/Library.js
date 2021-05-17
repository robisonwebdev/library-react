import BookDetails from "./BookDetails"

const Library = (props) => {
    return (
        <div id='library'>
            <table id='libraryTable'>
                <thead>
                    
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