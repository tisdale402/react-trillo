import React from 'react';
import '../../styles/sass/style.scss';

const CTA = () => (
    <div className='cta'>
        <h2 className='cta__book-now'>Good News! We Have 4 Free Rooms For Your Selected Dates</h2>
        <button className='btn'>
            <span className='btn__visible'>Book now</span>
            <span className='btn__invisible'>Only 4 rooms left</span>
        </button>
    </div>
);

export default CTA;