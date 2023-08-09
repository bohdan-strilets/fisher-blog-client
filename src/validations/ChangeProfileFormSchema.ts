import * as yup from "yup";
import {
  phoneRegex,
  regexFacebook,
  regexTwitter,
  regexPinterest,
  regexInstagram,
} from "helpers/regex";

const ChangeProfileFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must not exceed 50 characters")
    .nullable()
    .transform((current, original) => (original === "" ? null : current)),
  lastName: yup
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must not exceed 50 characters")
    .nullable()
    .transform((current, original) => (original === "" ? null : current)),
  dateBirth: yup
    .string()
    .nullable()
    .transform((current, original) => (original === "" ? null : current)),
  gender: yup
    .string()
    .oneOf(["man", "woman", "other"], "Please select a valid gender option")
    .nullable()
    .transform((current, original) => (original === "" ? null : current)),
  description: yup
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must not exceed 500 characters")
    .nullable()
    .transform((current, original) => (original === "" ? null : current)),
  profession: yup
    .string()
    .nullable()
    .transform((current, original) => (original === "" ? null : current)),
  phoneNumber: yup
    .string()
    .matches(
      phoneRegex,
      "Please enter a valid phone number (format: +48123456789)"
    )
    .nullable()
    .transform((current, original) => (original === "" ? null : current)),
  country: yup
    .string()
    .min(2, "Country name must be at least 2 characters")
    .max(100, "Country name must not exceed 100 characters")
    .nullable()
    .transform((current, original) => (original === "" ? null : current)),
  city: yup
    .string()
    .min(2, "City name must be at least 2 characters")
    .max(100, "City name must not exceed 100 characters")
    .nullable()
    .transform((current, original) => (original === "" ? null : current)),
  postcode: yup
    .string()
    .nullable()
    .transform((current, original) => (original === "" ? null : current)),
  facebook: yup
    .string()
    .url("Please enter a valid URL")
    .max(255, "URL must not exceed 255 characters")
    .matches(regexFacebook, "Please enter a valid Facebook profile URL")
    .nullable()
    .transform((current, original) => (original === "" ? null : current)),
  instagram: yup
    .string()
    .url("Please enter a valid URL")
    .max(255, "URL must not exceed 255 characters")
    .matches(regexInstagram, "Please enter a valid Instagram profile URL")
    .nullable()
    .transform((current, original) => (original === "" ? null : current)),
  twitter: yup
    .string()
    .url("Please enter a valid URL")
    .max(255, "URL must not exceed 255 characters")
    .matches(regexTwitter, "Please enter a valid Twitter profile URL")
    .nullable()
    .transform((current, original) => (original === "" ? null : current)),
  pinterest: yup
    .string()
    .url("Please enter a valid URL")
    .max(255, "URL must not exceed 255 characters")
    .matches(regexPinterest, "Please enter a valid Pinterest profile URL")
    .nullable()
    .transform((current, original) => (original === "" ? null : current)),
  hobby: yup.array().of(yup.string().required()),
});

export default ChangeProfileFormSchema;
