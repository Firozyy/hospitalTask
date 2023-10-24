
import FormContainer from '../../Compenents/FormContainer'
import React, { useEffect, useState, } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Row, Col, Button, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../Compenents/Loader';
import Message from '../../Compenents/Message';
import { login } from '../../redux/action/userActions';


const Login = () => {
    const { loading, error, userInfo } = useSelector(state => state.userLogin)
    const [email, setEmail] = useState(" ")
    const [password, setpassword] = useState(" ")
    // const redirect = location.search ? location.search.split("=")[1]:"/"

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (userInfo) {
            return navigate("/")
        }
    }, [userInfo,navigate])


    const formSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))

    }
  
    return (
        <FormContainer >
            <h1 className='text-success'>sign in</h1>
            {error && <Message variant='danger'>{error}</Message>}
         
            <Form onSubmit={formSubmitHandler}>
                <FormGroup controlId='email'>
                    <FormLabel>Email</FormLabel>
                    <FormControl type='email' placeholder='Enter your email' value={email}
                        onChange={(e) => setEmail(e.target.value)}  >
                    </FormControl>
                </FormGroup>
                <FormGroup controlId='password'>
                    <FormLabel>Password</FormLabel>
                    <FormControl type='password' placeholder='Enter your password' value={password}
                        onChange={(e) => setpassword(e.target.value)}  >
                    </FormControl>
                </FormGroup>
                <Button className='mt-3 bg-success border-0'  type='submit' >Sign In</Button>
            </Form>
            <Row className='py-3'>
                {/* <Col>
                    New Customer ? <Link className='text-success' to={'/register'} style={{ textDecoration: "none" }}>Regiter</Link>
                </Col> */}
            </Row>
        </FormContainer>
    )
}


export default Login