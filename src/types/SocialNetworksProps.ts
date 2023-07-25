export type SocialNetworksProps = {
  facebook?: string;
  twitter?: string;
  pinterest?: string;
  instagram?: string;
  margin?: string;
};

export type ListProps = Pick<SocialNetworksProps, "margin">;
