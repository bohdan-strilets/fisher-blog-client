export type ChangeProfileFormFields = {
  firstName?: string | null;
  lastName?: string | null;
  dateBirth?: string | null;
  gender?: "man" | "woman" | "other" | string | null;
  description?: string | null;
  profession?: string | null;
  phoneNumber?: string | null;
  country?: string | null;
  city?: string | null;
  postcode?: string | null;
  facebook?: string | null;
  instagram?: string | null;
  twitter?: string | null;
  pinterest?: string | null;
  hobby?: string[] | null;
};
