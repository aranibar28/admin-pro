import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './pages/main/main.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MessagesComponent } from './pages/messages/messages.component';

@NgModule({
  declarations: [MainComponent, SettingsComponent, ProfileComponent, MessagesComponent],
  imports: [CommonModule],
})
export class AccountModule {}
