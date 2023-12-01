import { Link } from 'react-router-dom';

const ListItem = ({ note }) => {
    return (
        <div key={note.id}>
            <Link to={`/note/${note.id}`}>
                <div className='notes-list-item'>
                    <h3>{note.title}</h3>
                    <p>{note.body && note.body.substr(0, 100) + '...'}</p>
                    <h2>{note.body}</h2>
                </div>
            </Link>
        </div>
    );
};

export default ListItem; 