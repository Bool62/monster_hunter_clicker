import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { Monster } from "../../lib/model/monster.model";
import { ClickerGameActions } from "../store/clickerGame.action";
import { ClickerGameState } from "../store/clickerGame.state";
import { MonsterService } from "../../lib/service/monster.service";
import { Stats } from "../../lib/model/character.model";
import { BigNumberPipe } from "../shared/pipe/bigNumber.pipe";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"],
  standalone: true,
  imports: [CommonModule, BigNumberPipe],
})
export class GameComponent implements OnInit {
  @Select(ClickerGameState.currentMonster)
  currentMonster$!: Observable<Monster>;
  @Select(ClickerGameState.stats) stats$!: Observable<Stats>;

  interval: any;

  constructor(
    private readonly store: Store,
    private readonly monsterService: MonsterService,
    private readonly ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    //Mock
    this.store.dispatch(
      new ClickerGameActions.StartCollectQuest({ idQuest: 1 })
    );
    this.store.dispatch(
      new ClickerGameActions.StartCombatQuest({ idQuest: 2 })
    );

    this.monsterService.getMonsters();
  }

  stopClick() {
    clearInterval(this.interval);
  }

  startClick() {
    this.interval = setInterval(() => {
      this.store.dispatch(new ClickerGameActions.Click());
      this.ref.detectChanges();
    }, 1000);
  }
}
