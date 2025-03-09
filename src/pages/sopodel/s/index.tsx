import Form from 'next/form'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { ShopInfo } from '@/data/shops';
import { SearchShopItem } from '@/components/search-shop-item';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ShopDetailModal from '@/components/shop-details-modal';

const SearchPage: React.FC = () => {
  const { query } = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedShop, setSelectedShop] = useState<ShopInfo | null>(null);
  const [list, setList] = useState<ShopInfo[]>([]);

  // Fetch data from public folder on client-side
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data/sopodel/shops.json');
        const data: ShopInfo[] = await res.json();
        setList(data);
      } catch (error) {
        console.error('Failed to load shop data:', error);
      }
    };
    
    fetchData();
  }, []);

  // Set initial search term from URL query param
  useEffect(() => {
    if (query.q) {
      setSearchTerm(query.q as string);
    }
  }, [query.q]);

  // Filter logic for name & tags
  const filteredShops = list.filter((shop) =>
    searchTerm
      .toLowerCase()
      .split(" ")
      .every(
        (term) =>
          shop.name.toLowerCase().includes(term) ||
          shop.tags.some((tag) => tag.toLowerCase().includes(term))
      )
  );

  return (
    <div className="bg-white">
      <Form action={`/sopodel/s`} replace={false} scroll={false}>
        <div className="sticky top-0 left-0 w-full bg-white shadow-md z-10 p-4">
        {/* <div className="relative flex items-center justify-center pr-6"> */}
          <div className="absolute left-4 shrink-0">
            <a href={`/sopodel`}>
              <img className="w-12" alt="logo" src="/img/sopodel-logo.webp"/>
            </a>
          </div>
          {/* Search */}
          <div className="min-w-0 flex-1 pl-14 pr-4">
            <div className="mx-auto grid w-full grid-cols-1 flex rounded-md bg-white ml-4 px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-none">
              <MagnifyingGlassIcon
                className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
              />
              <input id="search"
                name="q"
                type="search"
                required
                placeholder="contoh: bakmi"
                autoComplete="off"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="col-start-1 row-start-1 block w-full rounded-md bg-white/20 py-1.5 pr-2 pl-8 text-base outline-hidden placeholder:text-gray-400 text-gray-900 focus:outline-none"
              />
            </div>
          </div>
        </div>
        {/* Shop List */}
        <div className="px-6 py-6">
          <ul role="list" className="divide-y divide-gray-100">
            {filteredShops.map((shop) => {
              return shop.is_active ? (
                <li key={shop.uid} onClick={() => setSelectedShop(shop)} className="cursor-pointer">
                  <SearchShopItem data={shop} />
                </li>
              ) : null
            })}
          </ul>
        </div>
        <p className="mx-auto mt-8 text-sm/6 text-gray-400 md:order-1 md:mt-6">&copy; 2025 Map Dino. All rights reserved.</p>
      </Form>
      {selectedShop && <ShopDetailModal shop={selectedShop} onClose={() => setSelectedShop(null)} />}
    </div>
  );
}

export default SearchPage
