import { xdr } from "stellar-base";

export * from "stellar-base";

/**
 * Build a test ScVal
 *
 * @returns {xdr.ScVal}
 */
export function buildScVal() {
  return xdr.ScVal.scvVec([xdr.ScVal.scvSymbol("Admin")]);
}
