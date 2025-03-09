import { useState } from "react";
import { ShopInfo } from "@/data/shops";
import { formatPathSegment } from "@/utils/string";
import { PhoneIcon, TagIcon, XMarkIcon } from "@heroicons/react/20/solid";

const ShopDetailModal: React.FC<{ shop: ShopInfo; onClose: () => void }> = ({ shop, onClose }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const hasMenu = shop.menu && shop.menu.length > 0;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % shop.menu.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + shop.menu.length) % shop.menu.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full h-full bg-white p-6 overflow-auto max-w-3xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-black">
          <XMarkIcon className="w-8 h-8" />
        </button>
        <h2 className="text-xl font-bold">{shop.name}</h2>
        <p>{shop.address.locality} - {shop.address.number}</p>
        <div className="w-full max-w-3xl mx-auto">
          <img 
            alt={shop.name} 
            src={`/img/shops/sopodel/${formatPathSegment(shop.address.locality)}/${shop.address.number.toLowerCase()}/preview.webp`} 
            className="w-full max-w-[800px] h-64 object-cover mx-auto"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "/img/shops/default-preview.webp";
            }}
          />
        </div>

        <div className="flex w-full mt-2 gap-x-2">
          <PhoneIcon className="w-6 h-6" /><span className="font-bold">Nomor Kontak:</span><span>{shop.contact}</span>
        </div>

        <div className="flex w-full mt-2 gap-x-2">
          <TagIcon className="w-6 h-6" /><span className="font-bold">Tags:</span><span>{shop.tags.join(", ")}</span>
        </div>

        {/* Open Menu Button (only if menu exists) */}
        {hasMenu && (
          <button
            onClick={() => setIsMenuOpen(true)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            Lihat Menu
          </button>
        )}

        {/* Menu Modal */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-75">
            <div className="relative flex items-center justify-center w-full max-w-lg">
              {hasMenu ? (
                <>
                  {/* Previous Button */}
                  <button 
                    onClick={handlePrev} 
                    className="absolute left-0 p-2 bg-gray-800 bg-opacity-50 text-white rounded-full hover:bg-opacity-75"
                  >
                    ◀
                  </button>

                  {/* Menu Image */}
                  <img 
                    src={`/img/shops/sopodel/${formatPathSegment(shop.address.locality)}/${shop.address.number.toLowerCase()}/${shop.menu[currentIndex]}`} 
                    alt="Menu item" 
                    className="w-full h-full object-contain rounded-md"
                  />

                  {/* Next Button */}
                  <button 
                    onClick={handleNext} 
                    className="absolute right-0 p-2 bg-gray-800 bg-opacity-50 text-white rounded-full hover:bg-opacity-75"
                  >
                    ▶
                  </button>
                </>
              ) : (
                <p className="text-white text-lg">Menu tidak tersedia</p>
              )}
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="absolute z-60 top-4 right-4 text-white hover:text-gray-300"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShopDetailModal;
