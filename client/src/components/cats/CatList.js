import CatShow from './CatShow';
import { Container, Row, Col } from 'react-bootstrap';

const CatList = ({ cats }) => (
  <Container>
    <Row md='4' sm='12'>
      { cats.map( c => 
        <Col key={c.id}>
          <CatShow
            {...c}
          />
        </Col>
      )}
    </Row>
  </Container>
)

export default CatList;