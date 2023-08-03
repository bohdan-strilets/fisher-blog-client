export type LocationType = {
  country: string | null;
  city: string | null;
  postcode: string | null;
};

export type SocialNetworksType = {
  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  pinterest: string | null;
};

export type UserType = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateBirth: Date | string;
  gender: "man" | "woman" | "other" | string;
  description: string | null;
  profession: string | null;
  phoneNumber: string | null;
  location: LocationType;
  socialNetworks: SocialNetworksType;
  hobby: string[];
  avatarURL: string;
  posterURL: string;
  activationToken: string;
  isActivated: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
};
