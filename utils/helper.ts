export function unhexify(hexString: string): bigint {
  return BigInt(hexString);
}

export function toWei(amount: number, decimal: number): bigint {
  const bDecimal = BigInt(decimal);
  const bAmount = BigInt(amount);
  return 10n ** bDecimal * bAmount;
}
