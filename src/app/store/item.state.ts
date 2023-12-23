import { Injectable } from '@angular/core';
import {
  Action,
  createSelector,
  Selector,
  State,
  StateContext,
} from '@ngxs/store';
import { Item } from '../../lib/model/item.model';
import { ItemAction } from './item.action';
import { ItemDATA } from '../../lib/model/item.data';

export interface ItemStateModel {
  items: Map<number, Item>;
}

@Injectable()
@State<ItemStateModel>({
  name: 'Item',
  defaults: {
    items: new Map(),
  },
})
export class ItemState {
  @Action(ItemAction.LoadInit)
  updateAttackPower(
    ctx: StateContext<ItemStateModel>,
    action: ItemAction.LoadInit
  ) {
    const state = ctx.getState();

    const items: Map<number,Item> = new Map();
    ItemDATA.ITEM_ALL.forEach((item) => {
      items.set(item.id,item);
    })

    ctx.patchState({
      items: items,
    });
  }

  @Selector()
  static ItemsMap(state: ItemStateModel): Map<number, Item> {
    return state.items;
  }

  @Selector()
  static ItemsArray(state: ItemStateModel): Item[] {
    return Array.from(state.items.values());
  }

  static ItemById(id: number) {
    return createSelector([ItemState], (state: ItemStateModel) => {
      return state.items.get(id);
    });
  }
}
