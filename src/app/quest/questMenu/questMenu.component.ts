import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, type OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { ClickerGameState } from "../../store/clickerGame.state";
import { Observable, of } from "rxjs";
import { QuestCollect, QuestCombat } from "../../../lib/model/quest.model";
import { QuestState } from "../../store/quest.state";
import { ClickerGameActions } from "../../store/clickerGame.action";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "../../shared/components/confirmDialog/confirmDialog.component";

@Component({
  selector: "app-quest-menu",
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: "./questMenu.component.html",
  styleUrl: "./questMenu.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestMenuComponent implements OnInit {
  @Select(ClickerGameState.currentCollectQuest)
  currentCollectQuest$!: Observable<QuestCollect | undefined>;
  @Select(ClickerGameState.currentCombatQuest)
  currentCombatQuest$!: Observable<QuestCombat | undefined>;

  @Select(QuestState.questCollectArray)
  questsCollect$!: Observable<QuestCollect[]>;
  @Select(QuestState.questCombatArray)
  questsCombats$!: Observable<QuestCombat[]>;

  constructor(
    private readonly store: Store,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  startQuestCollect(id: number) {
    const currentCollectQuest = this.store.selectSnapshot(
      ClickerGameState.currentCollectQuest
    );
    if (currentCollectQuest) {
      this.dialog
        .open(ConfirmDialogComponent, {
          data: {
            title: "Confirm action",
            message:
              "A quest is actually running ! \n Do you want to loose the actual progression",
          },
        })
        .afterClosed()
        .subscribe((result) => {
          if (result) {
            this.store.dispatch(
              new ClickerGameActions.StartCollectQuest({ idQuest: id })
            );
          }
        });
    } else {
      this.store.dispatch(
        new ClickerGameActions.StartCollectQuest({ idQuest: id })
      );
    }
  }

  startQuestCombat(id: number) {
    const currentCombatQuest = this.store.selectSnapshot(
      ClickerGameState.currentCombatQuest
    );
    if (currentCombatQuest) {
      this.dialog
        .open(ConfirmDialogComponent, {
          data: {
            title: "Confirm action",
            message:
              "A quest is actually running ! \n Do you want to loose the actual progression",
          },
        })
        .afterClosed()
        .subscribe((result) => {
          if (result) {
            this.store.dispatch(
              new ClickerGameActions.StartCombatQuest({ idQuest: id })
            );
          }
        });
    } else {
      this.store.dispatch(
        new ClickerGameActions.StartCombatQuest({ idQuest: id })
      );
    }
  }
}
