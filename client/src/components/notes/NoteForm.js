import { useState, useEffect } from 'react';
import { NoteConsumer } from '../../providers/NoteProvider';
import { Form, Button } from 'react-bootstrap';

const NoteForm = ({ setAdd, addNote, catId, updateNote, id, ndate, ntime, subject, body, setEdit }) => {
  const [note, setNote] = useState({ ndate: '', ntime: '', subject: '', body: '' })

  useEffect( () => {
    if (id) {
      setNote({ ndate, ntime, subject, body })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateNote(catId, id, note)
      setEdit(false)
    } else {
      addNote(catId, note)
      setAdd(false)
    }
    setNote({ ndate: '', ntime: '', subject: '', body: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control 
            type="date" 
            name="ndate"
            value={note.ndate}
            onChange={(e) => setNote({ ...note, ndate: e.target.value })}
            required
           />
        </Form.Group>
        <Form.Group>
          <Form.Label>Time</Form.Label>
          <Form.Control 
            type="time" 
            name="ntime"
            value={note.ntime}
            onChange={(e) => setNote({ ...note, ntime: e.target.value })}
            required
           />
        </Form.Group>
        <Form.Group>
          <Form.Label>Subject</Form.Label>
          <Form.Control 
            name="subject"
            value={note.subject}
            onChange={(e) => setNote({ ...note, subject: e.target.value })}
            required
           />
        </Form.Group>
        <Form.Group>
          <Form.Label>Body</Form.Label>
          <Form.Control 
            name="body"
            value={note.body}
            onChange={(e) => setNote({ ...note, body: e.target.value })}
            required
            as="textarea" 
            rows={3}
           />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedNoteForm = (props) => (
  <NoteConsumer>
    { value => <NoteForm {...props} {...value} /> }
  </NoteConsumer>
)

export default ConnectedNoteForm;