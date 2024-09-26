'use client';

const BeritaCard = () => {
    return (
      <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
        {/* Image */}
        <img
          src="/path-to-your-image.png" 
          alt="Eva Dwiana dan Wakilnya" 
          className="w-full h-48 object-cover"
        />
  
        {/* Category */}
        <div className="p-4">
          <span className="text-xs text-blue-500 font-semibold uppercase">Politik</span>
  
          {/* Title */}
          <h3 className="mt-2 text-lg font-semibold text-gray-900">
            Eva Dwiana Legawa Tidak Diusung Partainya di Pilkada Bandar Lampung
          </h3>
        </div>
      </div>
    );
  };
  
  export default BeritaCard;
  