import React from 'react';

const DentalCare = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row gap-12">
                <img src="https://api.lorem.space/image/movie?w=260&h=400" className="lg:ml-28 max-w-sm rounded-lg shadow-2xl" />
                <div className='lg:px-12'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quidem Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eum accusamus, cumque pariatur ad rerum, odio vero hic quae aut unde laudantium exercitationem architecto? Quae consequatur optio fuga itaque quidem. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;