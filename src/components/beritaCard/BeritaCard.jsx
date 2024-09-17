import Image from 'next/image'
import React from 'react'

function BeritaCard() {
  return (
    <div className="flex max-w-screen-xl max-h-64 rounded-3xl outline outline-black outline-4 w-full font-poppins md:py-0 text-2xl md:text-3xl">
        <Image 
            className="w-32 md:w-64 h-full aspect-square object-cover rounded-tl-3xl rounded-bl-3xl drop-shadow-2xl"
            src="" 
            height={1080} 
            width={1080} 
            alt="Gambar Berita"
        />
        <div className="flex flex-col px-3 mt-1 text-sm xl:text-3xl lg:text-lg md:text-base sm:text-lg md:pt-2">
            <h1 className="font-poppins font-bold ">
               ggg
            </h1>
            <div className="flex h-auto mb-3 gap-2">
                <button className="flex h-max bg-[#795900] rounded-full font-poppins font-bold text-xs text-[#FFDF9E] items-center px-2 py-0.5">
                    18 Maret 2024
                </button>
                <button className="flex h-max bg-[#795900] rounded-full font-poppins font-bold text-xs text-[#FFDF9E] items-center px-2 py-0.5">
                    politik
                </button>
            </div>
            <p className="text-justify line-clamp-3 font-poppins text-xs xl:text-sm lg:text-sm md:text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eos minima delectus perferendis porro tempore harum quo architecto modi deserunt exercitationem aspernatur quae aperiam quia molestias quod, mollitia dolor tempora?
            </p>
            <a href="/berita/detail-berita" className="bg-[#795900] rounded-xl text-[#FFDF9E] font-poppins font-bold text-sm w-full md:w-max md:text-lg px-4 py-1 ml-auto mb-2 mt-3 md:mt-6 transition-all hover:bg-[#57503e]">
                <button>
                    Baca Selengkapnya
                </button>
            </a>
        </div>
    </div>
  )
}

export default BeritaCard