export const DEFAULT_DISPLAY_MASK = 0b11111111;

export type DisplayConfig = [
  boolean, // year
  boolean, // month
  boolean, // week
  boolean, // day
  boolean, // hour
  boolean, // minute
  boolean, // second
  boolean // millisecond
];

/* Was about to be a smart ass and try bit-masking
const TIME_BITS = {
    MILLISECOND: 1 << 0,
    SECOND: 1 << 1,
    MINUTE: 1 << 2,
    HOUR: 1 << 3,
  DAY: 1 << 4,
  WEEK: 1 << 5,
  MONTH: 1 << 6,
  YEAR: 1 << 7,
};

function getBits(num: number): string {
    return num.toString(2).padStart(8, "0");
}

function calcFormat(bytes: string) {}

function convertBoolMapToBits(boolMap: DisplayConfig): number {
    let bits = 0;
    boolMap.forEach((bool, index) => {
        if (bool) {
            bits |= 1 << (7 - index);
        }
    });
    return bits;
}
*/
