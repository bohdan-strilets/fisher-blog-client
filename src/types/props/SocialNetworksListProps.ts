import { SocialNetworksType } from "types/types/SocialNetworksType";

export type SocialNetworksListProps = Pick<
  SocialNetworksType,
  "facebook" | "twitter" | "pinterest" | "instagram"
>;
