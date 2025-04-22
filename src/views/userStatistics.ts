import { WorkspaceLeaf, ItemView } from "obsidian";

export const VIEW_TYPE_USERSTATS = 'user-statistics-view';

export class UserStatsView extends ItemView {
  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  getDisplayText() {
    return 'User Statistics';
  }

  async onOpen() {
    const { container } = this;
    container.empty();
  }

  async onClose() {
    // i'll just put nothing here...
  }
}
