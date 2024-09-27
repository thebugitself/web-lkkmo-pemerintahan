import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-white">

  {/* Hero Section */}
  <section className="text-center py-10">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Image */}
        <div className="col-span-1 flex justify-center">
          <img
            src="/path-to-image-1.jpg"
            alt="City Image 1"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* City Logo and Name */}
        <div className="col-span-1 text-center">
          <img
            src="bandarlampung.png"
            alt="City Logo"
            className="mx-auto w-40 mb-4"
          />
          <h1 className="text-3xl font-bold">KOTA BANDAR LAMPUNG</h1>
          <p className="text-lg">Sai Bumi Ruwa Jurai</p>
        </div>

        {/* Right Image */}
        <div className="col-span-1 flex justify-center">
          <img
            src="/path-to-image-2.jpg"
            alt="City Image 2"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  </section>

  {/* Interesting Facts Section */}
  <section className="bg-[#0064B0] py-10 text-white">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
          <p>Surga Kopi Robusta: Kopi lovers wajib tahu nih...</p>
        </div>
      <h2 className="text-2xl font-bold text-center mb-6">Fakta Menarik!</h2>
        <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
          <p>Kebun Raya Hits Pertama di Sumatera: Buat yang cinta alam...</p>
        </div>
        <br></br>
      <div className="bg-blue-800 justify-center flex p-6 rounded-lg shadow-lg">
        <p>Budaya Keren Rame-rame: Bandar Lampung itu colorful banget!</p>
      </div>
      </div>
    </div>
  </section>

  {/* Hot News Section */}
  <section className="py-10">
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">HOT NEWS!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="/path-to-news-image.jpg"
            alt="News"
            className="w-full h-auto"
          />
          <div className="p-4">
            <p className="font-bold">Pintu Surga ITERA</p>
            <p className="text-sm">Gedung Kuliah Umum (GKU 1) ITERA adalah salah satu...</p>
          </div>
        </div>
        {/* Add more news cards as needed */}
      </div>
    </div>
  </section>

  {/* Information and Services Section */}
  <section className="py-10">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Informasi */}
      <div className="bg-blue-500 p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-bold mb-4">Informasi</h3>
        <div className="flex flex-col space-y-4">
          <button className="bg-blue-700 py-2 rounded text-white">Daftar Institusi</button>
          <button className="bg-blue-700 py-2 rounded text-white">UMKM</button>
        </div>
      </div>

      {/* Layanan */}
      <div className="bg-blue-200 p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-bold mb-4">Layanan</h3>
        <div className="grid grid-cols-3 gap-4">
          <button className="text-sm">Layanan Publik</button>
          <button className="text-sm">Layanan PPID</button>
          <button className="text-sm">e-lapor</button>
          <button className="text-sm">Asuransi Kesehatan</button>
          <button className="text-sm">Dishub</button>
          <button className="text-sm">Selengkapnya</button>
        </div>
      </div>
    </div>
  </section>

</div>

  );
}
