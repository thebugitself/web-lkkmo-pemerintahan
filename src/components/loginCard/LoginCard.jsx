import Image from 'next/image';
import { useState } from 'react'

function LoginCard({ emailPasswordSignIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        emailPasswordSignIn(email, password);
    }

    return (
        <div className='flex flex-col w-full md:w-auto h-full items-center justify-center'>
           
        </div>
    )
}

export default LoginCard