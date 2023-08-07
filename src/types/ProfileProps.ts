import { UserType } from "./UserType";
import { SocialNetworksType } from "./UserType";

export type HobbyListProps = {
  hobby: string[];
};

export type DataItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string | React.ReactNode;
};

export type HeaderProps = {
  title: string;
  userId: string;
  isActivated: boolean;
};

export type StatusProps = Pick<HeaderProps, "isActivated">;

export type UserDataProps = Pick<
  UserType,
  | "firstName"
  | "lastName"
  | "email"
  | "dateBirth"
  | "gender"
  | "hobby"
  | "profession"
  | "phoneNumber"
  | "location"
  | "description"
  | "socialNetworks"
>;

export type SocialNetworksListProps = Pick<
  SocialNetworksType,
  "facebook" | "twitter" | "pinterest" | "instagram"
>;
