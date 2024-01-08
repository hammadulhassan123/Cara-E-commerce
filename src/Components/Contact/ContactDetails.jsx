import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';


const Details = () => {
  return (
    <Container>
      <div className="details">
        <span>Get in touch</span>
        <h2>Visit one of our agency locations or contact us today</h2>
        <h3>Head Office</h3>
        <Row className='row'>
          <Col>
            <ul>
              <li>
                <FontAwesomeIcon icon={faMap} className='icons'/>
                <p>56 Glassford Street Glasgow G1 1UL New York</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope}  className='icons'/>
                <p>contact@example.com</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className='icons'/>
                <p>contact@example.com</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faClock} className='icons'/>
                <p>Monday to Saturday: 9:00 am to 16.pm</p>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Details;
