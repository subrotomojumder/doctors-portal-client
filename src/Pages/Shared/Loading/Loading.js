import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="spinner-border animate-spin inline-block w-8 h-8 lg:mr-20 lg:mb-20 border-4 rounded-full border-orange-300" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>
    );
};

export default Loading;