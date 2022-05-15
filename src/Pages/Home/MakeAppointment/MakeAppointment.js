import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import bg from '../../../assets/images/appointment.png';
import PrimaryBtn from '../../Shared/Navbar/PrimaryBtn/PrimaryBtn';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${bg})`
        }} className='flex justify-center items-center'>
            <div className='flex-1'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl  text-white'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corporis ut nihil molestias ipsam ratione minus quas quod molestiae commodi quae, optio unde neque dolorum veniam reprehenderit dolor perspiciatis sequi laboriosam assumenda accusamus dignissimos enim animi. Nemo adipisci non voluptatum?</p>
                <PrimaryBtn>Get Started</PrimaryBtn>
            </div>
        </section>
    );
};

export default MakeAppointment;