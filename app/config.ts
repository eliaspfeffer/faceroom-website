export const FREE_ROOM_CAP = 4;

// Marketing target. Subject to FAC-3 WebRTC validation — drop to 10 if reliability suffers.
export const TEAM_ROOM_CAP = 12;

export const PRICING = {
  team: {
    seatPriceMonthly: 6,
    annualDiscountPct: 20,
  },
} as const;

export function annualPerSeat(monthly: number, discountPct: number): string {
  const v = (monthly * (100 - discountPct)) / 100;
  return v.toFixed(2).replace(/\.00$/, "");
}
