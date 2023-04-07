export type IconsId =
  | "arrow-right"
  | "facebook"
  | "in"
  | "instagram"
  | "phone"
  | "search"
  | "twitter";

export type IconsKey =
  | "ArrowRight"
  | "Facebook"
  | "In"
  | "Instagram"
  | "Phone"
  | "Search"
  | "Twitter";

export enum Icons {
  ArrowRight = "arrow-right",
  Facebook = "facebook",
  In = "in",
  Instagram = "instagram",
  Phone = "phone",
  Search = "search",
  Twitter = "twitter",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.ArrowRight]: "61697",
  [Icons.Facebook]: "61698",
  [Icons.In]: "61699",
  [Icons.Instagram]: "61700",
  [Icons.Phone]: "61701",
  [Icons.Search]: "61702",
  [Icons.Twitter]: "61703",
};
