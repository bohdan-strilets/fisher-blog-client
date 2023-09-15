import { UserType } from "types/types/UserType";

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
