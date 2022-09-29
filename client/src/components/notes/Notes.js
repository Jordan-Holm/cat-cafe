import { NoteConsumer } from "../../providers/NoteProvider"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NoteList from './NoteList';
import { Button, Modal } from 'react-bootstrap';
import NoteForm from './NoteForm';

const Notes = ({ notes, getAllNotes }) => {
  const { catId } = useParams();
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    getAllNotes(catId)
  }, [])

  return (
    <>
      <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NoteForm 
            setAdd={setAdd}
            catId={catId}
          />
        </Modal.Body>
      </Modal>
      <NoteList 
        notes={notes}
        catId={catId}
      />
    </>
  )
}

const ConnectedNotes = (props) => (
  <NoteConsumer>
    { value => <Notes {...props} {...value} /> }
  </NoteConsumer>
)

export default ConnectedNotes;