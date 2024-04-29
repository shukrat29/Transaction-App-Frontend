import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Footer } from '../components/Footer';
import { TopNav } from '../components/TopNav';
import { CustomInput } from '../components/CustomInput';
import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: null,
  password: '',
  confirmPassword: '',
};

const Signup = () => {
  const [form, setForm] = useState({ initialState });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const inputes = [
    {
      label: 'Name',
      name: 'name',
      type: 'text',
      placeholder: 'Enter name',
      required: true,
    },

    {
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'Enter email',
      required: true,
    },

    {
      label: 'Phone',
      name: 'phone',
      type: 'phone',
      placeholder: 'Enter phone number',
      required: false,
    },

    {
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: '********',
      required: true,
    },
    {
      label: 'Confirm Password',
      name: 'Confirm Password',
      type: 'Confirm Password',
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
            className='bg-info vh-md-100 p-5 d-flex justify-content-center align-items-center'
          >
            <div className='shadow-lg rounded p-3 text-white'>
              <h1>Join Our Community</h1>
              <p>Use our simple system to track your transactions.</p>
            </div>
          </Col>
          <Col
            md={6}
            className='d-flex justify-content-center align-items-center'
          >
            <div className='shadow-lg p-5 rounded border w-75 mt-5 mb-5'>
              <h2>Signup now</h2>
              <hr />
              <Form onSubmit={handleOnSubmit}>
                {inputes.map((item, i) => (
                  <CustomInput key={i} {...item} onChange={handleOnChange} />
                ))}

                <div className='d-grid'>
                  <Button type='submit' variant='primary'>
                    Signup Now
                  </Button>
                </div>
              </Form>
              <p className='text-end mt-3'>
                Already have an account? <a href='/'>Login</a>Now
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Signup;
