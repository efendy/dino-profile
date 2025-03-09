import { SiteInfo, sites } from "@/data/shops";
import { GetStaticProps } from "next";

interface Props {
  list: SiteInfo[]
}

const HomePage: React.FC<Props> = ({ list }) => {

  return (
    <div className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-base/7 font-semibold text-indigo-600">Map Dino</p>
        <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Laper?</h2>
        <p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Di sini tempat makan minum yang sudah ditelusuri @Dino.
        </p>
        <div className="mx-auto mt-4 grid auto-rows-fr grid-cols-2 gap-8 max-w-none md:grid-cols-4">
          {list.map((site, index) => (
            <article
              key={`site-${index}`}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-lg bg-gray-900 px-8 pt-8 pb-4"
            >
              <a href={`/${site.id}`}>
                <img alt="" src={site.img_uri} className="absolute inset-0 -z-10 size-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />

                <div className="flex flex-wrap items-center gap-y-1 text-sm/6 text-gray-300 ">
                  <div className="-ml-4 flex items-center gap-x-4">
                    <div className="flex gap-x-2.5  text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                      {site.address}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg/6 font-semibold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  <span className="absolute inset-0" />
                  {site.name}
                </h3>
              </a>
            </article>
          ))}
        </div>
        {/* <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          <input
            id="search"
            name="search"
            required
            placeholder="contoh: bakmi"
            autoComplete="off"
            className="min-w-full flex-auto rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm mt-4 w-1/2"
          >
            Cari
          </button>
        </p> */}
        <p className="mx-auto mt-8 text-sm/6 text-gray-400 md:order-1 md:mt-6">&copy; 2025 Map Dino. All rights reserved.</p>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {
      list: sites,
    },
  }
}

export default HomePage
