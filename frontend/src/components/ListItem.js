import { Link } from 'react-router-dom';

let getTime = (note) => {
    return new Date(note.updated).toLocaleDateString();
}


let getTitle = (note) => {
    let title = note.body.split('\n')[0];
    if (title.length > 50) {
        return title.slice(0, 50);
    }
    return title
}

let getContent = (note) => {
    let title = getTitle(note);
    let content = note.body.replaceAll('\n', ' ');
    content = content.replaceAll(title, '');
    if (content.length > 50) {
        return content.slice(0, 50) + '...';
    }
    return content;
}



const ListItem = ({ note }) => {
    return (
        <div key={note.id}>
            <Link to={`/note/${note.id}`}>
                <div className='notes-list-item'>
                    <h3>{getTitle(note)}</h3>
                    <p><span>{getTime(note)}</span>{getContent(note)}</p>
                </div>
            </Link>
        </div>
    );
};

export default ListItem; 