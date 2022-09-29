import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const NoteContext = React.createContext();

export const NoteConsumer = NoteContext.Consumer; 

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([])
  const [errors, setErrors] = useState(null)
  const navigate = useNavigate()

  const getAllNotes = (catId) => {
    axios.get(`/api/cats/${catId}/notes`)
      .then( res => setNotes(res.data))
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: err.response.data.errors[0]
        })
      })
  }

  const addNote = (catId, note) => {
    axios.post(`/api/cats/${catId}/notes`, { note })
      .then( res => setNotes([...notes, res.data]))
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
        })
      })
  }

  const updateNote = (catId, id, note) => {
    axios.put(`/api/cats/${catId}/notes/${id}`, { note })
      .then( res => {
        const newUpdatedNotes = notes.map(n => {
          if (n.id !== id) {
            return res.data
          }
          return n
        })
        setNotes(newUpdatedNotes)
        navigate(`/${catId}/notes`)
        window.location.reload()
      })
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: Object.keys(err.response.data.errors)[0] + " " + Object.values(err.response.data.errors)[0][0]
        })
      })
  }

  const deleteNote = (catId, id) => {
    axios.delete(`/api/cats/${catId}/notes/${id}`)
      .then(res => {
        setNotes(notes.filter(n => n.id !== id))
      })
      .catch(err => {
        setErrors({ 
          variant: 'danger',
          msg: err.response.data.errors[0]
        })
      })
  }
  
  return (
    <NoteContext.Provider value={{
      notes,
      errors,
      setErrors, 
      getAllNotes,
      addNote, 
      updateNote,
      deleteNote,
    }}>
      { children }
    </NoteContext.Provider>
  )
}

export default NoteProvider;