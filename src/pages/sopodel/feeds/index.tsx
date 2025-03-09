import { Feed } from '@/data/feed';
import ListFeeds from '@/components/list-feeds';
import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';

const FeedsPage: React.FC = () => {
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
    <div className="bg-white">
      <div className="sticky top-0 left-0 w-full bg-white shadow-md z-10 p-4">
        <div className="absolute left-4 shrink-0">
          <a href={`/${sid}`}>
            <img className="w-12" alt="logo" src="/img/sopodel-logo.webp" />
          </a>
        </div>
        <div className="min-w-0 flex-1 pl-14 pr-4">
          <div className="mx-auto flex justify-end items-center bg-white px-3.5 py-2 text-base text-gray-900">
            <a href={`/${sid}`}>
              <ArrowUturnLeftIcon className="size-5 text-gray-800" />
            </a>
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        {loading ? (
          <p className="text-center text-gray-500">Loading feeds...</p>
        ) : (
          <ListFeeds activity={feeds} />
        )}
      </div>

      <p className="mx-auto mt-8 text-sm/6 text-gray-400 md:order-1 md:mt-6">&copy; 2025 Map Dino. All rights reserved.</p>
    </div>
  );
};

export default FeedsPage
