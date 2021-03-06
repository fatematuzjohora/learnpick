import React from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { Form, Button } from "react-bootstrap";
import auth from "../../../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import '../../../Shared/CustomCss/Custom.css'
import { useRef } from "react";
import Loading from "../../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";


const Register = () => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef= useRef('');
  const navigate= useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
    const [updateProfile, updating] = useUpdateProfile(auth);
    let errorMessage;

    if (loading || updating) {
      return <Loading></Loading>
    }
    if(user){
      console.log("user", user);
     }
     if (error) {
      errorMessage= <p className='text-danger'>{error?.message}  </p>
    }


    const handleFormRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName:name });
        console.log('Updated profile')
        navigate("/home")  
    }
  return (
    <div className="container w-50 mx-auto my-5">
      <div className="shadow-lg p-5  bg-body rounded">
      <h2 className="custom-text-color text-center mt-2 mb-3">-  Please SignUp  -</h2>
      <Form onSubmit={handleFormRegister} >
          <Form.Group className="mb-3">
        <Form.Control type="text" ref={nameRef} placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" ref={passwordRef} placeholder="Password" />
        </Form.Group>
        <Button variant=" d-block mb-2" className="button-style w-75 text-light mx-auto bg-primary" type="submit">
          Sing Up
        </Button>
        {errorMessage}
        <p className=" text-center">
          Already have an account?
          <Link
            to="/login"
            className="text-primary pe-auto text-decoration-none"
          >
            Please Login
          </Link>
          </p>
      </Form>
      <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;