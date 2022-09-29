import { Card, Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { CatConsumer } from '../../providers/CatProvider';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CatShow = ({ id, name, breed, registry, avatar, deleteCat }) => {
  const [showing, setShow] = useState(false)

  return (
    <>
      <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={avatar} width='200px' height='200px' />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button 
            variant="primary" 
            onClick={() => setShow(true)}
          >
            Show
          </Button>

          <Modal show={showing} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row>
                  <Col>
                    Breed: {breed}
                    <br />
                    Registry: {registry}
                    <br />
                    <Link 
                      to={`/${id}/updateCat`}
                      state={{ name, breed, registry, avatar }}
                    >
                      <Button>Edit</Button>
                    </Link>
                    <Button
                      onClick={() => deleteCat(id)}
                    >
                      Delete
                    </Button>
                    <Link to={`/${id}/notes`}>
                      <Button>Notes</Button>
                    </Link>
                  </Col>
                  <Col>
                    <Image src={avatar} width='200px' height='200px' />
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
          </Modal>
        </Card.Body>
      </Card>
    </>
  )
}

const ConnectedCatShow = (props) => (
  <CatConsumer>
    { value => <CatShow {...props} {...value} />}
  </CatConsumer>
)

export default ConnectedCatShow;