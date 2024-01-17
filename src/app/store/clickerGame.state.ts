// character.state.ts

import { Injectable } from "@angular/core";
import { State, Action, StateContext, Selector, Store } from "@ngxs/store";
import { Character, Stats } from "../../lib/model/character.model";
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
  currentMonster?: Monster;
  currentCollectQuest?: QuestCollect;
  currentCombatQuest?: QuestCombat;
}

@State<ClickerGameStateModel>({
  name: "clickGame",
  defaults: {
    character: new Character(),
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
        // current monster done, load next from quest

        state.character.stats.addMonsterKilled(state.currentMonster.id);
        const monster = state.currentCombatQuest?.nextMonster();

        ctx.patchState({
          character: state.character,
          currentMonster: monster,
        });

        if (state.currentCombatQuest?.endQuest) {
          const rewards = state.currentCombatQuest.generateReward();
          console.error(rewards);
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
            ctx.patchState({
              character: state.character,
            });
          }
          ctx.patchState({
            currentCombatQuest: undefined,
          });
        }
      }
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

  @Action(ClickerGameActions.StartCombatQuest)
  startCombatQuest(
    ctx: StateContext<ClickerGameStateModel>,
    action: ClickerGameActions.StartCombatQuest
  ) {
    const quest = this.store.selectSnapshot(
      QuestState.questCombatById(action.payload.idQuest)
    );
    if (quest) {
      ctx.patchState({
        currentCombatQuest: quest.clone(),
        currentMonster: quest.monsterByIndex(0),
      });
    }
  }

  @Selector()
  static stats(state: ClickerGameStateModel): Stats {
    return state.character.stats;
  }

  @Selector()
  static currentMonster(state: ClickerGameStateModel): Monster | undefined {
    return state.currentMonster;
  }

  @Selector()
  static currentCollectQuest(
    state: ClickerGameStateModel
  ): QuestCollect | undefined {
    return state.currentCollectQuest;
  }

  @Selector()
  static currentCombatQuest(
    state: ClickerGameStateModel
  ): QuestCombat | undefined {
    return state.currentCombatQuest;
  }

  @Selector()
  static character(state: ClickerGameStateModel): Character {
    return state.character;
  }

  @Selector()
  static inventoryItem(
    state: ClickerGameStateModel
  ): Map<number, ItemInventory> {
    return state.character.inventoryItem;
  }

  @Selector()
  static inventoryItemArray(state: ClickerGameStateModel): ItemInventory[] {
    return Array.from(state.character.inventoryItem.values());
  }

  private spawnNextMonster(): Monster | undefined {
    const monster = this.store.selectSnapshot(MonsterState.monsterById(3));
    monster?.updateRankMonster(Rank.LOW);
    return monster;
  }
}
