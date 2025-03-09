import { ShopInfo } from "@/data/shops"
import { formatPathSegment } from "@/utils/string"
import { ChevronRightIcon } from "@heroicons/react/20/solid"
import { FC } from "react"

interface Props {
  data: ShopInfo
}

const SearchShopItem: FC<Props> = ({data}) => {
  return (
    <div className="relative flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <img 
          alt={data.name}  
          src={`/img/shops/sopodel/${formatPathSegment(data.address.locality)}/${data.address.number.toLowerCase()}/thumbnail.webp`} 
          className="size-12 flex-none rounded-md bg-gray-50" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null; // Prevent infinite loop
            target.src = "/img/shops/default.webp";
          }}
        />
        <div className="min-w-0 flex-auto">
          <div className="font-semibold text-gray-900">
            <a href={`#${data.uid}`}>
              <span className="absolute inset-x-0 -top-px bottom-0" />
              {data.name}
            </a>
          </div>
          <div className="flex text-gray-900">
            {data.address.locality} - {data.address.number} 
          </div>
          <div className="flex-wrap text-gray-500">
            {data.tags.map((tag, index) => (
              <span key={`${data.uid}-${index}`} className="inline-flex shrink-0 items-center rounded-sm bg-blue-50 mr-1 mt-1 px-1.5 py-0.5 font-medium text-blue-700 ring-1 ring-blue-600/20 ring-inset">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-x-4">
        <div className="flex flex-col items-end">
          {data.has_promo?(
            <span className="inline-flex shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
              Promo
            </span>
          ):(<></>)}
        </div>
        <ChevronRightIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
      </div>
    </div>
  )
}

export { 
  SearchShopItem
}