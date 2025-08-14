import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as z from "zod";
import { LITERALS, REG_EX } from "../constants";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const masterPasswordSchema = z
  .string()
  .min(8, { message: LITERALS.MIN_PASSWORD_ERROR_MESSAGE, abort: true })
  .refine((val) => REG_EX.atLeastOneLowerChar.test(val), {
    message: LITERALS.PASSWORD_CONTAINS_LOWER_CHAR,
    abort: true,
  })
  .refine((val) => REG_EX.atLeastOneUpperChar.test(val), {
    message: LITERALS.PASSWORD_CONTAINS_UPPER_CHAR,
    abort: true,
  })
  .refine((val) => REG_EX.atLeastOneNumber.test(val), {
    message: LITERALS.PASSWORD_CONTAINS_NUMBER,
    abort: true,
  })
  .refine((val) => REG_EX.atLeastOneSpecialChar.test(val), {
    message: LITERALS.PASSWORD_CONTAINS_SPECIAL_CHAR,
    abort: true,
  });

export { cn, masterPasswordSchema };
