import CatList from './CatList';
import { useEffect, useState } from 'react';
import { CatConsumer } from '../../providers/CatProvider';
import CatForm from './CatForm';
import { Button, Modal } from 'react-bootstrap';

const Cats = ({ cats, getAllCats }) => {
  const [adding, setAdd] = useState(false);

  useEffect( () => {
    getAllCats()
  }, [])

  return (
    <>
      <Button 
        onClick={() => setAdd(true)}
      >
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Cat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CatForm 
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>

      <h1>My Cats</h1>
      <CatList
        cats={cats}
      />
    </>
  )
}

const ConnectedCats = (props) => (
  <CatConsumer>
    { value => <Cats {...props} {...value} /> }
  </CatConsumer>
)

export default ConnectedCats;