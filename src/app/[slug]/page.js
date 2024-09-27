import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <h1 className="font-poppins w-full text-center font-bold text-2xl">Halaman tidak ditemukan!</h1>
      <div className="flex w-full justify-center">
        <Link href="/" className="font-poppins text-center font-normal text-xl underline">Balik ke beranda</Link>
      </div>
    </div>
  )
}
