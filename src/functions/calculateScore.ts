import { App } from "obsidian";
import { calculateCharacters } from "./calculateCharacters";

export function calculateScore(a): Promise<number> {
  const totalCharacters = await calculateCharacters(this.app);
  const totalFocusTime = this.settings.totalFocusTime ?? 0;

  let score: number = (totalCharacters * 10.0932743731) + (totalFocusTime / 1000);
  return score;
}
