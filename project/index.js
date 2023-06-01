import { xdr } from "stellar-base";
import { buildScVal, xdr as DepXdr } from "xdr-dependency";

let scVal = buildScVal();
console.log("local xdr validation: ", xdr.ScVal.isValid(scVal));
console.log("dep xdr validation: ", DepXdr.ScVal.isValid(scVal));

// rebuilding the xdr with the local xdr version will fix validation
let scValString = scVal.toXDR().toString("base64");
let rebuiltScVal = xdr.ScVal.fromXDR(scValString, "base64");
console.log("local xdr rebuild validation: ", xdr.ScVal.isValid(rebuiltScVal));
console.log(
  "rebuild is the same? ",
  scValString == rebuiltScVal.toXDR().toString("base64")
);
