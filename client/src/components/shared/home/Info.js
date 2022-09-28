import { Container, Row, Col, Image } from 'react-bootstrap';

const Info = () => (
  <Container>
    <Row>
      <Col>
        <Image
          src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          alt='info'
          width='500px'
        />
      </Col>
      <Col>
        <h1>
          another Header text goes here
        </h1>
        <p>
          Bacon ipsum dolor amet picanha leberkas buffalo pancetta ham hock fatback shoulder rump. Filet mignon ham ball tip pork belly shoulder bacon short loin. Landjaeger ball tip fatback, chicken boudin cupim turkey rump meatball turducken. Leberkas andouille pastrami meatball sausage tenderloin prosciutto beef ribs. Drumstick hamburger tongue biltong, swine pig kielbasa beef ribs jowl brisket. Corned beef kevin alcatra, short ribs tenderloin boudin tail pork chop beef shoulder.
        </p>
      </Col>
    </Row>
  </Container>
)

export default Info;