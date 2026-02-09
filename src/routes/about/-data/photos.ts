import bavariaChancelleryImagePath from "@/assets/photography/bavaria-chancellery.jpeg";
import eiffelTowerImagePath from "@/assets/photography/eiffel-tower.jpeg";
import fushimiInariTaishaImagePath from "@/assets/photography/fushimi-inari-taisha.jpeg";
import porteCailhauImagePath from "@/assets/photography/porte-cailhau.jpeg";
import sengenJinjaImagePath from "@/assets/photography/sengen-jinja.jpeg";
import unOfficeGenevaImagePath from "@/assets/photography/un-office-geneva.jpeg";

interface CountryFlag {
  readonly url: `https://upload.wikimedia.org/wikipedia/${string}.png`;
  readonly alt: `${string} Flag`;
}

const FLAG_BY_COUNTRY = {
  france: {
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/960px-Flag_of_France.svg.png",
    alt: "French Flag",
  },
  germany: {
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/960px-Flag_of_Germany.svg.png",
    alt: "German Flag",
  },
  japan: {
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/960px-Flag_of_Japan.svg.png",
    alt: "Japanese Flag",
  },
  switzerland: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/960px-Flag_of_Switzerland_%28Pantone%29.svg.png",
    alt: "Swiss Flag",
  },
} as const satisfies Record<Lowercase<string>, CountryFlag>;

export interface GeotaggedPhoto {
  readonly name: string | readonly [string, string];
  readonly path: string;
  readonly countryFlag: CountryFlag;
}

export const PHOTOS: readonly GeotaggedPhoto[] = [
  { name: ["Eiffel Tower", "Tour Eiffel"], path: eiffelTowerImagePath, countryFlag: FLAG_BY_COUNTRY["france"] },
  {
    name: ["United Nations Office at Geneva", "Office des Nations Unies à Genève"],
    path: unOfficeGenevaImagePath,
    countryFlag: FLAG_BY_COUNTRY["switzerland"],
  },
  { name: "Porte Cailhau", path: porteCailhauImagePath, countryFlag: FLAG_BY_COUNTRY["france"] },
  {
    name: ["Bavaria State Chancellery", "Bayerische Staatskanzlei"],
    path: bavariaChancelleryImagePath,
    countryFlag: FLAG_BY_COUNTRY["germany"],
  },
  {
    name: ["Fushimi Inari-taisha", "伏見稲荷大社"],
    path: fushimiInariTaishaImagePath,
    countryFlag: FLAG_BY_COUNTRY["japan"],
  },
  {
    name: ["Arakura Fuji Sengen Shrine", "新倉富士浅間神社"],
    path: sengenJinjaImagePath,
    countryFlag: FLAG_BY_COUNTRY["japan"],
  },
];
