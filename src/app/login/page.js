"use client"
import { Loading } from 'notiflix';
import React from 'react'
import { UserAuth } from '../AuthContext';
import { useRouter } from 'next/navigation';
import LoginCard from '@/components/loginCard/LoginCard';

export default function Login() {
    const { user, emailPasswordSignIn, loading } = UserAuth()
    const router = useRouter();

    loading == true ? Loading.dots() : Loading.remove();

    if(user) {
        router.push('/admin');
    }

    return (
        <div className="h-96 md:h-screen w-screen flex flex-col justify-center items-center drop-shadow-2xl p-8 pt-64 md:pt-0">
            <LoginCard emailPasswordSignIn={emailPasswordSignIn} />
        </div>
    );
}
