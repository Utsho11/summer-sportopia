import React from 'react';
import { JackInTheBox } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='w-full'>
            <div className='relative text-center'>
                <JackInTheBox>
                <Link to="/"><button className='absolute top-20 btn btn-success btn-md'>Go to homepage</button></Link>
                </JackInTheBox>
                
            </div>
            <img src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg"/>
        </div>
    );
};

export default Error;