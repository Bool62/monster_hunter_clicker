// character.state.ts

import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { Character } from '../../lib/model/character.model';
import { MonsterDATA } from '../../lib/model/monster.data';
import { Monster } from '../../lib/model/monster.model';
import { ClickerGameActions } from './clickerGame.action';
import { MonsterState } from './monster.state';
import { Rank } from '../../lib/model/rank.model';
import { ItemInventory } from '../../lib/model/item.model';

export interface ClickerGameStateModel {
  character: Character;
  monstersKilled: number;
  currentMonster?: Monster;
}

@State<ClickerGameStateModel>({
  name: 'clickGame',
  defaults: {
    character: new Character(),
    monstersKilled: 0,
    currentMonster: undefined,
  },
})
@Injectable()
export class ClickerGameState {


  constructor(private readonly store:Store) {}

  // Définissez les actions pour mettre à jour l'état du personnage
  @Action(ClickerGameActions.Click)
  click(
    ctx: StateContext<ClickerGameStateModel>,
    action: ClickerGameActions.Click
  ) {
    const state = ctx.getState();

    const damage = state.character.getTotalAttackPower();

    if (state.currentMonster) {
      state.currentMonster.takeDamage(damage);
      const rewards = state?.currentMonster.generateReward();
      if (!state.currentMonster.isAlive()) {
        const rewards = state.currentMonster.generateReward();
        if(rewards && rewards.length > 0) {
          const inventoryItem = state.character.getInventoryItem();
          rewards.forEach((reward) => {
            if(inventoryItem.get(reward.getId())) {

            }
            else {
              // TODO création inventory
              //inventoryItem.set(reward.getId(),new ItemInventory());
            }
          })
        }
        // Le monstre actuel est vaincu, passer au suivant
        ctx.patchState({
          monstersKilled: state.monstersKilled + 1,
          currentMonster: this.spawnNextMonster(),
        });
      }
    } else {
      ctx.patchState({
        currentMonster: this.spawnNextMonster(),
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

  private spawnNextMonster(): Monster|undefined {
    const monster = this.store.selectSnapshot(MonsterState.monsterById(3));
    monster?.updateRankMonster(Rank.LOW)
    return monster;
  }
}
