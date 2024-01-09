// character.state.ts

import { Injectable } from "@angular/core";
import { State, Action, StateContext, Selector, Store } from "@ngxs/store";
import { Character } from "../../lib/model/character.model";
import { MonsterDATA } from "../../lib/model/monster.data";
import { Monster } from "../../lib/model/monster.model";
import { ClickerGameActions } from "./clickerGame.action";
import { MonsterState } from "./monster.state";
import { Rank } from "../../lib/model/rank.model";
import { ItemInventory } from "../../lib/model/item.model";
import { QuestCollect, QuestCombat } from "../../lib/model/quest.model";
import { QuestState } from "./quest.state";

export interface ClickerGameStateModel {
  character: Character;
  monstersKilled: number;
  currentMonster?: Monster;
  currentCollectQuest?: QuestCollect;
  currentCombatQuest?: QuestCombat;
}

@State<ClickerGameStateModel>({
  name: "clickGame",
  defaults: {
    character: new Character(),
    monstersKilled: 0,
    currentMonster: undefined,
    currentCollectQuest: undefined,
    currentCombatQuest: undefined,
  },
})
@Injectable()
export class ClickerGameState {
  constructor(private readonly store: Store) {}

  // Définissez les actions pour mettre à jour l'état du personnage
  @Action(ClickerGameActions.Click)
  click(
    ctx: StateContext<ClickerGameStateModel>,
    action: ClickerGameActions.Click
  ) {
    const state = ctx.getState();

    const damage = state.character.totalAttackPower;

    if (state.currentMonster) {
      state.currentMonster.takeDamage(damage);
      const rewards = state?.currentMonster.generateReward();
      if (!state.currentMonster.isAlive()) {
        const rewards = state.currentMonster.generateReward();
        console.info(rewards);
        if (rewards && rewards.length > 0) {
          const inventoryItems = state.character.inventoryItem;
          rewards.forEach((reward) => {
            const inventoryItem = inventoryItems.get(reward.id);
            if (inventoryItem) {
              inventoryItem.quantity = inventoryItem.quantity + 1;
            } else {
              inventoryItems.set(reward.id, new ItemInventory(reward, 1));
            }
          });
        }
        // Le monstre actuel est vaincu, passer au suivant
        ctx.patchState({
          character: state.character,
          monstersKilled: state.monstersKilled + 1,
          currentMonster: this.spawnNextMonster(),
        });
      }
    } else {
      ctx.patchState({
        currentMonster: this.spawnNextMonster(),
      });
    }

    if (state.currentCollectQuest) {
      const startDate = new Date(state.currentCollectQuest.startDate);
      const newDate = new Date(
        startDate.getTime() + state.currentCollectQuest.timeTo * 1000
      );

      if (newDate.getTime() < new Date().getTime()) {
        console.error("End of quest");
        ctx.patchState({
          currentCollectQuest: undefined,
        });
      }
    }
  }

  // Définissez les actions pour mettre à jour l'état du personnage
  @Action(ClickerGameActions.StartCollectQuest)
  startCollectQuest(
    ctx: StateContext<ClickerGameStateModel>,
    action: ClickerGameActions.StartCollectQuest
  ) {
    const quest = this.store.selectSnapshot(
      QuestState.questCollectById(action.payload.idQuest)
    );
    if (quest) {
      ctx.patchState({
        currentCollectQuest: quest.clone(),
      });
    }
  }

  @Selector()
  static monstersKilled(state: ClickerGameStateModel): number {
    return state.monstersKilled;
  }

  @Selector()
  static currentMonster(state: ClickerGameStateModel): Monster | undefined {
    return state.currentMonster;
  }

  private spawnNextMonster(): Monster | undefined {
    const monster = this.store.selectSnapshot(MonsterState.monsterById(3));
    monster?.updateRankMonster(Rank.LOW);
    return monster;
  }
}
