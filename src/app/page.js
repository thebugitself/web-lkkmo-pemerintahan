import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-[#ffffff]"> 
      {/* Slide Gambar dan Button Sosmed */}
      <div className="flex flex-col items-center">
      <div className="max-w-screen-2xl items-center text-center justify-center mt-16 mx-8 md:px-0">
      <Image class="w-56" src="/bandarlampung.png" width={80} height={80} alt="Logo KMK" />

        </div>
        <div className="max-w-screen-2xl items-center text-center justify-center mt-8 mx-8 md:px-0">
          <h1 className=" text-5xl font-bold">Kota</h1>
          <h1 className=" text-5xl font-bold mt-2">Bandar Lampung</h1>
          <h2 className="text-2xl font-normal mt-2">Sai Bumi Ruwa Jurai</h2>
        </div>

      </div>
    </div>
  );
}
