'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();

  if (pathname.includes("/admin") || pathname.includes("/login")) return null;

  return (
    <nav className="fixed flex top-0 z-30 w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3">
        {/* LOGO DAN NAMA DI KIRI */}
        <div className="flex items-center">
          <Image className='w-16' src="/bandarlampung.png" width={50} height={50} alt="Logo KMK" />
          <div className="ml-3">
            <p className="text-xl font-bold">Bandar Lampung</p>
            <p className="text-lg ">Sai Bumi Ruwa Jurai</p>
          </div>
        </div>

        {/* MENU PAGE DI TENGAH */}
        <div className="hidden md:flex space-x-6 mx-auto font-semibold">
          <Link href="/" className={`text-lg ${pathname == "/" ? "underline font-bold" : ""}`}>Beranda</Link>
          <Link href="/berita" className={`text-lg ${pathname == "/berita" ? "underline font-bold" : ""}`}>Profile</Link>
          <Link href="/berita" className={`text-lg ${pathname == "/berita" ? "underline font-bold" : ""}`}>Berita</Link>
          <Link href="/berita" className={`text-lg ${pathname == "/berita" ? "underline font-bold" : ""}`}>Informasi</Link>
          <Link href="/berita" className={`text-lg ${pathname == "/berita" ? "underline font-bold" : ""}`}>Layanan</Link>
       
        </div>

        {/* HAMBURGER UNTUK MOBILE */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbar(!navbar)}
            className="text-gray-700 p-2 focus:outline-none"
          >
            {navbar ? (
              <Image src="/close.png" width={30} height={30} alt="Close" />
            ) : (
              <Image src="/hamburger.png" width={30} height={30} alt="Menu" />
            )}
          </button>
        </div>
      </div>

      {/* DROPDOWN MENU MOBILE */}
      {navbar && (
        <div className="md:hidden bg-white shadow-lg py-2">
          <Link href="/" className={`block px-4 py-2 ${pathname == "/" ? "bg-gray-200" : ""}`} onClick={() => setNavbar(false)}>Beranda</Link>
          <Link href="/berita" className={`block px-4 py-2 ${pathname == "/berita" ? "bg-gray-200" : ""}`} onClick={() => setNavbar(false)}>Berita</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
