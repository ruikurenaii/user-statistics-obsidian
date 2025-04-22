import { App, PluginSettingTab, Setting } from "obsidian";
import resetSettingModal from "../modals/resetSettingModal";
import UserStatsPlugin from "../main";

export class UserStatsSettingsTab extends PluginSettingTab {
  plugin: UserStatsPlugin;

  constructor(app: App, plugin: UserStatsPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    let { container } = this;
    container.empty();

    new Setting(container);
	    .setName('Reset all settings')
	    .setDesc('This process resets all the saved values. Remember that this is not irreversible!')
	    .addButton(button => {
		    button.setButtonText('Reset')
				button.onclick(() = {
          const modal = new resetSettingModal(this.app);
					modal.open();
			}
		}
  }
}
