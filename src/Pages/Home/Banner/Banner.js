import React from 'react';
import chair from '../../../../src/assets/images/chair.png';
import PrimaryBtn from '../../Shared/Navbar/PrimaryBtn/PrimaryBtn';
const Banner = () => {
    return (

        <div className="hero min-h-screen sm:mr-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>

    );
};

export default Banner;