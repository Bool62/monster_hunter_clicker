import { Injectable } from '@angular/core';
import {
  Action,
  createSelector,
  Selector,
  State,
  StateContext,
} from '@ngxs/store';
import { Weapon } from '../../lib/model/weapon.model';
import { WeaponAction } from './weapon.action';

export interface WeaponStateModel {
  weapons: Map<number, Weapon>;
}

@State<WeaponStateModel>({
  name: 'Weapon',
  defaults: {
    weapons: new Map(),
  },
})
@Injectable()
export class WeaponState {
  @Action(WeaponAction.LoadInit)
  updateAttackPower(
    ctx: StateContext<WeaponStateModel>,
    action: WeaponAction.LoadInit
  ) {
    const state = ctx.getState();

    ctx.patchState({
      weapons: new Map(),
    });
  }

  @Selector()
  static WeaponsMap(state: WeaponStateModel): Map<number, Weapon> {
    return state.weapons;
  }

  @Selector()
  static WeaponsArray(state: WeaponStateModel): Weapon[] {
    return Array.from(state.weapons.values());
  }

  static WeaponById(id: number) {
    return createSelector([WeaponState], (state: WeaponStateModel) => {
      return state.weapons.get(id);
    });
  }
}
