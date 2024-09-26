'use client';

import CategoryFilter from "@/components/categoryFilter/CategoryFilter"; // Sesuaikan dengan path ke CategoryFilter
import BeritaCard from "@/components/beritaCard/BeritaCard"; // Sesuaikan dengan path ke BeritaCard

export default function Home() {
  return (
    <div className="px-4 py-8">
      {/* Header Berita */}
      <h1 className="text-3xl font-bold text-center mb-6">BERITA DAERAH</h1>

      {/* Category Filter */}
      <CategoryFilter />

      {/* Carousel Controls (optional) */}
      <div className="relative mb-4">
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center">
          <span>&lt;</span>
        </button>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center">
          <span>&gt;</span>
        </button>
      </div>

      {/* Berita Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        <BeritaCard
          imageSrc="/path-to-image.jpg"
          category="Politik"
          title="Eva Dwiana Legawa Tidak Diusung Partainya di Pilkada Bandar Lampung"
        />
        <BeritaCard
          imageSrc="/path-to-image.jpg"
          category="Sorotan"
          title="Selebgram Tewas Usai Mobil Tertabrak Kereta Api di Lampung"
        />
        <BeritaCard
          imageSrc="/path-to-image.jpg"
          category="Pendidikan"
          title="APP Group Sambut 65 Mahasiswa Magang Merdeka, Perkuat Hubungan Industri dan Dunia Pendidikan"
        />
      </div>
    </div>
  );
}
