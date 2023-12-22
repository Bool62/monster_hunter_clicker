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
  private _rank!: Rank;
  private _quantity: number = 0;
  private _chance: number = 0;

  constructor(rank: Rank, quantity: number, chance: number) {
    this._rank = rank;
    this._quantity = quantity;
    this._chance = chance;
  }

  get rank(): Rank {
    return this._rank;
  }

  get quantity(): number {
    return this._quantity;
  }

  get chance(): number {
    return this._chance;
  }
}

//RECUP data : https://monsterhunter.fandom.com/wiki/Aknosom
// https://mhrise.mhrice.info/
// https://github.com/RoboMechE/MHRise-Database Image
// https://github.com/wwylele/mhrice
// https://mhrise.kiranico.com/data/monsters?view=lg

export class MonsterReward {
  private _item!: Item;
  private _conditions: MonsterRewardCondition[] = [];

  constructor(item: Item, conditions: MonsterRewardCondition[]) {
    this._item = item;
    this._conditions = conditions;
  }

  get item(): Item {
    return this._item;
  }
  get conditions(): MonsterRewardCondition[] {
    return this._conditions;
  }
}

export class Monster {
  private _id: number = 0;
  private _name: string = '';
  private _description: string = '';
  private _type!: MonsterType;
  private _species!: MonsterSpecies;
  private _resistances: ElementType[] = [];
  private _weakness: ElementType[] = [];
  private _rewards: MonsterReward[] = [];
  private _healthLow: number = 0;
  private _healthHigh: number = 0;
  private _healthMaster: number = 0;
  private _rank!: Rank;
  private _assets: string = '';

  private _initialHealth: number = 0;
  private _currentHealth: number = 0;

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
    this._id = id;
    this._name = name;
    this._description = description;
    this._type = type;
    this._species = species;
    this._resistances = resistances;
    this._weakness = weakness;
    this._rewards = reward;
    this._healthLow = healthLow;
    this._healthHigh = healthHigh;
    this._healthMaster = healthMaster;
    this._rank = rank;
    this._assets = assets;

    if (this._rank === Rank.LOW) {
      this._initialHealth = this._healthLow;
      this._currentHealth = this._healthLow;
    } else if (this._rank === Rank.HIGH) {
      this._initialHealth = this._healthHigh;
      this._currentHealth = this._healthHigh;
    } else {
      this._initialHealth = this._healthMaster;
      this._currentHealth = this._healthMaster;
    }
  }

  updateRankMonster(rank: Rank) {
    this._rank = rank;
    if (this._rank === Rank.LOW) {
      this._initialHealth = this._healthLow;
      this._currentHealth = this._healthLow;
    } else if (this._rank === Rank.HIGH) {
      this._initialHealth = this._healthHigh;
      this._currentHealth = this._healthHigh;
    } else {
      this._initialHealth = this._healthMaster;
      this._currentHealth = this._healthMaster;
    }
  }

  // Méthode pour recevoir des dégâts du personnage
  takeDamage(damage: number): void {
    this._currentHealth -= damage;
    if (this._currentHealth <= 0) {
      console.log('Monster defeated!');
    } else {
      console.log(`Monster's current health: ${this._currentHealth}`);
    }
  }

  get currentHealth(): number {
    return this._currentHealth;
  }

  isAlive(): boolean {
    return this.currentHealth <= 0 ? false : true;
  }

  generateReward(): Item[] {
    const rewards: Item[] = [];

    this._rewards.forEach((reward) => {
      //Get reward of the actual rank
      const possibleRewards = reward.conditions.filter((condition) => {
        return condition.rank === this._rank;
      });

      //Get chance to obtain it
      if (possibleRewards && possibleRewards.length > 0) {
        possibleRewards.forEach((possibleReward) => {
          for (let i = 0; i < possibleReward.quantity; i++) {
            const result = Math.floor(Math.random() * (100 - 0 + 1) + 0);
            if (result <= possibleReward.chance) {
              rewards.push(reward.item);
            }
          }
        });
      }
    });

    return rewards;
  }

  get id(): number {
    return this._id;
  }
}
