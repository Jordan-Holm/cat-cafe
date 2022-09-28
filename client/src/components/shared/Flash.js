import { Alert } from 'react-bootstrap';
import { useState } from 'react';

const Flash = ({ variant, msg, setErrors }) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant={variant} onClose={() => {
        setShow(false)
        setErrors(null)
        }} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          {msg}
        </p>
      </Alert>
    );
  }
return null;
} 
  
export default Flash; 