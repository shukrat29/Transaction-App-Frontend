import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Footer } from '../components/Footer';
import { TopNav } from '../components/TopNav';
import { CustomInput } from '../components/CustomInput';

const Login = () => {
  const inputes = [
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'Enter email',
      required: true,
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: '********',
      required: true,
    },
  ];

  return (
    <div>
      <TopNav />
      <Container className='main' fluid>
        <Row>
          <Col
            md={6}
            className='bg-primary main vh-md-100 p-5 d-flex justify-content-center align-items-center'
          >
            <div className='shadow-lg rounded p-3 text-white'>
              <h1>Welcome Back</h1>
              <p>Login to your account and take controll of your finance.</p>
            </div>
          </Col>
          <Col
            md={6}
            className='d-flex justify-content-center align-items-center'
          >
            <div className='shadow-lg p-5 rounded border w-75 mt-5 mb-5'>
              <h2>Login now</h2>
              <hr />
              <Form>
                {inputes.map((item, i) => (
                  <CustomInput key={i} {...item} />
                ))}

                <div className='d-grid'>
                  <Button variant='primary'>Login Now</Button>
                </div>
              </Form>
              <p className='text-end mt-3'>
                Are you new? <a href='/signup'>Signup</a>Now
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Login;
