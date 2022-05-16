import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import bg from '../../../assets/images/appointment.png';
import PrimaryBtn from '../../Shared/Navbar/PrimaryBtn/PrimaryBtn';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${bg})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='lg:mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl  text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make an Appointment Today</h2>
                <p className='text-white pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corporis ut nihil molestias ipsam ratione minus quas quod molestiae commodi quae, optio unde neque dolorum veniam reprehenderit dolor perspiciatis sequi laboriosam assumenda accusamus dignissimos enim animi. Nemo adipisci non voluptatum?</p>
                <PrimaryBtn>Get Started</PrimaryBtn>
            </div>
        </section>
    );
};

export default MakeAppointment;