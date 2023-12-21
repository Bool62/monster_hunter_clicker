import { Injectable } from '@angular/core';
import {
  Action,
  createSelector,
  Selector,
  State,
  StateContext,
} from '@ngxs/store';
import { Armor } from '../../lib/model/armor.model';
import { ArmorAction } from './armor.action';

export interface ArmorStateModel {
  armors: Map<number, Armor>;
}

@State<ArmorStateModel>({
  name: 'armor',
  defaults: {
    armors: new Map(),
  },
})
@Injectable()
export class ArmorState {
  @Action(ArmorAction.LoadInit)
  updateAttackPower(
    ctx: StateContext<ArmorStateModel>,
    action: ArmorAction.LoadInit
  ) {
    const state = ctx.getState();

    ctx.patchState({
      armors: new Map(),
    });
  }

  @Selector()
  static armorsMap(state: ArmorStateModel): Map<number, Armor> {
    return state.armors;
  }

  @Selector()
  static armorsArray(state: ArmorStateModel): Armor[] {
    return Array.from(state.armors.values());
  }

  static armorById(id: number) {
    return createSelector([ArmorState], (state: ArmorStateModel) => {
      return state.armors.get(id);
    });
  }
}
