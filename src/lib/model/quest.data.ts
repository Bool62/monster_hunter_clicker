import { ItemDATA } from "./item.data";
import { Quest, QuestCollect, QuestReward } from "./quest.model";

export namespace QuestDATA {
  export const QUEST_001_R: QuestCollect = new QuestCollect(
    1,
    "Roly-poly Lanterns",
    "Objective: Deliver 8 Firelanterns",
    3600,
    [
      new QuestReward(ItemDATA.ITEM_125.clone(), 17, 1),
      new QuestReward(ItemDATA.ITEM_126.clone(), 24, 1),
      new QuestReward(ItemDATA.ITEM_687.clone(), 15, 1),
      new QuestReward(ItemDATA.ITEM_128.clone(), 22, 2),
      new QuestReward(ItemDATA.ITEM_699.clone(), 8, 1),
      new QuestReward(ItemDATA.ITEM_131.clone(), 8, 1),
      new QuestReward(ItemDATA.ITEM_719.clone(), 6, 1),
    ],
    240
  );

  export const QUEST_002_R: QuestCollect = new QuestCollect(
    2,
    "Fungal Frustrations",
    "Objective: Deliver 8 Unique Mushrooms",
    3600,
    [
      new QuestReward(ItemDATA.ITEM_125.clone(), 17, 1),
      new QuestReward(ItemDATA.ITEM_126.clone(), 24, 1),
      new QuestReward(ItemDATA.ITEM_687.clone(), 15, 1),
      new QuestReward(ItemDATA.ITEM_128.clone(), 22, 2),
      new QuestReward(ItemDATA.ITEM_699.clone(), 8, 1),
      new QuestReward(ItemDATA.ITEM_131.clone(), 8, 1),
      new QuestReward(ItemDATA.ITEM_719.clone(), 6, 1),
    ],
    240
  );

  export const QUEST_ALL_COLLECT = [QUEST_001_R, QUEST_002_R];
}
