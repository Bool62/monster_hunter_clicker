import { ElementType } from './element.model';
import { Item } from './item.model';
import { Rank } from './rank.model';

export enum MonsterType {
  SMALL = 'small',
  LARGE = 'large',
}

export enum MonsterSpecies {
  BIRD_WYNVERN = 'bird wyvern',
  BRUTE_WYVERN = 'brute wyvern',
  ELDER_DRAGON = 'elder dragon',
  FANGED_BEAST = 'fanged beast',
  FANGED_WYVERN = 'fanged wyvern',
  FISH = 'fish',
  FLYING_WYVERN = 'flying wyvern',
  HERBIVORE = 'herbivore',
  LYNIAN = 'lynian',
  NEOPTERON = 'neopteron',
  PISICINE_WYVERN = 'piscine wyvern',
  RELICT = 'relict',
  WINGDRAKE = 'wingdrake',
}

export class MonsterRewardCondition {
  private rank!: Rank;
  private quantity: number = 0;
  private chance: number = 0;

  constructor(rank: Rank, quantity: number, chance: number) {
    this.rank = rank;
    this.quantity = quantity;
    this.chance = chance;
  }

  getRank(): Rank {
    return this.rank;
  }

  getQuantity(): number {
    return this.quantity;
  }

  getChance(): number {
    return this.chance;
  }
}

//RECUP data : https://monsterhunter.fandom.com/wiki/Aknosom
// https://mhrise.mhrice.info/
// https://github.com/RoboMechE/MHRise-Database Image
// https://github.com/wwylele/mhrice
// https://mhrise.kiranico.com/data/monsters?view=lg

export class MonsterReward {
  private item!: Item;
  private conditions: MonsterRewardCondition[] = [];

  constructor(item: Item, conditions: MonsterRewardCondition[]) {
    this.item = item;
    this.conditions = conditions;
  }

  getItem(): Item {
    return this.item;
  }
  getConditions(): MonsterRewardCondition[] {
    return this.conditions;
  }
}

export class Monster {
  private id: number = 0;
  private name: string = '';
  private description: string = '';
  private type!: MonsterType;
  private species!: MonsterSpecies;
  private resistances: ElementType[] = [];
  private weakness: ElementType[] = [];
  private rewards: MonsterReward[] = [];
  private healthLow: number = 0;
  private healthHigh: number = 0;
  private healthMaster: number = 0;
  private rank!: Rank;
  private assets: string = '';

  private initialHealth: number = 0;
  private currentHealth: number = 0;

  constructor(
    id: number,
    name: string,
    description: string,
    type: MonsterType,
    species: MonsterSpecies,
    resistances: ElementType[],
    weakness: ElementType[],
    reward: MonsterReward[],
    healthLow: number,
    healthHigh: number,
    healthMaster: number,
    rank: Rank,
    assets: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.type = type;
    this.species = species;
    this.resistances = resistances;
    this.weakness = weakness;
    this.rewards = reward;
    this.healthLow = healthLow;
    this.healthHigh = healthHigh;
    this.healthMaster = healthMaster;
    this.rank = rank;
    this.assets = assets;

    if (this.rank === Rank.LOW) {
      this.initialHealth = this.healthLow;
      this.currentHealth = this.healthLow;
    } else if (this.rank === Rank.HIGH) {
      this.initialHealth = this.healthHigh;
      this.currentHealth = this.healthHigh;
    } else {
      this.initialHealth = this.healthMaster;
      this.currentHealth = this.healthMaster;
    }
  }

  updateRankMonster(rank: Rank) {
    this.rank = rank;
    if (this.rank === Rank.LOW) {
      this.initialHealth = this.healthLow;
      this.currentHealth = this.healthLow;
    } else if (this.rank === Rank.HIGH) {
      this.initialHealth = this.healthHigh;
      this.currentHealth = this.healthHigh;
    } else {
      this.initialHealth = this.healthMaster;
      this.currentHealth = this.healthMaster;
    }
  }

  // Méthode pour recevoir des dégâts du personnage
  takeDamage(damage: number): void {
    this.currentHealth -= damage;
    if (this.currentHealth <= 0) {
      console.log('Monster defeated!');
    } else {
      console.log(`Monster's current health: ${this.currentHealth}`);
    }
  }

  getCurrentHealth(): number {
    return this.currentHealth;
  }

  isAlive(): boolean {
    return this.currentHealth <= 0 ? false : true;
  }

  generateReward(): Item[] {
    const rewards: Item[] = [];

    this.rewards.forEach((reward) => {
      //Get reward of the actual rank
      const possibleRewards = reward.getConditions().filter((condition) => {
        return condition.getRank() === this.rank;
      });

      //Get chance to obtain it
      if (possibleRewards && possibleRewards.length > 0) {
        possibleRewards.forEach((possibleReward) => {
          for (let i = 0; i < possibleReward.getQuantity(); i++) {
            const result = Math.floor(Math.random() * (100 - 0 + 1) + 0);
            if (result <= possibleReward.getChance()) {
              rewards.push(reward.getItem());
            }
          }
        });
      }
    });

    return rewards;
  }

  getId(): number {
    return this.id;
  }
}
