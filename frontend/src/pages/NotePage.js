import React, {useState, useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

const NotePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
  
    let [note, setNote] = useState(null);

    useEffect(() => {
        if (note && id !== 'new' && note.body === '') {
            deleteNote();
        }
        getNote();
    }, [note?.body]);
    

    let getNote = async () => {
        if (id === 'new') return;

        let response = await fetch(`/api/notes/${id}`);
        let data = await response.json();
        setNote(data);
    }

    let createNote = async () => {
        await fetch(`/api/notes/create/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        });
        navigate('/');
    }


    let updateNote = async () => {
        await fetch(`/api/notes/${id}/update/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        });
    }

    let handleSubmit = () => {
        console.log("Handle Submit Triggered", note)

        if (id !== 'new' && note.body === '') {
            console.log("Delete Handle Triggered", note.body)
            deleteNote();
        }
        else if  (id !== 'new') {
            // console.log("Update Handle Triggered", note.body)
            updateNote();
        }

        else if (id === 'new' && note !== null) {
            // console.log("Create Handle Triggered", note.body)
            createNote();
        }

        navigate('/');
    }

    

    let deleteNote = async () => {
        
        await fetch(`/api/notes/${id}/delete/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        navigate('/');
    }

    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <IoIosArrowBack onClick={handleSubmit}/>
                </h3>
                { id !== 'new' ? (
                    <button onClick={deleteNote}>Delete</button>
                ) : (
                    <button onClick={handleSubmit}>Done</button>
                )}
            </div>
            <textarea onChange={(e) => {setNote({ ...note, 'body': e.target.value })}} defaultValue={note?.body}></textarea>
        </div>
    );
};

export default NotePage;