import AnnouncementFeeds from '@/components/list-feeds';
import { Feed } from '@/data/feed';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import Form from 'next/form'
import Router from 'next/router';
import { useEffect, useState } from 'react';

const ShopPage: React.FC = () => {
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [loading, setLoading] = useState(true);
  const sid = 'sopodel';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/sopodel/feeds.json');
        const data = await response.json();
        setFeeds(data);
      } catch (error) {
        console.error('Failed to fetch feeds:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="mt-2 ml-2">
        <a href="/" className="text-sm/7 font-semibold text-indigo-600">
          <span aria-hidden="true">&larr;</span> Map Dino
        </a>
      </div>
      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 h-screen justify-between">
        <Form action={`/${sid}/s`} replace={false} scroll={false}>
          <div className="mx-auto max-w-2xl text-center">
            <img className="mx-auto w-24 sm:w-32" alt="logo" src="/img/sopodel-logo.webp"/>
            <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Makan apa ya?</h2>
            <div className="mt-2">
              <div className="min-w-full flex rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-none">
                <MagnifyingGlassIcon
                  className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
                />
                <input id="search"
                  name="q"
                  type="search"
                  required
                  placeholder="contoh: bakmi"
                  autoComplete="off"
                  className="col-start-1 row-start-1 block w-full rounded-md bg-white/20 py-1.5 px-2 text-base text-white outline-hidden placeholder:text-gray-400 focus:text-gray-900 focus:outline-none"
                />
              </div>
            </div>
            <button type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white px-3.5 py-2 rounded mt-4 w-full md:w-1/3 mx-1"
            >
              Cari
            </button>
            <button type="button"
              className="bg-gray-500 hover:bg-gray-700 text-white px-3.5 py-2 rounded mt-4 w-full md:w-1/3 mx-1"
              onClick={() => Router.push(`/${sid}/s`)}
            >
              Tampilkan Semua
            </button>
          </div>
        </Form>
        <div className="mb-auto">&nbsp;</div>
        <div className="mx-auto max-w-2xl px-6 py-6">
          {loading ? (
            <p className="text-center text-gray-500">Loading feeds...</p>
          ) : (
            <AnnouncementFeeds activity={feeds.slice(0, 3)} />
          )}
        </div>
        <div className="mx-auto max-w-2xl px-6">
          <a href={`/${sid}/feeds`} className="text-sm/7 text-blue-500">
            Tampilkan lebih banyak
          </a>
        </div>
        <div className="mx-auto text-center mt-8 text-sm/6 text-gray-400 md:order-1 md:mt-6">&copy; 2025 Map Dino. All rights reserved.</div>
      </div>
    </div>
  );
};

export default ShopPage