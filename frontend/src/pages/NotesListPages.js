import React, { useEffect, useState } from 'react';
import ListItem from '../components/ListItem';
import AddButton from '../components/AddButton';

const NotesListPages = () => {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch notes from your API
        fetch('/api/notes')
            .then(response => response.json())
            .then(data => {
                setNotes(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className='notes'>
            <div className='notes-header'>
                <h2 className='notes-title'>&#9782; Notes</h2>
                <p className='notes-count'>{notes.length}</p>
            </div>
            { isLoading ? (
                <p>Loading notes...</p>
            ) : notes.length === 0 ? (
                <p>No notes to show.</p>
            ) : (
                notes.map(note => <ListItem key={note.id} note={note} />)
            )}
            
            <AddButton />
        </div>
    );
};

export default NotesListPages;