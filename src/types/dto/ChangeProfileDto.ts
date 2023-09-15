type LocationDto = {
  country?: string | null;
  city?: string | null;
  postcode?: string | null;
};

type SocialNetworksDto = {
  facebook?: string | null;
  instagram?: string | null;
  twitter?: string | null;
  pinterest?: string | null;
};

export type ChangeProfileDto = {
  firstName?: string | null;
  lastName?: string | null;
  dateBirth?: string | null;
  gender?: "man" | "woman" | "other" | string | null;
  description?: string | null;
  profession?: string | null;
  phoneNumber?: string | null;
  location?: LocationDto | null;
  socialNetworks?: SocialNetworksDto | null;
  hobby?: string[] | null;
};
