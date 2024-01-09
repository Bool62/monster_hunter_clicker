import { Injectable } from "@angular/core";
import {
  Action,
  createSelector,
  Selector,
  State,
  StateContext,
} from "@ngxs/store";
import { QuestAction } from "./quest.action";
import { QuestCollect, QuestCombat } from "../../lib/model/quest.model";
import { QuestDATA } from "../../lib/model/quest.data";

export interface QuestStateModel {
  questCollect: Map<number, QuestCollect>;
  questCombat: Map<number, QuestCombat>;
}

@Injectable()
@State<QuestStateModel>({
  name: "Quest",
  defaults: {
    questCollect: new Map(),
    questCombat: new Map(),
  },
})
export class QuestState {
  @Action(QuestAction.LoadInit)
  updateAttackPower(
    ctx: StateContext<QuestStateModel>,
    action: QuestAction.LoadInit
  ) {
    const state = ctx.getState();

    const questCollect: Map<number, QuestCollect> = new Map();
    QuestDATA.QUEST_ALL_COLLECT.forEach((quest) => {
      questCollect.set(quest.id, quest);
    });

    ctx.patchState({
      questCollect: questCollect,
    });
  }

  @Selector()
  static questCollect(state: QuestStateModel): Map<number, QuestCollect> {
    return state.questCollect;
  }

  @Selector()
  static questCollectArray(state: QuestStateModel): QuestCollect[] {
    return Array.from(state.questCollect.values());
  }

  static questCollectById(id: number) {
    return createSelector([QuestState], (state: QuestStateModel) => {
      return state.questCollect.get(id)?.clone();
    });
  }
}
