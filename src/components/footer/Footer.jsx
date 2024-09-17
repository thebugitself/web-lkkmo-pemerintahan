'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

function Footer() {
    const pathname = usePathname()

    if (pathname.includes("/admin") || pathname.includes("/login")) return null;

    return (
        <div className="w-full bg-[#0064B0] mt-10 text-white font-Montserrat">
            <div className="md:flex mx-auto max-w-screen-xl px-8 font-poppins py-5 gap-5">
            <h1>hahaha</h1>
            </div>
        </div>
    )
}

export default Footer
