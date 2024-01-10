import { ElementType } from "./element.model";
import { ItemDATA } from "./item.data";
import {
  Monster,
  MonsterReward,
  MonsterRewardCondition,
  MonsterSpecies,
  MonsterType,
} from "./monster.model";
import { Rank } from "./rank.model";

export namespace MonsterDATA {
  export const MONSTER_001 = new Monster(
    1,
    "Rathian",
    'A wyvern known as the "Queen of the Land." Terrestrial predator, it overpowers its prey with a venomous tail and powerful legs.',
    MonsterType.LARGE,
    MonsterSpecies.FLYING_WYVERN,
    [ElementType.FIRE],
    [
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [
      new MonsterReward(ItemDATA.ITEM_92.clone().clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 41),
      ]),
      new MonsterReward(ItemDATA.ITEM_93.clone().clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 30),
      ]),
      new MonsterReward(ItemDATA.ITEM_94.clone().clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 20),
        new MonsterRewardCondition(Rank.HIGH, 2, 13),
      ]),
      new MonsterReward(ItemDATA.ITEM_95.clone().clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 13),
      ]),
      new MonsterReward(ItemDATA.ITEM_102.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 15),
      ]),
      new MonsterReward(ItemDATA.ITEM_419.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 13),
      ]),
      new MonsterReward(ItemDATA.ITEM_96.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 1),
        new MonsterRewardCondition(Rank.HIGH, 1, 2),
      ]),
      new MonsterReward(ItemDATA.ITEM_101.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 5),
        new MonsterRewardCondition(Rank.HIGH, 1, 11),
      ]),
      new MonsterReward(ItemDATA.ITEM_457.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 31),
      ]),
      new MonsterReward(ItemDATA.ITEM_1006.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 50),
        new MonsterRewardCondition(Rank.HIGH, 1, 20),
        new MonsterRewardCondition(Rank.MASTER, 1, 15),
      ]),
      new MonsterReward(ItemDATA.ITEM_294.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 40),
      ]),
      new MonsterReward(ItemDATA.ITEM_295.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 29),
      ]),
      new MonsterReward(ItemDATA.ITEM_296.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 13),
      ]),
      new MonsterReward(ItemDATA.ITEM_445.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 19),
      ]),
      new MonsterReward(ItemDATA.ITEM_421.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 12),
      ]),
      new MonsterReward(ItemDATA.ITEM_297.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 1),
        new MonsterRewardCondition(Rank.MASTER, 1, 1),
      ]),
      new MonsterReward(ItemDATA.ITEM_458.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 4),
        new MonsterRewardCondition(Rank.MASTER, 1, 12),
      ]),
      new MonsterReward(ItemDATA.ITEM_1028.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 30),
      ]),
      new MonsterReward(ItemDATA.ITEM_1007.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 30),
        new MonsterRewardCondition(Rank.MASTER, 1, 35),
      ]),
      new MonsterReward(ItemDATA.ITEM_2007.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 40),
      ]),
      new MonsterReward(ItemDATA.ITEM_2006.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 29),
      ]),
      new MonsterReward(ItemDATA.ITEM_2008.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 19),
      ]),
      new MonsterReward(ItemDATA.ITEM_2009.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 13),
      ]),
      new MonsterReward(ItemDATA.ITEM_2375.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 16),
      ]),
      new MonsterReward(ItemDATA.ITEM_2360.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 12),
      ]),
      new MonsterReward(ItemDATA.ITEM_2010.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 1),
      ]),
      new MonsterReward(ItemDATA.ITEM_2016.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 31),
      ]),
    ],
    4500,
    4500,
    4500,
    Rank.LOW,
    ""
  );

  export const MONSTER_002 = new Monster(
    2,
    "Rathalos",
    'The apex monster of the Ancient Forest, also known as the "King of the Skies". A fierce wyvern that descends upon invaders, attacking with its venomous claws and fiery breath.',
    MonsterType.LARGE,
    MonsterSpecies.FLYING_WYVERN,
    [ElementType.FIRE],
    [
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [
      new MonsterReward(ItemDATA.ITEM_97.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 39),
      ]),
      new MonsterReward(ItemDATA.ITEM_98.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 33),
      ]),
      new MonsterReward(ItemDATA.ITEM_99.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 24),
      ]),
      new MonsterReward(ItemDATA.ITEM_464.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 28),
        new MonsterRewardCondition(Rank.HIGH, 1, 36),
      ]),
      new MonsterReward(ItemDATA.ITEM_102.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 13),
      ]),
      new MonsterReward(ItemDATA.ITEM_101.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 9),
        new MonsterRewardCondition(Rank.HIGH, 1, 15),
      ]),
      new MonsterReward(ItemDATA.ITEM_100.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 1),
        new MonsterRewardCondition(Rank.HIGH, 1, 2),
      ]),
      new MonsterReward(ItemDATA.ITEM_457.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 24),
      ]),
      new MonsterReward(ItemDATA.ITEM_1006.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 50),
        new MonsterRewardCondition(Rank.HIGH, 1, 15),
        new MonsterRewardCondition(Rank.MASTER, 1, 10),
      ]),
      new MonsterReward(ItemDATA.ITEM_310.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 38),
      ]),
      new MonsterReward(ItemDATA.ITEM_311.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 29),
      ]),
      new MonsterReward(ItemDATA.ITEM_312.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 24),
      ]),
      new MonsterReward(ItemDATA.ITEM_445.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 13),
      ]),
      new MonsterReward(ItemDATA.ITEM_458.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 9),
        new MonsterRewardCondition(Rank.MASTER, 1, 10),
      ]),
      new MonsterReward(ItemDATA.ITEM_313.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 1),
        new MonsterRewardCondition(Rank.MASTER, 1, 1),
      ]),
      new MonsterReward(ItemDATA.ITEM_1028.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 23),
      ]),
      new MonsterReward(ItemDATA.ITEM_1007.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 35),
        new MonsterRewardCondition(Rank.MASTER, 1, 40),
      ]),
      new MonsterReward(ItemDATA.ITEM_2011.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 38),
      ]),
      new MonsterReward(ItemDATA.ITEM_2012.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 31),
      ]),
      new MonsterReward(ItemDATA.ITEM_2014.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 25),
      ]),
      new MonsterReward(ItemDATA.ITEM_2375.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 13),
      ]),
      new MonsterReward(ItemDATA.ITEM_2013.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 25),
      ]),
      new MonsterReward(ItemDATA.ITEM_2015.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 1),
      ]),
      new MonsterReward(ItemDATA.ITEM_2016.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 23),
      ]),
    ],
    4800,
    4800,
    4900,
    Rank.LOW,
    ""
  );

  export const MONSTER_003: Monster = new Monster(
    3,
    "Kelbi",
    "Small herbivores known for their gentle demeanor and the medicinal properties of their horns. Those wishing to harvest a horn should aim for the head when attacking them.",
    MonsterType.SMALL,
    MonsterSpecies.HERBIVORE,
    [],
    [ElementType.FIRE, ElementType.WATER, ElementType.THUNDER, ElementType.ICE],
    [
      new MonsterReward(ItemDATA.ITEM_363.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 30),
        new MonsterRewardCondition(Rank.HIGH, 1, 30),
        new MonsterRewardCondition(Rank.MASTER, 1, 35),
      ]),
      new MonsterReward(ItemDATA.ITEM_434.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 45),
      ]),
      new MonsterReward(ItemDATA.ITEM_122.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 10),
        new MonsterRewardCondition(Rank.HIGH, 1, 10),
        new MonsterRewardCondition(Rank.MASTER, 1, 10),
      ]),
      new MonsterReward(ItemDATA.ITEM_435.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 45),
        new MonsterRewardCondition(Rank.MASTER, 1, 10),
      ]),
      new MonsterReward(ItemDATA.ITEM_2368.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 30),
      ]),
    ],
    70,
    70,
    70,
    Rank.LOW,
    ""
  );

  export const MONSTER_005 = new Monster(
    5,
    "Hornetaur",
    "Small insects that are found primarily on land. They're highly territorial and will attack anything that approaches them. Gather their materials by attacking them with the slinger.",
    MonsterType.SMALL,
    MonsterSpecies.NEOPTERON,
    [],
    [ElementType.FIRE, ElementType.WATER],
    [
      new MonsterReward(ItemDATA.ITEM_2330.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 40),
      ]),
      new MonsterReward(ItemDATA.ITEM_2329.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 32),
      ]),
      new MonsterReward(ItemDATA.ITEM_2331.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 10),
      ]),
      new MonsterReward(ItemDATA.ITEM_2369.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 18),
      ]),
    ], // TODO reward from other referential,
    60,
    60,
    60,
    Rank.LOW,
    ""
  );

  export const MONSTER_006 = new Monster(
    6,
    "Vespoid",
    "Insects that paralyze their targets with their long stingers. They break easily, so attack them with poison or slinger ammo if you want to carve them.",
    MonsterType.SMALL,
    MonsterSpecies.NEOPTERON,
    [],
    [ElementType.FIRE, ElementType.POISON],
    [], // TODO reward from other referential,
    40,
    40,
    40,
    Rank.LOW,
    ""
  );

  export const MONSTER_007 = new Monster(
    7,
    "Diablos",
    "The apex monster of the Wildspire Waste. A menacing, territorial beast that lurks underground. Loud noises will cause it to lunge out of the sand in search of prey.",
    MonsterType.LARGE,
    MonsterSpecies.FLYING_WYVERN,
    [ElementType.FIRE],
    [
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [
      new MonsterReward(ItemDATA.ITEM_316.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 38),
      ]),
      new MonsterReward(ItemDATA.ITEM_318.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 38),
      ]),
      new MonsterReward(ItemDATA.ITEM_321.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 23),
        new MonsterRewardCondition(Rank.HIGH, 2, 13),
      ]),
      new MonsterReward(ItemDATA.ITEM_320.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 27),
        new MonsterRewardCondition(Rank.HIGH, 1, 23),
      ]),
      new MonsterReward(ItemDATA.ITEM_454.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 19),
        new MonsterRewardCondition(Rank.HIGH, 2, 16),
        new MonsterRewardCondition(Rank.MASTER, 2, 16),
      ]),
      new MonsterReward(ItemDATA.ITEM_322.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 14),
        new MonsterRewardCondition(Rank.HIGH, 1, 11),
      ]),
      new MonsterReward(ItemDATA.ITEM_314.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 100),
      ]),
      new MonsterReward(ItemDATA.ITEM_1006.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 50),
        new MonsterRewardCondition(Rank.HIGH, 1, 10),
      ]),
      new MonsterReward(ItemDATA.ITEM_317.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 41),
      ]),
      new MonsterReward(ItemDATA.ITEM_319.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 37),
      ]),
      new MonsterReward(ItemDATA.ITEM_323.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 14),
        new MonsterRewardCondition(Rank.MASTER, 1, 9),
      ]),
      new MonsterReward(ItemDATA.ITEM_427.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 2),
      ]),
      new MonsterReward(ItemDATA.ITEM_315.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 100),
      ]),
      new MonsterReward(ItemDATA.ITEM_1007.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 40),
        new MonsterRewardCondition(Rank.MASTER, 1, 50),
      ]),
      new MonsterReward(ItemDATA.ITEM_2026.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 46),
      ]),
      new MonsterReward(ItemDATA.ITEM_2024.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 44),
      ]),
      new MonsterReward(ItemDATA.ITEM_2025.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 26),
      ]),
      new MonsterReward(ItemDATA.ITEM_2381.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 2),
      ]),
      new MonsterReward(ItemDATA.ITEM_2027.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 100),
      ]),
    ],
    4500,
    4500,
    4500,
    Rank.LOW,
    ""
  );

  export const MONSTER_024 = new Monster(
    24,
    "Kushala Daora",
    "An elder dragon that shields itself with fierce winds, preventing anyone from approaching it. Its skin consists of hard, metallic scales.",
    MonsterType.LARGE,
    MonsterSpecies.ELDER_DRAGON,
    [ElementType.WATER, ElementType.ICE],
    [
      ElementType.FIRE,
      ElementType.THUNDER,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [
      new MonsterReward(ItemDATA.ITEM_347.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 35),
      ]),
      new MonsterReward(ItemDATA.ITEM_348.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 32),
      ]),
      new MonsterReward(ItemDATA.ITEM_352.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 19),
      ]),
      new MonsterReward(ItemDATA.ITEM_349.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 42),
      ]),
      new MonsterReward(ItemDATA.ITEM_351.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 46),
      ]),
      new MonsterReward(ItemDATA.ITEM_353.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 1),
        new MonsterRewardCondition(Rank.MASTER, 1, 5),
      ]),
      new MonsterReward(ItemDATA.ITEM_350.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 48),
      ]),
      new MonsterReward(ItemDATA.ITEM_436.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 15),
      ]),
      new MonsterReward(ItemDATA.ITEM_1012.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 40),
        new MonsterRewardCondition(Rank.MASTER, 1, 15),
      ]),
      new MonsterReward(ItemDATA.ITEM_2046.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 40),
      ]),
      new MonsterReward(ItemDATA.ITEM_2047.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 26),
      ]),
      new MonsterReward(ItemDATA.ITEM_2051.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 19),
      ]),
      new MonsterReward(ItemDATA.ITEM_2048.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 41),
      ]),
      new MonsterReward(ItemDATA.ITEM_2050.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 46),
      ]),
      new MonsterReward(ItemDATA.ITEM_2382.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 1),
      ]),
      new MonsterReward(ItemDATA.ITEM_2049.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 50),
      ]),
      new MonsterReward(ItemDATA.ITEM_2379.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 15),
      ]),
      new MonsterReward(ItemDATA.ITEM_2383.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 25),
      ]),
    ],
    4500,
    4500,
    4500,
    Rank.LOW,
    ""
  );

  export const MONSTER_025 = new Monster(
    25,
    "Rajang",
    "An ultra-aggressive creature that few have a chance of surviving against. Sports powerful arms that pack a punch, and turns gold when angry.",
    MonsterType.LARGE,
    MonsterSpecies.FANGED_BEAST,
    [ElementType.THUNDER, ElementType.FIRE, ElementType.DRAGON],
    [
      ElementType.BLAST,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.STUN,
      ElementType.ICE,
      ElementType.WATER,
    ],
    [
      new MonsterReward(ItemDATA.ITEM_341.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 36),
      ]),
      new MonsterReward(ItemDATA.ITEM_343.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 26),
      ]),
      new MonsterReward(ItemDATA.ITEM_625.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 49),
      ]),
      new MonsterReward(ItemDATA.ITEM_345.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 46),
      ]),
      new MonsterReward(ItemDATA.ITEM_346.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 1),
        new MonsterRewardCondition(Rank.MASTER, 1, 5),
      ]),
      new MonsterReward(ItemDATA.ITEM_698.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 20),
      ]),
      new MonsterReward(ItemDATA.ITEM_342.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 31),
      ]),
      new MonsterReward(ItemDATA.ITEM_436.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 17),
      ]),
      new MonsterReward(ItemDATA.ITEM_1012.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 40),
        new MonsterRewardCondition(Rank.MASTER, 1, 15),
      ]),
      new MonsterReward(ItemDATA.ITEM_2052.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 36),
      ]),
      new MonsterReward(ItemDATA.ITEM_2054.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 26),
      ]),
      new MonsterReward(ItemDATA.ITEM_2056.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 49),
      ]),
      new MonsterReward(ItemDATA.ITEM_2055.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 46),
      ]),
      new MonsterReward(ItemDATA.ITEM_2382.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 1),
      ]),
      new MonsterReward(ItemDATA.ITEM_2053.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 32),
      ]),
      new MonsterReward(ItemDATA.ITEM_2379.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 17),
      ]),
      new MonsterReward(ItemDATA.ITEM_2684.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 21),
      ]),
      new MonsterReward(ItemDATA.ITEM_2383.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 25),
      ]),
    ],
    4500,
    4500,
    4250,
    Rank.LOW,
    ""
  );

  export const MONSTER_027 = new Monster(
    27,
    "Teostra",
    "A brutal elder dragon wreathed in flames that spits blazing fire. Teostra are of such a fierce and deadly nature that the Guild closely monitors their movements.",
    MonsterType.LARGE,
    MonsterSpecies.ELDER_DRAGON,
    [ElementType.FIRE],
    [
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [
      new MonsterReward(ItemDATA.ITEM_354.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 30),
      ]),
      new MonsterReward(ItemDATA.ITEM_358.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 22),
      ]),
      new MonsterReward(ItemDATA.ITEM_355.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 19),
        new MonsterRewardCondition(Rank.MASTER, 1, 12),
      ]),
      new MonsterReward(ItemDATA.ITEM_359.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 16),
      ]),
      new MonsterReward(ItemDATA.ITEM_361.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 25),
        new MonsterRewardCondition(Rank.MASTER, 2, 18),
      ]),
      new MonsterReward(ItemDATA.ITEM_356.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 46),
      ]),
      new MonsterReward(ItemDATA.ITEM_362.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 1),
        new MonsterRewardCondition(Rank.MASTER, 1, 5),
      ]),
      new MonsterReward(ItemDATA.ITEM_360.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 40),
      ]),
      new MonsterReward(ItemDATA.ITEM_357.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 40),
      ]),
      new MonsterReward(ItemDATA.ITEM_436.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 10),
      ]),
      new MonsterReward(ItemDATA.ITEM_1012.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 40),
        new MonsterRewardCondition(Rank.MASTER, 1, 15),
      ]),
      new MonsterReward(ItemDATA.ITEM_2057.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 37),
      ]),
      new MonsterReward(ItemDATA.ITEM_2060.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 26),
      ]),
      new MonsterReward(ItemDATA.ITEM_2061.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 17),
      ]),
      new MonsterReward(ItemDATA.ITEM_2058.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 46),
      ]),
      new MonsterReward(ItemDATA.ITEM_2382.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 1),
      ]),
      new MonsterReward(ItemDATA.ITEM_2062.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 40),
      ]),
      new MonsterReward(ItemDATA.ITEM_2059.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 44),
      ]),
      new MonsterReward(ItemDATA.ITEM_2379.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 10),
      ]),
      new MonsterReward(ItemDATA.ITEM_2383.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 25),
      ]),
    ],
    4300,
    4300,
    4300,
    Rank.LOW,
    ""
  );

  export const MONSTER_029 = new Monster(
    29,
    "Gajau",
    "Vicious piscine that form groups to defend their territory from intruders. Be sure not to venture too closely to their habitat!",
    MonsterType.SMALL,
    MonsterSpecies.FISH,
    [],
    [ElementType.FIRE, ElementType.THUNDER],
    [], // TODO reward from other referential,
    100,
    100,
    100,
    Rank.LOW,
    ""
  );

  export const MONSTER_044 = new Monster(
    44,
    "Barroth",
    "Barroth seek out ants, their favorite snack, and mark their territory with mud. They attack potential rivals with their devastating charging attack.",
    MonsterType.LARGE,
    MonsterSpecies.BRUTE_WYVERN,
    [ElementType.FIRE, ElementType.WATER, ElementType.THUNDER],
    [
      ElementType.FIRE,
      ElementType.WATER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [
      new MonsterReward(ItemDATA.ITEM_240.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 41),
      ]),
      new MonsterReward(ItemDATA.ITEM_242.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 18),
      ]),
      new MonsterReward(ItemDATA.ITEM_244.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 39),
      ]),
      new MonsterReward(ItemDATA.ITEM_246.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 28),
        new MonsterRewardCondition(Rank.HIGH, 1, 23),
      ]),
      new MonsterReward(ItemDATA.ITEM_247.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 25),
        new MonsterRewardCondition(Rank.HIGH, 1, 20),
      ]),
      new MonsterReward(ItemDATA.ITEM_248.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 32),
      ]),
      new MonsterReward(ItemDATA.ITEM_418.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 10),
      ]),
      new MonsterReward(ItemDATA.ITEM_1006.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 50),
        new MonsterRewardCondition(Rank.HIGH, 1, 20),
        new MonsterRewardCondition(Rank.MASTER, 1, 15),
      ]),
      new MonsterReward(ItemDATA.ITEM_241.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 41),
      ]),
      new MonsterReward(ItemDATA.ITEM_243.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 18),
      ]),
      new MonsterReward(ItemDATA.ITEM_245.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 39),
      ]),
      new MonsterReward(ItemDATA.ITEM_659.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 32),
        new MonsterRewardCondition(Rank.MASTER, 2, 23),
      ]),
      new MonsterReward(ItemDATA.ITEM_421.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 11),
      ]),
      new MonsterReward(ItemDATA.ITEM_427.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 2),
      ]),
      new MonsterReward(ItemDATA.ITEM_1007.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 30),
        new MonsterRewardCondition(Rank.MASTER, 1, 35),
      ]),
      new MonsterReward(ItemDATA.ITEM_2083.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 51),
      ]),
      new MonsterReward(ItemDATA.ITEM_2084.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 29),
      ]),
      new MonsterReward(ItemDATA.ITEM_2085.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 45),
      ]),
      new MonsterReward(ItemDATA.ITEM_2086.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 23),
      ]),
      new MonsterReward(ItemDATA.ITEM_2087.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 20),
      ]),
      new MonsterReward(ItemDATA.ITEM_2360.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 11),
      ]),
      new MonsterReward(ItemDATA.ITEM_2381.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 2),
      ]),
    ],
    3800, // TODO health from other referential,
    3800, // TODO health from other referential,
    3600, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const MONSTER_049 = new Monster(
    49,
    "Jagras",
    "Members of the Great Jagras pack, these smaller monsters will flee upon seeing one of their own perish. They're also known for ambushing larger monsters at a moment's notice.",
    MonsterType.SMALL,
    MonsterSpecies.FANGED_WYVERN,
    [],
    [ElementType.FIRE, ElementType.THUNDER],
    [], // TODO reward from other referential,
    80,
    80,
    80,
    Rank.LOW,
    ""
  );

  export const MONSTER_051 = new Monster(
    51,
    "Kestodon",
    "Female Kestodon will alert the pack of danger, while the males will violently charge would-be threats. Their rushing charges can be blocked, however, leaving them open to attacks.",
    MonsterType.SMALL,
    MonsterSpecies.HERBIVORE,
    [],
    [ElementType.WATER, ElementType.ICE],
    [], // TODO reward from other referential,
    120,
    120,
    120,
    Rank.LOW,
    ""
  );

  export const MONSTER_057 = new Monster(
    57,
    "Zinogre",
    "Lightning courses through the fur and unique plating of this fanged wyvern. It is most deadly in its supercharged state.",
    MonsterType.LARGE,
    MonsterSpecies.FANGED_WYVERN,
    [ElementType.THUNDER],
    [ElementType.ICE, ElementType.WATER, ElementType.FIRE, ElementType.DRAGON],
    [
      new MonsterReward(ItemDATA.ITEM_103.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 37),
      ]),
      new MonsterReward(ItemDATA.ITEM_104.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 33),
      ]),
      new MonsterReward(ItemDATA.ITEM_106.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 31),
      ]),
      new MonsterReward(ItemDATA.ITEM_460.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 28),
        new MonsterRewardCondition(Rank.HIGH, 1, 24),
      ]),
      new MonsterReward(ItemDATA.ITEM_461.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 36),
        new MonsterRewardCondition(Rank.HIGH, 2, 33),
        new MonsterRewardCondition(Rank.MASTER, 2, 27),
      ]),
      new MonsterReward(ItemDATA.ITEM_107.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 1),
        new MonsterRewardCondition(Rank.HIGH, 1, 2),
      ]),
      new MonsterReward(ItemDATA.ITEM_105.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 14),
      ]),
      new MonsterReward(ItemDATA.ITEM_459.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 56),
      ]),
      new MonsterReward(ItemDATA.ITEM_1006.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 50),
        new MonsterRewardCondition(Rank.HIGH, 1, 15),
        new MonsterRewardCondition(Rank.MASTER, 1, 10),
      ]),
      new MonsterReward(ItemDATA.ITEM_298.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 37),
      ]),
      new MonsterReward(ItemDATA.ITEM_299.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 32),
      ]),
      new MonsterReward(ItemDATA.ITEM_302.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 31),
      ]),
      new MonsterReward(ItemDATA.ITEM_303.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 1),
        new MonsterRewardCondition(Rank.MASTER, 1, 2),
      ]),
      new MonsterReward(ItemDATA.ITEM_301.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 14),
      ]),
      new MonsterReward(ItemDATA.ITEM_300.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 53),
      ]),
      new MonsterReward(ItemDATA.ITEM_1007.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 35),
        new MonsterRewardCondition(Rank.MASTER, 1, 40),
      ]),
      new MonsterReward(ItemDATA.ITEM_2095.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 37),
      ]),
      new MonsterReward(ItemDATA.ITEM_2096.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 32),
      ]),
      new MonsterReward(ItemDATA.ITEM_2100.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 32),
      ]),
      new MonsterReward(ItemDATA.ITEM_2099.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 25),
      ]),
      new MonsterReward(ItemDATA.ITEM_2101.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 1),
      ]),
      new MonsterReward(ItemDATA.ITEM_2098.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 14),
      ]),
      new MonsterReward(ItemDATA.ITEM_2097.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 54),
      ]),
    ],
    4500,
    4500,
    4700,
    Rank.LOW,
    ""
  );

  export const MONSTER_091 = new Monster(
    91,
    "Izuchi",
    "An omnivorous bird wyvern that has a characteristic scythe-shaped tail. It uses this tail to attack, but also to climb trees and chop down fruit. Most Izuchi fall into herds led by a Great Izuchi; in each herd, the two best fighters are selected by the leader to help it hunt prey.",
    MonsterType.SMALL,
    MonsterSpecies.BIRD_WYNVERN,
    [ElementType.DRAGON],
    [ElementType.WATER, ElementType.THUNDER],
    [
      new MonsterReward(ItemDATA.ITEM_525.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 52),
        new MonsterRewardCondition(Rank.HIGH, 1, 52),
      ]),
      new MonsterReward(ItemDATA.ITEM_525.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 34),
        new MonsterRewardCondition(Rank.HIGH, 1, 34),
      ]),
      new MonsterReward(ItemDATA.ITEM_524.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 33),
      ]),
      new MonsterReward(ItemDATA.ITEM_526.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 53),
      ]),
      new MonsterReward(ItemDATA.ITEM_2354.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 53),
      ]),
      new MonsterReward(ItemDATA.ITEM_431.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 15),
      ]),
      new MonsterReward(ItemDATA.ITEM_433.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 15),
      ]),
      new MonsterReward(ItemDATA.ITEM_2366.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 15),
      ]),
      new MonsterReward(ItemDATA.ITEM_525.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 38),
      ]),
    ],
    3000,
    3000,
    3000,
    Rank.LOW,
    ""
  );

  export const MONSTER_098 = new Monster(
    98,
    "Great Izuchi",
    "The alpha Izuchi of its pack, identified by its larger build, upended white fur and scythe-like tail. A Great Izuchi forms a herd of many smaller Izuchi and selects two from the group to accompany it on territory patrols. Once it spots prey or senses danger, the Great Izuchi issues commands to their fellow Izuchi, and coordinates their movements. Take care that you don't get overwhelmed.",
    MonsterType.LARGE,
    MonsterSpecies.BIRD_WYNVERN,
    [ElementType.DRAGON],
    [ElementType.WATER, ElementType.THUNDER],
    [
      new MonsterReward(ItemDATA.ITEM_519.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 38),
      ]),
      new MonsterReward(ItemDATA.ITEM_518.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 28),
      ]),
      new MonsterReward(ItemDATA.ITEM_520.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 45),
      ]),
      new MonsterReward(ItemDATA.ITEM_437.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 44),
        new MonsterRewardCondition(Rank.HIGH, 1, 41),
        new MonsterRewardCondition(Rank.MASTER, 2, 39),
      ]),
      new MonsterReward(ItemDATA.ITEM_417.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 12),
      ]),
      new MonsterReward(ItemDATA.ITEM_1006.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 50),
        new MonsterRewardCondition(Rank.HIGH, 1, 30),
        new MonsterRewardCondition(Rank.MASTER, 1, 20),
      ]),
      new MonsterReward(ItemDATA.ITEM_522.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 38),
      ]),
      new MonsterReward(ItemDATA.ITEM_521.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 28),
      ]),
      new MonsterReward(ItemDATA.ITEM_523.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 45),
      ]),
      new MonsterReward(ItemDATA.ITEM_420.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 13),
      ]),
      new MonsterReward(ItemDATA.ITEM_426.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 1),
        new MonsterRewardCondition(Rank.MASTER, 1, 4),
      ]),
      new MonsterReward(ItemDATA.ITEM_1007.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 20),
        new MonsterRewardCondition(Rank.MASTER, 1, 30),
      ]),
      new MonsterReward(ItemDATA.ITEM_2249.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 39),
      ]),
      new MonsterReward(ItemDATA.ITEM_2248.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 29),
      ]),
      new MonsterReward(ItemDATA.ITEM_2250.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 45),
      ]),
      new MonsterReward(ItemDATA.ITEM_422.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 13),
      ]),
      new MonsterReward(ItemDATA.ITEM_2380.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 1),
      ]),
    ],
    3000,
    3000,
    3000,
    Rank.LOW,
    ""
  );

  export const MONSTER_100 = new Monster(
    100,
    "Anjanath",
    "The Anjanath patrols the Ancient Forest, looking for its favorite meal, Aptonoth. This belligerent monster will attack anything without hesitation.",
    MonsterType.LARGE,
    MonsterSpecies.BRUTE_WYVERN,
    [ElementType.FIRE],
    [
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [
      new MonsterReward(ItemDATA.ITEM_141.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 25),
      ]),
      new MonsterReward(ItemDATA.ITEM_142.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 42),
      ]),
      new MonsterReward(ItemDATA.ITEM_144.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 19),
      ]),
      new MonsterReward(ItemDATA.ITEM_145.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 25),
        new MonsterRewardCondition(Rank.HIGH, 1, 21),
      ]),
      new MonsterReward(ItemDATA.ITEM_146.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 1),
        new MonsterRewardCondition(Rank.HIGH, 1, 2),
      ]),
      new MonsterReward(ItemDATA.ITEM_102.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 14),
      ]),
      new MonsterReward(ItemDATA.ITEM_143.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 16),
      ]),
      new MonsterReward(ItemDATA.ITEM_1006.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 50),
        new MonsterRewardCondition(Rank.HIGH, 1, 15),
        new MonsterRewardCondition(Rank.MASTER, 1, 10),
      ]),
      new MonsterReward(ItemDATA.ITEM_646.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 24),
      ]),
      new MonsterReward(ItemDATA.ITEM_645.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 41),
      ]),
      new MonsterReward(ItemDATA.ITEM_648.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 17),
      ]),
      new MonsterReward(ItemDATA.ITEM_649.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 1),
        new MonsterRewardCondition(Rank.MASTER, 1, 2),
      ]),
      new MonsterReward(ItemDATA.ITEM_445.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 13),
      ]),
      new MonsterReward(ItemDATA.ITEM_647.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 15),
      ]),
      new MonsterReward(ItemDATA.ITEM_1007.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 35),
        new MonsterRewardCondition(Rank.MASTER, 1, 40),
      ]),
      new MonsterReward(ItemDATA.ITEM_2262.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 24),
      ]),
      new MonsterReward(ItemDATA.ITEM_2261.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 41),
      ]),
      new MonsterReward(ItemDATA.ITEM_2264.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 18),
      ]),
      new MonsterReward(ItemDATA.ITEM_2265.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 23),
      ]),
      new MonsterReward(ItemDATA.ITEM_2266.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 1),
      ]),
      new MonsterReward(ItemDATA.ITEM_2375.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 13),
      ]),
      new MonsterReward(ItemDATA.ITEM_2263.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 15),
      ]),
    ],
    4000,
    4000,
    4000,
    Rank.LOW,
    ""
  );

  export const MONSTER_102 = new Monster(
    102,
    "Pukei-Pukei",
    "A bird wyvern known to possess poisonous toxins in its body. It's been spotted storing scatternuts in its mouth or tail, coating them with poison and spitting them out at threats.",
    MonsterType.LARGE,
    MonsterSpecies.BIRD_WYNVERN,
    [ElementType.WATER],
    [
      ElementType.FIRE,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [
      new MonsterReward(ItemDATA.ITEM_636.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 42),
      ]),
      new MonsterReward(ItemDATA.ITEM_638.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 34),
      ]),
      new MonsterReward(ItemDATA.ITEM_640.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 28),
      ]),
      new MonsterReward(ItemDATA.ITEM_644.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 27),
        new MonsterRewardCondition(Rank.HIGH, 1, 39),
      ]),
      new MonsterReward(ItemDATA.ITEM_642.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 31),
      ]),
      new MonsterReward(ItemDATA.ITEM_438.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 11),
      ]),
      new MonsterReward(ItemDATA.ITEM_419.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 10),
      ]),
      new MonsterReward(ItemDATA.ITEM_1006.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 50),
        new MonsterRewardCondition(Rank.HIGH, 1, 25),
        new MonsterRewardCondition(Rank.MASTER, 1, 15),
      ]),
      new MonsterReward(ItemDATA.ITEM_637.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 42),
      ]),
      new MonsterReward(ItemDATA.ITEM_639.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 34),
      ]),
      new MonsterReward(ItemDATA.ITEM_641.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 28),
      ]),
      new MonsterReward(ItemDATA.ITEM_643.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 31),
      ]),
      new MonsterReward(ItemDATA.ITEM_439.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 11),
      ]),
      new MonsterReward(ItemDATA.ITEM_421.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 2, 10),
      ]),
      new MonsterReward(ItemDATA.ITEM_426.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 2),
        new MonsterRewardCondition(Rank.MASTER, 1, 5),
      ]),
      new MonsterReward(ItemDATA.ITEM_1007.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 25),
        new MonsterRewardCondition(Rank.MASTER, 1, 35),
      ]),
      new MonsterReward(ItemDATA.ITEM_2267.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 42),
      ]),
      new MonsterReward(ItemDATA.ITEM_2268.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 34),
      ]),
      new MonsterReward(ItemDATA.ITEM_2269.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 28),
      ]),
      new MonsterReward(ItemDATA.ITEM_2270.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 31),
      ]),
      new MonsterReward(ItemDATA.ITEM_2271.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 26),
      ]),
      new MonsterReward(ItemDATA.ITEM_2372.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 11),
      ]),
      new MonsterReward(ItemDATA.ITEM_2360.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 2, 10),
      ]),
      new MonsterReward(ItemDATA.ITEM_2380.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 2),
      ]),
    ],
    4100,
    4100,
    4100,
    Rank.LOW,
    ""
  );

  export const MONSTER_107 = new Monster(
    107,
    "Kulu-Ya-Ku",
    "An odd bird wyvern that has developed limbs capable of carrying weapons. It's been spotted stealing eggs from nests found in the Ancient Forest and Wildspire Waste.",
    MonsterType.LARGE,
    MonsterSpecies.BIRD_WYNVERN,
    [],
    [
      ElementType.FIRE,
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.BLAST,
      ElementType.PARALYSIS,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.STUN,
    ],
    [
      new MonsterReward(ItemDATA.ITEM_628.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 49),
      ]),
      new MonsterReward(ItemDATA.ITEM_630.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 36),
      ]),
      new MonsterReward(ItemDATA.ITEM_634.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 20),
      ]),
      new MonsterReward(ItemDATA.ITEM_632.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 44),
      ]),
      new MonsterReward(ItemDATA.ITEM_418.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 14),
      ]),
      new MonsterReward(ItemDATA.ITEM_1006.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 50),
        new MonsterRewardCondition(Rank.HIGH, 1, 30),
        new MonsterRewardCondition(Rank.MASTER, 1, 20),
      ]),
      new MonsterReward(ItemDATA.ITEM_629.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 41),
      ]),
      new MonsterReward(ItemDATA.ITEM_631.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 43),
      ]),
      new MonsterReward(ItemDATA.ITEM_635.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 19),
      ]),
      new MonsterReward(ItemDATA.ITEM_633.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 44),
      ]),
      new MonsterReward(ItemDATA.ITEM_420.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 12),
      ]),
      new MonsterReward(ItemDATA.ITEM_426.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 2),
        new MonsterRewardCondition(Rank.MASTER, 1, 6),
      ]),
      new MonsterReward(ItemDATA.ITEM_1007.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 20),
        new MonsterRewardCondition(Rank.MASTER, 1, 30),
      ]),
      new MonsterReward(ItemDATA.ITEM_2272.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 42),
      ]),
      new MonsterReward(ItemDATA.ITEM_2273.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 42),
      ]),
      new MonsterReward(ItemDATA.ITEM_2275.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 19),
      ]),
      new MonsterReward(ItemDATA.ITEM_2274.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 45),
      ]),
      new MonsterReward(ItemDATA.ITEM_422.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 2, 10),
      ]),
      new MonsterReward(ItemDATA.ITEM_2380.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 2),
      ]),
    ],
    3300,
    3300,
    3300,
    Rank.LOW,
    ""
  );

  export const MONSTER_108 = new Monster(
    108,
    "Jyuratodus",
    "A large piscine wyvern that inhabits the swamps of the Wildspire Waste. It uses mud to capture prey, and it's known to battle Barroth over territory.",
    MonsterType.LARGE,
    MonsterSpecies.PISICINE_WYVERN,
    [ElementType.FIRE, ElementType.THUNDER, ElementType.WATER],
    [
      ElementType.FIRE,
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [
      new MonsterReward(ItemDATA.ITEM_622.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 39),
      ]),
      new MonsterReward(ItemDATA.ITEM_621.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 46),
      ]),
      new MonsterReward(ItemDATA.ITEM_623.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 19),
      ]),
      new MonsterReward(ItemDATA.ITEM_624.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 36),
      ]),
      new MonsterReward(ItemDATA.ITEM_421.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 12),
      ]),
      new MonsterReward(ItemDATA.ITEM_451.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 16),
      ]),
      new MonsterReward(ItemDATA.ITEM_427.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 2),
      ]),
      new MonsterReward(ItemDATA.ITEM_1006.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 25),
        new MonsterRewardCondition(Rank.MASTER, 1, 15),
      ]),
      new MonsterReward(ItemDATA.ITEM_1007.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 25),
        new MonsterRewardCondition(Rank.MASTER, 1, 35),
      ]),
      new MonsterReward(ItemDATA.ITEM_2277.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 39),
      ]),
      new MonsterReward(ItemDATA.ITEM_2276.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 46),
      ]),
      new MonsterReward(ItemDATA.ITEM_2278.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 19),
      ]),
      new MonsterReward(ItemDATA.ITEM_2279.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 36),
      ]),
      new MonsterReward(ItemDATA.ITEM_2360.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 12),
      ]),
      new MonsterReward(ItemDATA.ITEM_2378.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 16),
      ]),
      new MonsterReward(ItemDATA.ITEM_2381.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 1),
      ]),
    ],
    4500,
    4500,
    4500,
    Rank.LOW,
    ""
  );

  export const MONSTER_109 = new Monster(
    109,
    "Tobi-Kadachi",
    "A fanged wyvern that flies among the trees of the Ancient Forest. Its penchant to brush against the ground and the trees as it moves around builds up static electricity within its fur.",
    MonsterType.LARGE,
    MonsterSpecies.FANGED_WYVERN,
    [ElementType.THUNDER],
    [
      ElementType.FIRE,
      ElementType.WATER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [
      new MonsterReward(ItemDATA.ITEM_614.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 30),
      ]),
      new MonsterReward(ItemDATA.ITEM_612.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 39),
      ]),
      new MonsterReward(ItemDATA.ITEM_616.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 21),
        new MonsterRewardCondition(Rank.HIGH, 2, 12),
      ]),
      new MonsterReward(ItemDATA.ITEM_617.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 18),
      ]),
      new MonsterReward(ItemDATA.ITEM_619.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 62),
      ]),
      new MonsterReward(ItemDATA.ITEM_446.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 12),
      ]),
      new MonsterReward(ItemDATA.ITEM_1006.clone(), [
        new MonsterRewardCondition(Rank.LOW, 1, 50),
        new MonsterRewardCondition(Rank.HIGH, 1, 20),
        new MonsterRewardCondition(Rank.MASTER, 1, 15),
      ]),
      new MonsterReward(ItemDATA.ITEM_615.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 31),
      ]),
      new MonsterReward(ItemDATA.ITEM_613.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 41),
      ]),
      new MonsterReward(ItemDATA.ITEM_618.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 20),
      ]),
      new MonsterReward(ItemDATA.ITEM_620.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 62),
      ]),
      new MonsterReward(ItemDATA.ITEM_447.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 14),
      ]),
      new MonsterReward(ItemDATA.ITEM_427.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 1),
      ]),
      new MonsterReward(ItemDATA.ITEM_1007.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 30),
        new MonsterRewardCondition(Rank.MASTER, 1, 35),
      ]),
      new MonsterReward(ItemDATA.ITEM_2281.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 30),
      ]),
      new MonsterReward(ItemDATA.ITEM_2280.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 39),
      ]),
      new MonsterReward(ItemDATA.ITEM_2283.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 18),
      ]),
      new MonsterReward(ItemDATA.ITEM_2284.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 62),
      ]),
      new MonsterReward(ItemDATA.ITEM_2376.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 14),
      ]),
      new MonsterReward(ItemDATA.ITEM_2381.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 1),
      ]),
      new MonsterReward(ItemDATA.ITEM_2282.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 21),
      ]),
    ],
    5200,
    5200,
    5200,
    Rank.LOW,
    ""
  );

  export const MONSTER_118 = new Monster(
    118,
    "Bazelgeuse",
    "A nefarious flying wyvern that travels the New World in search of prey. It scatters explosive scales over a wide area to prey on whatever gets caught in the blast.",
    MonsterType.LARGE,
    MonsterSpecies.FLYING_WYVERN,
    [ElementType.FIRE],
    [
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [
      new MonsterReward(ItemDATA.ITEM_650.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 42),
      ]),
      new MonsterReward(ItemDATA.ITEM_651.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 34),
      ]),
      new MonsterReward(ItemDATA.ITEM_654.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 16),
      ]),
      new MonsterReward(ItemDATA.ITEM_653.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 24),
      ]),
      new MonsterReward(ItemDATA.ITEM_655.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 42),
      ]),
      new MonsterReward(ItemDATA.ITEM_656.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 1),
        new MonsterRewardCondition(Rank.MASTER, 1, 4),
      ]),
      new MonsterReward(ItemDATA.ITEM_652.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 41),
      ]),
      new MonsterReward(ItemDATA.ITEM_1007.clone(), [
        new MonsterRewardCondition(Rank.HIGH, 1, 50),
        new MonsterRewardCondition(Rank.MASTER, 1, 50),
      ]),
      new MonsterReward(ItemDATA.ITEM_2289.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 42),
      ]),
      new MonsterReward(ItemDATA.ITEM_2285.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 34),
      ]),
      new MonsterReward(ItemDATA.ITEM_2290.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 16),
      ]),
      new MonsterReward(ItemDATA.ITEM_2286.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 24),
      ]),
      new MonsterReward(ItemDATA.ITEM_2287.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 42),
      ]),
      new MonsterReward(ItemDATA.ITEM_2295.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 1),
      ]),
      new MonsterReward(ItemDATA.ITEM_2291.clone(), [
        new MonsterRewardCondition(Rank.MASTER, 1, 41),
      ]),
    ],
    4600,
    4600,
    4600,
    Rank.LOW,
    ""
  );

  //////

  //////

  //////

  export const monster_1 = new Monster(
    1,
    "Aptonoth",
    "Docile herbivores that graze in packs. Their meat is considered a delicacy and is rich in nutrients. If one member of the herd is attacked, the rest will flee immediately.",
    MonsterType.SMALL,
    MonsterSpecies.HERBIVORE,
    [],
    [ElementType.FIRE, ElementType.WATER, ElementType.THUNDER, ElementType.ICE],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_3 = new Monster(
    3,
    "Mernos",
    "Wingdrakes that feast on scatternuts. The flock will travel great distances when startled, making them an invaluable mode of transportation for clever hunters.",
    MonsterType.SMALL,
    MonsterSpecies.WINGDRAKE,
    [],
    [ElementType.FIRE, ElementType.WATER, ElementType.THUNDER, ElementType.ICE],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_5 = new Monster(
    5,
    "Mosswine",
    "Mosswine are known for their excellent sense of smell, and are often found foraging for fungi. If you're hunting for mushrooms, follow the Mosswine to the motherlode.",
    MonsterType.SMALL,
    MonsterSpecies.HERBIVORE,
    [],
    [ElementType.FIRE, ElementType.WATER, ElementType.THUNDER, ElementType.ICE],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_6 = new Monster(
    6,
    "Apceros",
    "Herbivores that inhabit the Wildspire Waste. They've developed particularly hard hide to ward off attackers, and are known to gather in groups to defend themselves.",
    MonsterType.SMALL,
    MonsterSpecies.HERBIVORE,
    [],
    [ElementType.FIRE, ElementType.THUNDER],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_8 = new Monster(
    8,
    "Noios",
    "Wingdrakes that produce a sound similar to screamer pods when startled. Use meat to get their attention, and then hunt them for materials, or use them for transportation.",
    MonsterType.SMALL,
    MonsterSpecies.WINGDRAKE,
    [],
    [ElementType.WATER, ElementType.THUNDER, ElementType.ICE],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_11 = new Monster(
    11,
    "Raphinos",
    "Wingdrakes inhabiting the Coral Highlands. They group up to steal the eggs of other animals, but this in turn exposes them to the attention of larger, more vicious predators.",
    MonsterType.SMALL,
    MonsterSpecies.WINGDRAKE,
    [],
    [ElementType.THUNDER],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_12 = new Monster(
    12,
    "Shamos",
    "Small nocturnal monsters. They're particularly vulnerable to Tzitzi-Ya-Ku's blinding flash, but have been known to gang up on enemies.",
    MonsterType.SMALL,
    MonsterSpecies.FANGED_WYVERN,
    [],
    [ElementType.FIRE, ElementType.THUNDER],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_13 = new Monster(
    13,
    "Girros",
    "Monsters known to attack in packs, using the deadly vapor of the Rotten Vale to their advantage. They're known for crippling targets with paralyzing fangs.",
    MonsterType.SMALL,
    MonsterSpecies.FANGED_WYVERN,
    [],
    [ElementType.THUNDER],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_15 = new Monster(
    15,
    "Gastodon",
    "Pack monsters that inhabit the Elder's Recess. They are easily angered by intruders, and will charge at monsters twice their size.",
    MonsterType.SMALL,
    MonsterSpecies.HERBIVORE,
    [],
    [ElementType.THUNDER],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_16 = new Monster(
    16,
    "Barnos",
    "Fervid wingdrakes that have flourished under harsh living conditions. They target intruders with a unique acidic agent, and then attack as a swarm.",
    MonsterType.SMALL,
    MonsterSpecies.WINGDRAKE,
    [],
    [ElementType.DRAGON],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_17 = new Monster(
    17,
    "Great Jagras",
    "The pack leader of the Jagras. When hungry, Great Jagras are known to attack monsters even stronger than themselves. It balloons to unbelievable proportions after swallowing prey.",
    MonsterType.LARGE,
    MonsterSpecies.FANGED_WYVERN,
    [ElementType.WATER],
    [
      ElementType.FIRE,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.BLAST,
      ElementType.PARALYSIS,
      ElementType.STUN,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_24 = new Monster(
    24,
    "Azure Rathalos",
    "An azure-colored subspecies of Rathalos. More mobile than their standard cousins, they locate prey from the air and quickly swoop in for the kill.",
    MonsterType.LARGE,
    MonsterSpecies.FLYING_WYVERN,
    [ElementType.FIRE],
    [
      ElementType.DRAGON,
      ElementType.ICE,
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_26 = new Monster(
    26,
    "Behemoth",
    "A powerful beast from another world. Its large horns and muscular frame defy nature. Unique strategies are required to battle it.",
    MonsterType.LARGE,
    MonsterSpecies.ELDER_DRAGON,
    [],
    [
      ElementType.FIRE,
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.SLEEP,
      ElementType.STUN,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_27 = new Monster(
    27,
    "Deviljho",
    "A monster that must feed export constantly and will devour anything in its path, even feeding on the largest of monsters with its massive jowls.",
    MonsterType.LARGE,
    MonsterSpecies.BRUTE_WYVERN,
    [],
    [
      ElementType.FIRE,
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_29 = new Monster(
    29,
    "Black Diablos",
    "These black-shelled Diablos are actually female Diablos in heat. The color signals their aggressiveness and heightened hostility to other creatures in their habitat.",
    MonsterType.LARGE,
    MonsterSpecies.FLYING_WYVERN,
    [ElementType.FIRE, ElementType.DRAGON],
    [
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_30 = new Monster(
    30,
    "Dodogama",
    "A monster that devours rock as its primary diet. The Crystals it devours mix with its saliva to produce explosive minerals that it can spit at its enemies.",
    MonsterType.LARGE,
    MonsterSpecies.FANGED_WYVERN,
    [ElementType.FIRE],
    [
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_31 = new Monster(
    31,
    "Great Girros",
    "A monster that scavenges for meals dropped from the Coral Highlands. It acts as the alpha leader of a Girros pack, and sports giant fangs that paralyze its prey.",
    MonsterType.LARGE,
    MonsterSpecies.FANGED_WYVERN,
    [ElementType.THUNDER],
    [
      ElementType.FIRE,
      ElementType.WATER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_32 = new Monster(
    32,
    "Kirin",
    "Kirin are so rarely sighted that little is known of their ecology. It's been said they envelop themselves in pure electricity when they are provoked.The lightning a Kirin cloaks itself with has been confirmed to toughen its skin. The key to hunting a Kirin lies in staggering it, using Elderseal weapons, and protecting yourself from and avoiding its lightning attacks.",
    MonsterType.LARGE,
    MonsterSpecies.ELDER_DRAGON,
    [ElementType.THUNDER, ElementType.PARALYSIS],
    [
      ElementType.FIRE,
      ElementType.WATER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_33 = new Monster(
    33,
    "Kulve Taroth",
    "An Elder Dragon that protects itself with a glittering coat of metal. Its ecology and coat differ with each appearance, thus the need for a thorough investigation. An exhaustive investigation is required in order to break Kulve Taroth's giant gold plated horns. Pursue the monster to learn more about it. Gather tracks and recruit hunters to help you further your investigation.",
    MonsterType.LARGE,
    MonsterSpecies.ELDER_DRAGON,
    [ElementType.FIRE, ElementType.THUNDER, ElementType.ICE],
    [
      ElementType.FIRE,
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_35 = new Monster(
    35,
    "Lavasioth",
    "Lavasioth utilizes molten lava as armor. They are extremely aggressive and will attack without prejudice until the threat has been eliminated.",
    MonsterType.LARGE,
    MonsterSpecies.PISICINE_WYVERN,
    [ElementType.FIRE, ElementType.THUNDER, ElementType.ICE],
    [
      ElementType.FIRE,
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.WATER,
      ElementType.STUN,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_36 = new Monster(
    36,
    "Legiana",
    "The apex monster of the Coral Highlands, whose diet primarily consists of Raphinos. It emits a chilling wind from its body, which dulls its prey's ability to escape.",
    MonsterType.LARGE,
    MonsterSpecies.FLYING_WYVERN,
    [ElementType.ICE],
    [
      ElementType.FIRE,
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.ICE,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_37 = new Monster(
    37,
    "Lunastra",
    "A rare female Elder Dragon that litters the air with hot blue dust. Reports of it traveling with her mate, Teostra, are still unconfirmed.",
    MonsterType.LARGE,
    MonsterSpecies.ELDER_DRAGON,
    [ElementType.FIRE],
    [
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_38 = new Monster(
    38,
    "Nergigante",
    "A terrible elder dragon that appears when other elders are in the vicinity. Its penchant for destruction is well documented.",
    MonsterType.LARGE,
    MonsterSpecies.ELDER_DRAGON,
    [],
    [
      ElementType.FIRE,
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_39 = new Monster(
    39,
    "Odogaron",
    "A terrifying monster that scours the Rotten Vale for carrion. Its highly aggressive nature means that anything, be it monster or man, is a potential meal.",
    MonsterType.LARGE,
    MonsterSpecies.FANGED_WYVERN,
    [ElementType.DRAGON],
    [
      ElementType.FIRE,
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_40 = new Monster(
    40,
    "Paolumu",
    "Paolumu feast on eggs found in the Coral Highlands. They are able to propel through the air using unique sacs in their bodies, and attack with their extremely hard tails.",
    MonsterType.LARGE,
    MonsterSpecies.FLYING_WYVERN,
    [ElementType.WATER],
    [
      ElementType.FIRE,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_41 = new Monster(
    41,
    "Radobaan",
    "A gigantic brute wyvern that eats the bones of carcasses found in the Rotten Vale, using some of it as armor. It also rolls into a ball as a form of attack and transportation.",
    MonsterType.LARGE,
    MonsterSpecies.BRUTE_WYVERN,
    [],
    [
      ElementType.FIRE,
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.BLAST,
      ElementType.PARALYSIS,
      ElementType.STUN,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_44 = new Monster(
    44,
    "Pink Rathian",
    "A subspecies with vibrant pink scales. Pink Rathians wield their toxic tails more deftly than normal Rathians, weakening prey with poison before moving in for the kill.",
    MonsterType.LARGE,
    MonsterSpecies.FLYING_WYVERN,
    [ElementType.FIRE],
    [
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_48 = new Monster(
    48,
    "Tzitzi-Ya-Ku",
    "This odd monster blinds both prey and enemies with a special pulsing organ near its head. It then uses its strong legs to deliver finishing blows.",
    MonsterType.LARGE,
    MonsterSpecies.BIRD_WYNVERN,
    [],
    [
      ElementType.FIRE,
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_49 = new Monster(
    49,
    "Uragaan",
    "Large Brute Wyverns that feed on ore, using their mighty jaws to crush solid rock to powder. They've been known to confront Lavasioths over territory disputes.",
    MonsterType.LARGE,
    MonsterSpecies.BRUTE_WYVERN,
    [ElementType.FIRE],
    [
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_50 = new Monster(
    50,
    "Vaal Hazak",
    "A grotesque Elder Dragon, that inhabits the deepest part of the Rotten Vale. It uses the fatal vapor of the vale in what appears to be a symbiotic relationship.",
    MonsterType.LARGE,
    MonsterSpecies.ELDER_DRAGON,
    [ElementType.WATER],
    [
      ElementType.FIRE,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_51 = new Monster(
    51,
    "Xeno'jiiva",
    "RESEARCHING. Threat level unknown.",
    MonsterType.LARGE,
    MonsterSpecies.ELDER_DRAGON,
    [ElementType.SLEEP],
    [
      ElementType.FIRE,
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_52 = new Monster(
    52,
    "Zorah Magdaros",
    "An elder dragon that rises from the earth like a volcano. Where it's headed, and why, the Research Commission has yet to figure out.",
    MonsterType.LARGE,
    MonsterSpecies.ELDER_DRAGON,
    [
      ElementType.FIRE,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
    ],
    [
      ElementType.WATER,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_53 = new Monster(
    53,
    "Leshen",
    "Dwelling deep inside the forest, these creatures use their innate magic to control all flora and fauna within their territory.",
    MonsterType.LARGE,
    MonsterSpecies.RELICT,
    [ElementType.WATER, ElementType.SLEEP],
    [
      ElementType.FIRE,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_54 = new Monster(
    54,
    "Ancient Leshen",
    "An old leshen that arrived through a portal to assume control over the Ancient Forest. Sometimes revered as an indigenous deity.",
    MonsterType.LARGE,
    MonsterSpecies.RELICT,
    [ElementType.WATER, ElementType.SLEEP],
    [
      ElementType.FIRE,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_55 = new Monster(
    55,
    "Safi'jiiva",
    "The fully-grown form of Xeno'jiiva. It absorbs energy from its environment to heal itself and change the ecosystem.",
    MonsterType.LARGE,
    MonsterSpecies.ELDER_DRAGON,
    [ElementType.SLEEP],
    [
      ElementType.DRAGON,
      ElementType.ICE,
      ElementType.THUNDER,
      ElementType.WATER,
      ElementType.FIRE,
      ElementType.DRAGON,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_56 = new Monster(
    56,
    "Stygian Zinogre",
    "Has a symbiotic relationship with Dracophage Bugs, which it releases like bullets. Becomes even more dangerous when covered in light.",
    MonsterType.LARGE,
    MonsterSpecies.FANGED_WYVERN,
    [ElementType.ICE, ElementType.FIRE, ElementType.WATER, ElementType.DRAGON],
    [ElementType.THUNDER, ElementType.FIRE, ElementType.WATER],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_58 = new Monster(
    58,
    "Viper Tobi-Kadachi",
    "The tail of this subspecies secretes a toxin while its fangs paralyze prey. It can also glide without climbing trees.",
    MonsterType.LARGE,
    MonsterSpecies.FANGED_WYVERN,
    [],
    [
      ElementType.FIRE,
      ElementType.THUNDER,
      ElementType.ICE,
      ElementType.DRAGON,
      ElementType.POISON,
      ElementType.SLEEP,
      ElementType.PARALYSIS,
      ElementType.BLAST,
      ElementType.STUN,
    ],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const monster_59 = new Monster(
    59,
    "Namielle",
    "An Elder Dragon said to be able to command water and use it as a shield. Though very few sightings have ever been reported, they mention 'exploding water' and 'bright glowing lights.' Its existence remains shrouded in mystery.",
    MonsterType.LARGE,
    MonsterSpecies.ELDER_DRAGON,
    [ElementType.WATER, ElementType.THUNDER],
    [ElementType.FIRE, ElementType.DRAGON, ElementType.ICE],
    [], // TODO reward from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    100, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  export const MONSTER_ALL: Monster[] = [
    MONSTER_001,
    MONSTER_002,
    MONSTER_003,
    MONSTER_005,
    MONSTER_006,
    MONSTER_007,
    MONSTER_024,
    MONSTER_025,
    MONSTER_027,
    MONSTER_029,
    MONSTER_044,
    MONSTER_049,
    MONSTER_051,
    MONSTER_057,
    MONSTER_100,
    MONSTER_102,
    MONSTER_107,
    MONSTER_108,
    MONSTER_109,
    MONSTER_118,
  ];
}
