import { App, Modal } from "./obsidian";

export class resetSettingModal extends Modal {
  constructor(app: App) {
    super(app);

    this.setTitle("Confirm reset?");
    this.setContent("Are you sure you want to reset all of your settings? Be careful though, everything will be reset and this process is not irreversible!");
    // i'll add more content soon.
  }
}
