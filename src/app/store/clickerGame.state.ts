// character.state.ts

import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Character } from '../../lib/model/character.model';
import { MonsterDATA } from '../../lib/model/monster.data';
import { Monster } from '../../lib/model/monster.model';
import { ClickerGameActions } from './clickerGame.action';

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
      console.log(rewards);
      if (!state.currentMonster.isAlive()) {
        const rewards = state.currentMonster.generateReward();
        console.log(rewards);
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

  private spawnNextMonster(): Monster {
    return MonsterDATA.MONSTER_003_KELBI;
  }
}
