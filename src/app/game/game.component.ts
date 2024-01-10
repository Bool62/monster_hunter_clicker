import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { Monster } from "../../lib/model/monster.model";
import { ClickerGameActions } from "../store/clickerGame.action";
import { ClickerGameState } from "../store/clickerGame.state";
import { MonsterAction } from "../store/monster.action";
import { ItemAction } from "../store/item.action";
import { MonsterService } from "../../lib/service/monster.service";
import { HttpClientModule } from "@angular/common/http";
import { QuestAction } from "../store/quest.action";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"],
  standalone: true,
  imports: [CommonModule],
})
export class GameComponent implements OnInit {
  @Select(ClickerGameState.currentMonster)
  currentMonster$!: Observable<Monster>;
  @Select(ClickerGameState.monstersKilled) monstersKilled$!: Observable<number>;

  interval: any;

  constructor(
    private readonly store: Store,
    private readonly monsterService: MonsterService
  ) {}

  ngOnInit() {
    //Mock
    this.store.dispatch(
      new ClickerGameActions.StartCollectQuest({ idQuest: 1 })
    );

    this.monsterService.getMonsters();
  }

  stopClick() {
    clearInterval(this.interval);
  }

  startClick() {
    this.interval = setInterval(() => {
      this.store.dispatch(new ClickerGameActions.Click());
    }, 1000);
  }
}
