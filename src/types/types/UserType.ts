import { LocationType } from "./LocationType";
import { SocialNetworksType } from "./SocialNetworksType";

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
