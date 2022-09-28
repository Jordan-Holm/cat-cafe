import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Headline = () => (
  <>
    <Image 
      alt='head'
      width='100%'
      src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
    />
    <Container>
      <Row>
        <Col>
          <h1>Med Length Hero headline</h1>
        </Col>
        <Col>
          <p>
            Bacon ipsum dolor amet picanha leberkas buffalo pancetta ham hock fatback shoulder rump. Filet mignon ham ball tip pork belly shoulder bacon short loin. Landjaeger ball tip fatback, chicken boudin cupim turkey rump meatball turducken. Leberkas andouille pastrami meatball sausage tenderloin prosciutto beef ribs. Drumstick hamburger tongue biltong, swine pig kielbasa beef ribs jowl brisket. Corned beef kevin alcatra, short ribs tenderloin boudin tail pork chop beef shoulder.
          </p>
          <Row>
            <Col>
              <Link to='/register'>
                <Button>
                  Signup
                </Button>
              </Link>
            </Col>
            <Col>
              <Link to='/login'>
                <Button>
                  Login
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </>
)

export default Headline;