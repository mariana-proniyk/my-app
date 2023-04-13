export type IconsId =
  | "arrow-right"
  | "arrow"
  | "facebook"
  | "in"
  | "instagram"
  | "phone"
  | "play"
  | "search"
  | "twitter";

export type IconsKey =
  | "ArrowRight"
  | "Arrow"
  | "Facebook"
  | "In"
  | "Instagram"
  | "Phone"
  | "Play"
  | "Search"
  | "Twitter";

export enum Icons {
  ArrowRight = "arrow-right",
  Arrow = "arrow",
  Facebook = "facebook",
  In = "in",
  Instagram = "instagram",
  Phone = "phone",
  Play = "play",
  Search = "search",
  Twitter = "twitter",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.ArrowRight]: "61697",
  [Icons.Arrow]: "61698",
  [Icons.Facebook]: "61699",
  [Icons.In]: "61700",
  [Icons.Instagram]: "61701",
  [Icons.Phone]: "61702",
  [Icons.Play]: "61703",
  [Icons.Search]: "61704",
  [Icons.Twitter]: "61705",
};
