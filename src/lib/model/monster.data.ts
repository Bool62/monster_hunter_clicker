import { ElementType } from './element.model';
import { ItemDATA } from './item.data';
import {
  Monster,
  MonsterReward,
  MonsterRewardCondition,
  MonsterSpecies,
  MonsterType,
} from './monster.model';
import { Rank } from './rank.model';

export namespace MonsterDATA {


  export const MONSTER_003_KELBI: Monster = new Monster(
    3,
    'Kelbi',
    'Small herbivores known for their gentle demeanor    and the medicinal properties of their horns.Those wishing to harvest a horn should aim for the head when attacking them.',
    MonsterType.SMALL,
    MonsterSpecies.HERBIVORE,
    [],
    [ElementType.FIRE, ElementType.WATER, ElementType.THUNDER, ElementType.ICE],
    [
      new MonsterReward(ItemDATA.ITEM_363, [
        new MonsterRewardCondition(Rank.LOW, 1, 30),
        new MonsterRewardCondition(Rank.HIGH, 1, 30),
        new MonsterRewardCondition(Rank.MASTER, 1, 35),
      ]),
      new MonsterReward(ItemDATA.ITEM_434, [
        new MonsterRewardCondition(Rank.LOW, 1, 45),
      ]),
      new MonsterReward(ItemDATA.ITEM_122, [
        new MonsterRewardCondition(Rank.LOW, 1, 10),
        new MonsterRewardCondition(Rank.HIGH, 1, 10),
        new MonsterRewardCondition(Rank.MASTER, 1, 10),
      ]),
      new MonsterReward(ItemDATA.ITEM_435, [
        new MonsterRewardCondition(Rank.HIGH, 1, 45),
        new MonsterRewardCondition(Rank.MASTER, 1, 10),
      ]),
      new MonsterReward(ItemDATA.ITEM_2368, [
        new MonsterRewardCondition(Rank.MASTER, 1, 30),
      ]),
    ],
    70,
    70,
    70,
    Rank.LOW,
    ''
  );



  export const MONSTER_ALL : Monster[] = [MONSTER_003_KELBI];

}
