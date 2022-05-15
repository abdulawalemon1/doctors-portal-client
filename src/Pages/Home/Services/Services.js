import React from 'react';
import Service from '../Service/Service';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluride Treatment',
            description: 'short description',
            img: fluoride
        },
        {
            _id: 1,
            name: 'Fluride Treatment',
            description: 'short description',
            img: cavity
        },
        {
            _id: 1,
            name: 'Fluride Treatment',
            description: 'short description',
            img: whitening
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center '>
                <h3 className='text-xl font-bold uppercase text-primary'>Our services</h3>
                <h2 className='text-4xl'>Services we Provide</h2>

            </div>
            <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;