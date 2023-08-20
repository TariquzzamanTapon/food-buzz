import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div>
            <h1 className='md:text-5xl text-2xl text-center font-bold md:mb-5 mt-10 md:mt-20'>{title} <span className='text-orange-400'>{subtitle}</span>.</h1>
        </div>
    );
};

export default SectionTitle;