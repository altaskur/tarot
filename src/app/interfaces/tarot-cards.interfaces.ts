export interface Card {
  number: number;
  name: string;
  meaning: string;
  position?: string;
  flipped?: boolean;
  prediction?: string;
}
