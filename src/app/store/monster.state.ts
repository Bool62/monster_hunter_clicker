import { Injectable, numberAttribute } from '@angular/core';
import {
  Action,
  createSelector,
  Selector,
  State,
  StateContext,
} from '@ngxs/store';
import { Monster } from '../../lib/model/monster.model';
import { MonsterAction } from './monster.action';
import { MonsterDATA } from '../../lib/model/monster.data';

export interface MonsterStateModel {
  monsters: Map<number, Monster>;
}

@State<MonsterStateModel>({
  name: 'monster',
  defaults: {
    monsters: new Map(),
  },
})
@Injectable()
export class MonsterState {
  @Action(MonsterAction.LoadInit)
  updateAttackPower(
    ctx: StateContext<MonsterStateModel>,
    action: MonsterAction.LoadInit
  ) {
    const state = ctx.getState();

    const monsters: Map<number,Monster> = new Map();
    MonsterDATA.MONSTER_ALL.forEach((monster) => {
      monsters.set(monster.id,monster);
    })

    ctx.patchState({
      monsters: monsters,
    });
  }

  @Selector()
  static monstersMap(state: MonsterStateModel): Map<number, Monster> {
    return state.monsters;
  }

  @Selector()
  static monstersArray(state: MonsterStateModel): Monster[] {
    return Array.from(state.monsters.values());
  }

  static monsterById(id: number) {
    return createSelector([MonsterState], (state: MonsterStateModel) => {
      return state.monsters.get(id)?.clone();
    });
  }
}
