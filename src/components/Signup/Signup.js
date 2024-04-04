import React from 'react'
import LeftSignUp from './LeftSignUp';
import RightSignUp from './RightSignUp';

function Signup() {
    return (
        <section className='flex'>
            <LeftSignUp />
            <RightSignUp />
        </section>
    )
}

export default Signup