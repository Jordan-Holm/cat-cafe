import { useState, useEffect } from 'react';
import { CatConsumer } from '../../providers/CatProvider'; 
import { Button, Form } from 'react-bootstrap';
import { useParams, useLocation } from 'react-router-dom';

const CatForm = ({ addCat, setAdd, updateCat }) => {
  const [cat, setCat] = useState({ name: '', breed: '', registry: '', avatar: '' })
  const { id } = useParams();
  const location = useLocation()
   
  useEffect( () => {
    if (id) {
      const { name, breed, registry, avatar } = location.state 
      setCat({ name, breed, registry, avatar })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateCat(id, cat)
    } else {
      addCat(cat)
      setAdd(false)
    }
    setCat({ name: '', breed: '', registry: '', avatar: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control 
            name='name'
            value={cat.name}
            onChange={(e) => setCat({ ...cat, name: e.target.value })}
            required  
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Breed</Form.Label>
          <Form.Control 
            name='breed'
            value={cat.breed}
            onChange={(e) => setCat({ ...cat, breed: e.target.value })}
            required  
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Registry</Form.Label>
          <Form.Control 
            name='registry'
            value={cat.registry}
            onChange={(e) => setCat({ ...cat, registry: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Avatar</Form.Label>
          <Form.Control 
            name='avatar'
            value={cat.avatar}
            onChange={(e) => setCat({ ...cat, avatar: e.target.value })}
            required  
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedCatShow = (props) => (
  <CatConsumer>
    { value => <CatForm {...props} {...value} />}
  </CatConsumer>
)

export default ConnectedCatShow;