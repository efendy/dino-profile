import { greenlakecity } from "./greenlakecity"
import { sopodel } from "./sopodel"

interface SiteInfo {
  id: string
  name: string
  address: string
  img_uri: string
  img_map_uri: string
}

interface ShopAddress {
  type?: string,
  street?: string
  number: string
  locality: string
  postal?: string
}

interface Promo {
  campaign_start_time: number,
  campaign_end_time: number,
  img_uri: string
}

interface ShopInfo {
  uid: string
  name: string
  contact: string
  img_uri: string
  is_active: boolean
  has_promo: boolean
  address: ShopAddress
  operation_info: string[]
  tags: string[],
  menu: string[],
  promo: Promo[]
}

interface Site extends SiteInfo{
  list: ShopInfo[]
}

const sites: SiteInfo[] = [
  sopodel,
  greenlakecity
]

/* ShopInfo Template

  {
    name: "",
    contact: "",
    img_uri: "/img/shops/sopodel/food_court/b",
    address: {
      locality: "",
      number: "B0",
    },
    operation_info: [
      "Tutup", // Sunday
      "0900 – 1500", // Monday
      "0900 – 1500", // Tuesday
      "0900 – 1500", // Wednesday
      "0900 – 1500", // Thursday
      "0900 – 1500", // Friday
      "Tutup", // Saturday
    ],
    tags: [
      ""
    ]
  },

*/

export type {
  Site,
  SiteInfo,
  ShopInfo,
  ShopAddress
}

export {
  sites
}
