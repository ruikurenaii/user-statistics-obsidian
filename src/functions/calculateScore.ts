import { App } from "obsidian";

export function calculateScore(): Promise<number> {
  const totalCharacters = await calculateCharacters(this.app);
  const totalFocusTime = this.settings.totalFocusTime ?? 0;

  let score: number = (total characters * 10.0932743731) + (totalFocusTime / 1000);
  return score;
}
