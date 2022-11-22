import React from 'react';

const Review = ({ review }) => {
    const { img, review: userReview, location, name } = review;
    return (
        <div className='card rounded-xl shadow-xl border-2 p-4'>
            <p>{userReview}</p>
            <div  className='flex items-center mt-6 '>
                <div className="avatar">
                    <div className="w-16 mr-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt=''/>
                    </div>
                </div>
                <div>
                    <h3 className='text-lg'>{name}</h3>
                    <h4 className=''>{location}</h4>
                </div>
            </div>
        </div>
    );
};

export default Review;