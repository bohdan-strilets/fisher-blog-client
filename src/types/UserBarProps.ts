import { SocialNetworksType } from "./UserType";

export type SocialNetworksProps = Pick<
  SocialNetworksType,
  "facebook" | "twitter" | "pinterest" | "instagram"
> & { margin?: string };

export type ListProps = Pick<SocialNetworksProps, "margin">;
