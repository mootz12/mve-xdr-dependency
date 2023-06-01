import { xdr } from "stellar-base";
import { buildScVal, xdr as DepXdr } from "xdr-dependency";

let scVal = buildScVal();
console.log("local xdr validation: ", xdr.ScVal.isValid(scVal));
console.log("dep xdr validation: ", DepXdr.ScVal.isValid(scVal));
