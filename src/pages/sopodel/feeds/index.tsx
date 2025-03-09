import { GetStaticProps } from 'next';
import { Feed } from '@/data/feed';
import ListFeeds from '@/components/list-feeds';
import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid';

const feeds: Feed[] = [
  {
    id: "1",
    type: "news",
    img_uri: "/images/news1.jpg",
    message: "Breaking News: New features released in our latest update!",
    time: "2025-03-01T08:30:00Z",
  },
  {
    id: "2",
    type: "alert",
    img_uri: "/images/alert1.jpg",
    message: "System maintenance scheduled for March 3rd from 1 AM to 4 AM UTC.",
    time: "2025-03-01T10:15:00Z",
  },
  {
    id: "3",
    type: "information",
    img_uri: "/images/info1.jpg",
    message: "Did you know? You can now customize your dashboard layout.",
    time: "2025-03-01T12:00:00Z",
  },
  {
    id: "4",
    type: "information",
    img_uri: "/images/info1.jpg",
    message: "Jadwal operasional layanan telah diperbarui.",
    time: "2025-02-27T12:45:00.000Z"
  },
  {
    id: "5",
    type: "news",
    img_uri: "/images/news2.jpg",
    message: "Pencapaian baru: 1 juta pengguna aktif bulan ini!",
    time: "2025-02-26T08:00:00.000Z"
  },
  {
    id: "6",
    type: "alert",
    img_uri: "/images/alert2.jpg",
    message: "Harap perbarui aplikasi Anda untuk meningkatkan keamanan.",
    time: "2025-02-25T16:10:00.000Z"
  },
  {
    id: "7",
    type: "promotion",
    img_uri: "/images/promo2.jpg",
    message: "Promo cashback 10% untuk transaksi di atas Rp500.000!",
    time: "2025-02-24T11:20:00.000Z"
  },
  {
    id: "8",
    type: "information",
    img_uri: "/images/info2.jpg",
    message: "Pusat layanan pelanggan kini tersedia 24/7.",
    time: "2025-02-23T07:55:00.000Z"
  },
  {
    id: "9",
    type: "news",
    img_uri: "/images/news3.jpg",
    message: "Kami baru saja meluncurkan fitur baru untuk pengguna premium!",
    time: "2025-02-22T14:00:00.000Z"
  },
  {
    id: "10",
    type: "alert",
    img_uri: "/images/alert3.jpg",
    message: "Gangguan server terjadi pagi ini, tim sedang menangani.",
    time: "2025-02-21T09:30:00.000Z"
  },
  {
    id: "11",
    type: "promotion",
    img_uri: "/images/promo3.jpg",
    message: "Gratis ongkir untuk semua pesanan hingga akhir pekan!",
    time: "2025-02-20T17:45:00.000Z"
  },
  {
    id: "12",
    type: "information",
    img_uri: "/images/info3.jpg",
    message: "Kami telah meningkatkan kecepatan website hingga 50%.",
    time: "2025-02-19T10:20:00.000Z"
  },
  {
    id: "13",
    type: "news",
    img_uri: "/images/news4.jpg",
    message: "Tim kami meraih penghargaan sebagai aplikasi terbaik tahun ini!",
    time: "2025-02-18T13:40:00.000Z"
  },
  {
    id: "14",
    type: "alert",
    img_uri: "/images/alert4.jpg",
    message: "Perawatan sistem akan berlangsung besok malam.",
    time: "2025-02-17T18:15:00.000Z"
  },
  {
    id: "15",
    type: "promotion",
    img_uri: "/images/promo4.jpg",
    message: "Diskon 50% untuk layanan premium hanya hari ini!",
    time: "2025-02-16T15:00:00.000Z"
  },
  {
    id: "16",
    type: "information",
    img_uri: "/images/info4.jpg",
    message: "Kami kini menyediakan metode pembayaran baru untuk kemudahan Anda.",
    time: "2025-02-15T08:25:00.000Z"
  },
  {
    id: "17",
    type: "news",
    img_uri: "/images/news5.jpg",
    message: "Aplikasi kami kini tersedia dalam 5 bahasa baru!",
    time: "2025-02-14T14:55:00.000Z"
  },
  {
    id: "18",
    type: "alert",
    img_uri: "/images/alert5.jpg",
    message: "Pastikan akun Anda aman dengan mengaktifkan autentikasi dua faktor.",
    time: "2025-02-13T12:10:00.000Z"
  },
  {
    id: "19",
    type: "promotion",
    img_uri: "/images/promo5.jpg",
    message: "Langganan tahunan kini diskon 30% hingga akhir bulan!",
    time: "2025-02-12T09:50:00.000Z"
  },
  {
    id: "20",
    type: "information",
    img_uri: "/images/info5.jpg",
    message: "Fitur baru untuk personalisasi pengalaman Anda telah tersedia.",
    time: "2025-02-11T11:35:00.000Z"
  }
]


interface Props {
  sid: string
  list: Feed[]
}

const FeedsPage: React.FC<Props> = ({ list, sid }) => {

  return (
    <div className="bg-white">
      <div className="sticky top-0 left-0 w-full bg-white shadow-md z-10 p-4">
      {/* <div className="relative flex items-center justify-center pr-6"> */}
        <div className="absolute left-4 shrink-0">
          <a href={`/${sid}`}>
            <img className="w-12" alt="logo" src="/img/sopodel-logo.webp"/>
          </a>
        </div>
        {/* Search */}
        <div className="min-w-0 flex-1 pl-14 pr-4">
        <div className="mx-auto flex justify-end items-center bg-white px-3.5 py-2 text-base text-gray-900">
          <a href={`/${sid}`}>
            <ArrowUturnLeftIcon
              className="size-5 text-gray-800"
            />
          </a>
        </div>
        </div>
      </div>
      {/* Shop List */}
      <div className="px-6 py-6">
        <ListFeeds activity={list} />
      </div>
      <p className="mx-auto mt-8 text-sm/6 text-gray-400 md:order-1 md:mt-6">&copy; 2025 Map Dino. All rights reserved.</p>
    </div>
  );
}


export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      sid: "sopodel",
      list: feeds,
    },
  };
};

export default FeedsPage
