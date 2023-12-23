import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import 'zone.js';
import { GameComponent } from './app/game/game.component';
import { ArmorState } from './app/store/armor.state';
import { WeaponState } from './app/store/weapon.state';
import { ItemState } from './app/store/item.state';
import { MonsterState } from './app/store/monster.state';
import { ClickerGameState } from './app/store/clickerGame.state';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameComponent],
  template: `
    <app-game></app-game>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(
      NgxsModule.forRoot([
        ClickerGameState,
        ArmorState,
        WeaponState,
        ItemState,
        MonsterState,
      ])
    ),
    importProvidersFrom(NgxsLoggerPluginModule.forRoot()),
    provideHttpClient()
  ],
});
