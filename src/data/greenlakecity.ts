import { SiteInfo, ShopInfo } from "./shops"


const greenlakecity: SiteInfo = {
  id: "greenlakecity",
  name: "Green Lake City",
  address: "Cengkareng, Jakarta Barat dan Cipondoh, Tangerang",
  img_uri: "/img/shops/greenlakecity/site.webp",
  img_map_uri: ""
}


const greenlakecityList: ShopInfo[] = [
  {
    uid: "",
    name: "",
    contact: "",
    img_uri: "/img/shops/sopodel/food_court/b",
    is_active: false,
    has_promo: false,
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
    ],
    menu: [],
    promo: [],    
  },
]


export {
  greenlakecity,
  greenlakecityList
}
