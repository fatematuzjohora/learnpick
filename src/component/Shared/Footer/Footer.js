import React from 'react';
import "../CustomCss/Custom.css"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='d-inline-block w-100 mt-5 light-color-background d-flex text-secondary'>
          <div className='my-5 mx-auto'>
              <p className='pt-3 pb-2'>Learnpick</p>
              <p>copyright &copy; LearnPick  </p>
          </div>
          <div className='my-5 mx-auto'>
              <h4>Link</h4>
              <Link className='text-decoration-none text-secondary' to="/home">HOME</Link>
              <br />
              <Link className='text-decoration-none text-secondary' to="/blogs">BLOGS</Link>
              <br />
              <Link className='text-decoration-none text-secondary' to="/register">REGISTER</Link>
              <br />
              <Link className='text-decoration-none text-secondary' to="/login">LOGIN</Link>
              </div>
        </div>
    );
};

export default Footer;