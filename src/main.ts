import { Component, importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NgxsModule, Store } from "@ngxs/store";
import "zone.js";
import { GameComponent } from "./app/game/game.component";
import { ArmorState } from "./app/store/armor.state";
import { WeaponState } from "./app/store/weapon.state";
import { ItemState } from "./app/store/item.state";
import { MonsterState } from "./app/store/monster.state";
import { ClickerGameState } from "./app/store/clickerGame.state";
import { provideHttpClient } from "@angular/common/http";
import { QuestState } from "./app/store/quest.state";
import { RouterOutlet, Routes, provideRouter } from "@angular/router";
import { ForgeMenuComponent } from "./app/forge/forgeMenu/forgeMenu.component";
import { InventoryMenuComponent } from "./app/inventory/inventoryMenu/inventoryMenu.component";
import { QuestMenuComponent } from "./app/quest/questMenu/questMenu.component";
import { ItemAction } from "./app/store/item.action";
import { MonsterAction } from "./app/store/monster.action";
import { QuestAction } from "./app/store/quest.action";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [GameComponent, RouterOutlet],
  template: ` <router-outlet></router-outlet> `,
})
export class App {
  name = "Angular";

  constructor(private readonly store: Store) {
    this.store.dispatch(new MonsterAction.LoadInit());
    this.store.dispatch(new ItemAction.LoadInit());
    this.store.dispatch(new QuestAction.LoadInit());
  }
}

const appRoutes: Routes = [
  { path: "forge", component: ForgeMenuComponent },
  { path: "inventory", component: InventoryMenuComponent },
  { path: "quest", component: QuestMenuComponent },
  { path: "**", component: GameComponent },
];

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(
      NgxsModule.forRoot([
        ClickerGameState,
        ArmorState,
        WeaponState,
        ItemState,
        MonsterState,
        QuestState,
      ])
    ),
    importProvidersFrom(NgxsLoggerPluginModule.forRoot()),
    provideHttpClient(),
    provideRouter(appRoutes),
  ],
});
