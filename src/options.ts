import { App, PluginSettingTab, Setting } from "obsidian";
import UserStatsPlugin from "./main";

export class UserStatsSettingsTab extends PluginSettingTab {
  plugin: UserStatsPlugin;

  constructor(app: App, plugin: UserStatsPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    let { container } = this;
    container.empty();

    // more stuff soon
  }
}
