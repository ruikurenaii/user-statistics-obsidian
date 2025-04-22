import { App, Plugin } from 'obsidian';
import { UserStatsSettings } from "./settings/settingsInterface";
import { DEFAULT_SETTINGS } from "./settings/defaultSettings";
import { UserStatsSettingsTab } from "./options/options";

export default class UserStatsPlugin extends Plugin {
	settings: UserStatsSettings;

  async onload() {
		await this.loadSettings();

    this.registerView(
      VIEW_TYPE_USERSTATS,
      (leaf) => new UserStatsView(leaf)
    );
   
    let focusStart: number | null = null;
    
    this.app.workspace.on("active-leaf-change", (leaf) => {
      const now = Date.now();
      
      if (focusStart !== null) {
        const duration = now - focusStart;
        this.settings.totalFocusTime = (this.settings.totalFocusTime ?? 0) + duration;
        this.saveSettings();
      }
      
      focusStart = now;
    });
	}

	this.addRibbon("lucide-file-chart-column", "View user statistics", async () => {
    }
  );

  async activateView() {
    const { workspace } = this.app;
    
    let leaf = workspace.getLeavesOfType(VIEW_TYPE_USERSTATS)[0];
    
    if (!leaf) {
      const newLeaf = workspace.getRightLeaf(false);
      if (!newLeaf) {
        console.error("Failed to create a sidebar view: No available leaf.");
        return;
      }
      leaf = newLeaf;
      
      await leaf.setViewState({
        type: VIEW_TYPE_USERSTATS,
        active: true,
      });
    }
    
    workspace.revealLeaf(leaf);
	}

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

  async saveSettings() {
    await this.saveData(this.settings);
	}
}
