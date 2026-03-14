import bavariaChancellery from "#/assets/photography/bavaria-chancellery.jpeg";
import eiffelTower from "#/assets/photography/eiffel-tower.jpeg";
import fushimiInariTaisha from "#/assets/photography/fushimi-inari-taisha.jpeg";
import nSeoulTower from "#/assets/photography/n-seoul-tower.jpeg";
import porteCailhau from "#/assets/photography/porte-cailhau.jpeg";
import sengenJinja from "#/assets/photography/sengen-jinja.jpeg";
import unOfficeGeneva from "#/assets/photography/un-office-geneva.jpeg";

interface CountryFlag {
  readonly imageURL: `https://upload.wikimedia.org/wikipedia/${string}.png`;
  readonly altText: `${string} Flag`;
}

const FLAG_BY_COUNTRY = {
  france: {
    imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/960px-Flag_of_France.svg.png",
    altText: "French Flag",
  },
  germany: {
    imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/960px-Flag_of_Germany.svg.png",
    altText: "German Flag",
  },
  japan: {
    imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/960px-Flag_of_Japan.svg.png",
    altText: "Japanese Flag",
  },
  southKorea: {
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/960px-Flag_of_South_Korea.svg.png",
    altText: "South Korean Flag",
  },
  switzerland: {
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/960px-Flag_of_Switzerland_%28Pantone%29.svg.png",
    altText: "Swiss Flag",
  },
} as const satisfies Record<Uncapitalize<string>, CountryFlag>;

export interface GeotaggedPhoto {
  readonly displayName: readonly [english: string, native?: string];
  readonly image: string;
  readonly countryFlag: CountryFlag;
}

export const PHOTOS: readonly GeotaggedPhoto[] = [
  { displayName: ["Eiffel Tower", "Tour Eiffel"], image: eiffelTower, countryFlag: FLAG_BY_COUNTRY["france"] },
  {
    displayName: ["United Nations Office at Geneva", "Office des Nations Unies à Genève"],
    image: unOfficeGeneva,
    countryFlag: FLAG_BY_COUNTRY["switzerland"],
  },
  { displayName: ["Porte Cailhau"], image: porteCailhau, countryFlag: FLAG_BY_COUNTRY["france"] },
  {
    displayName: ["Bavaria State Chancellery", "Bayerische Staatskanzlei"],
    image: bavariaChancellery,
    countryFlag: FLAG_BY_COUNTRY["germany"],
  },
  {
    displayName: ["Fushimi Inari-taisha", "伏見稲荷大社"],
    image: fushimiInariTaisha,
    countryFlag: FLAG_BY_COUNTRY["japan"],
  },
  {
    displayName: ["Arakura Fuji Sengen Shrine", "新倉富士浅間神社"],
    image: sengenJinja,
    countryFlag: FLAG_BY_COUNTRY["japan"],
  },
  { displayName: ["N Seoul Tower", "N 서울타워"], image: nSeoulTower, countryFlag: FLAG_BY_COUNTRY["southKorea"] },
];
