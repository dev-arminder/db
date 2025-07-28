// import * as z from "zod"; 

const z = require('zod')

const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/

const myString = z.string()
  .refine((val) => passwordReg.test(val))
 
 
const result = myString.safeParse("OH No");
console.log(result)