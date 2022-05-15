import React from 'react';
import PrimaryBtn from '../../Shared/Navbar/PrimaryBtn/PrimaryBtn';
import bg from '../../../assets/images/appointment.png';
const ContactForm = () => {
    return (
        <div style={{
            background: `url(${bg})`
        }} >
            <h3 className='text-3xl text-center mb-5 text-primary'>Stay Connected With Us</h3>
            <form className='text-center'>
                <input type="email" placeholder="Email Address" class=" mb-10 input input-bordered input-primary w-full max-w-lg" />
                <br />
                <input type="text" placeholder="Subject" class=" mb-10 input input-bordered input-primary w-full max-w-lg" />
                <br />
                <textarea class="textarea textarea-primary w-full max-w-lg mb-10 " placeholder="Your message..."></textarea>
                <br />
                <PrimaryBtn className="">SUBMIT</PrimaryBtn>
            </form>
        </div>
    );
};

export default ContactForm;