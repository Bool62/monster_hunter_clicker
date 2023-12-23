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
  const MONSTER_001 = new Monster(
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
    [], // TODO reward from other referential,
    4500,
    4500,
    4500,
    Rank.LOW,
    ""
  );

  const MONSTER_002 = new Monster(
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
    [], // TODO reward from other referential,
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
    ""
  );

  const MONSTER_005 = new Monster(
    5,
    "Hornetaur",
    "Small insects that are found primarily on land. They're highly territorial and will attack anything that approaches them. Gather their materials by attacking them with the slinger.",
    MonsterType.SMALL,
    MonsterSpecies.NEOPTERON,
    [],
    [ElementType.FIRE, ElementType.WATER],
    [], // TODO reward from other referential,
    60,
    60,
    60,
    Rank.LOW,
    ""
  );

  const MONSTER_006 = new Monster(
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

  const MONSTER_007 = new Monster(
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
    [], // TODO reward from other referential,
    4500,
    4500,
    4500,
    Rank.LOW,
    ""
  );

  const MONSTER_024 = new Monster(
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
    [], // TODO reward from other referential,
    4500,
    4500,
    4500,
    Rank.LOW,
    ""
  );

  const MONSTER_025 = new Monster(
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
    [], // TODO reward from other referential,
    4500,
    4500,
    4250,
    Rank.LOW,
    ""
  );

  const MONSTER_027 = new Monster(
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
    [], // TODO reward from other referential,
    4300,
    4300,
    4300,
    Rank.LOW,
    ""
  );

  const MONSTER_029 = new Monster(
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

  const MONSTER_044 = new Monster(
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
    [], // TODO reward from other referential,
    3800, // TODO health from other referential,
    3800, // TODO health from other referential,
    3600, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  const MONSTER_049 = new Monster(
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

  const MONSTER_051 = new Monster(
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

  const MONSTER_057 = new Monster(
    57,
    "Zinogre",
    "Lightning courses through the fur and unique plating of this fanged wyvern. It is most deadly in its supercharged state.",
    MonsterType.LARGE,
    MonsterSpecies.FANGED_WYVERN,
    [ElementType.THUNDER],
    [ElementType.ICE, ElementType.WATER, ElementType.FIRE, ElementType.DRAGON],
    [], // TODO reward from other referential,
    4500,
    4500,
    4700,
    Rank.LOW,
    ""
  );

  const MONSTER_100 = new Monster(
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
    [], // TODO reward from other referential,
    4000,
    4000,
    4000,
    Rank.LOW,
    ""
  );

  const MONSTER_102 = new Monster(
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
    [], // TODO reward from other referential,
    4100,
    4100,
    4100,
    Rank.LOW,
    ""
  );

  const MONSTER_107 = new Monster(
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
    [], // TODO reward from other referential,
    3300,
    3300,
    3300,
    Rank.LOW,
    ""
  );

  const MONSTER_108 = new Monster(
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
    [], // TODO reward from other referential,
    4500,
    4500,
    4500,
    Rank.LOW,
    ""
  );

  const MONSTER_109 = new Monster(
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
    [], // TODO reward from other referential,
    5200,
    5200,
    5200,
    Rank.LOW,
    ""
  );

  const MONSTER_118 = new Monster(
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
    [], // TODO reward from other referential,
    4600, // TODO health from other referential,
    4600, // TODO health from other referential,
    4600, // TODO health from other referential,
    Rank.LOW,
    ""
  );

  //////

  //////

  //////

  const monster_1 = new Monster(
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

  const monster_3 = new Monster(
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

  const monster_5 = new Monster(
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

  const monster_6 = new Monster(
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

  const monster_8 = new Monster(
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

  const monster_11 = new Monster(
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

  const monster_12 = new Monster(
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

  const monster_13 = new Monster(
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

  const monster_15 = new Monster(
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

  const monster_16 = new Monster(
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

  const monster_17 = new Monster(
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

  const monster_24 = new Monster(
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

  const monster_26 = new Monster(
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

  const monster_27 = new Monster(
    27,
    "Deviljho",
    "A monster that must feed constantly and will devour anything in its path, even feeding on the largest of monsters with its massive jowls.",
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

  const monster_29 = new Monster(
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

  const monster_30 = new Monster(
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

  const monster_31 = new Monster(
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

  const monster_32 = new Monster(
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

  const monster_33 = new Monster(
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

  const monster_35 = new Monster(
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

  const monster_36 = new Monster(
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

  const monster_37 = new Monster(
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

  const monster_38 = new Monster(
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

  const monster_39 = new Monster(
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

  const monster_40 = new Monster(
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

  const monster_41 = new Monster(
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

  const monster_44 = new Monster(
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

  const monster_48 = new Monster(
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

  const monster_49 = new Monster(
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

  const monster_50 = new Monster(
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

  const monster_51 = new Monster(
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

  const monster_52 = new Monster(
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

  const monster_53 = new Monster(
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

  const monster_54 = new Monster(
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

  const monster_55 = new Monster(
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

  const monster_56 = new Monster(
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

  const monster_58 = new Monster(
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

  const monster_59 = new Monster(
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
