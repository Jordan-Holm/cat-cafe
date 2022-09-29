import { CatConsumer } from "../../providers/CatProvider";
import { useEffect } from "react";
import { Card, Button } from 'react-bootstrap';

const RandoCato = ({ randomCat, getRandomCat }) => {

  useEffect( () => {
    getRandomCat()
  }, [])

  return (
    <>
      <h1>Random Cat</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={randomCat.avatar} />
        <Card.Body>
          <Card.Title>{randomCat.name}</Card.Title>
          <Card.Text>
            Breed: {randomCat.breed}
            <br />
            Register: {randomCat.registry ? randomCat.registry : "Not registered"}
          </Card.Text>
        </Card.Body>
      </Card>
      <Button onClick={() => getRandomCat()}>
        New Cat
      </Button>
    </>
  )
}

const ConnectedRandoCato = (props) => (
  <CatConsumer>
    { value => <RandoCato {...props} {...value} />}
  </CatConsumer>
)

export default ConnectedRandoCato;