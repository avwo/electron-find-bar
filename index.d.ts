export interface FindBarOptions {
  left?: number;
  right?: number; // 80 by default
  top?: number; // (mac: 20, win: 30) by default
  bottom?: number;
  darkMode?: boolean; // true by default
}

export default function(win: any, options?: FindBarOptions): void;
