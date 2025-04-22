import { TFile, TFolder, App } from "obsidian";

export async function calculateCharacters(app: App) {
  const vault = app.vault;
  let totalCharacters = 0;

  const processFolder = async (folder: TFolder) => {
    for (const child of folder.children) {
      if (child instanceof TFolder) {
        await processFolder(child);
      } else if (child instanceof TFile && child.extension === "md") {
        const content = await vault.read(child);
        totalCharacters += content.length;
      }
    }
  };

  await processFolder(vault.getRoot());

  return totalCharacters;
}
