import { Armor } from "./armor.model";
import { ItemInventory } from "./item.model";
import { Weapon } from "./weapon.model";

export class Character {
  private _attackPower: number = 40;
  private _totalAttackPower: number = 40;
  private _inventoryItem: Map<number, ItemInventory> = new Map();
  private _equipedArmor: string[] = [];
  private _equipedWeapon!: Weapon;
  private _inventoryArmor: Armor[] = [];
  private _inventoryWeapon: Weapon[] = [];
  private _stats: Stats = new Stats();

  get totalAttackPower(): number {
    return this._totalAttackPower;
  }

  get inventoryItem(): Map<number, ItemInventory> {
    return this._inventoryItem;
  }

  get stats(): Stats {
    return this._stats;
  }
}

export class Stats {
  private _totalMonsterKilled: number = 0;
  private _mapMonsterKilled: Map<number, number> = new Map();

  constructor() {
    this._totalMonsterKilled = 0;
    this._mapMonsterKilled = new Map();
  }

  get totalMonsterKilled() {
    return this._totalMonsterKilled;
  }

  get mapMonsterKilled() {
    return this._mapMonsterKilled;
  }

  getStatsByMonster(id: number): number | undefined {
    return this._mapMonsterKilled.get(id);
  }

  addMonsterKilled(id: number) {
    this._totalMonsterKilled++;
    let statsMonster = this._mapMonsterKilled.get(id);
    if (statsMonster) {
      statsMonster = statsMonster + 1;
      this._mapMonsterKilled.set(id, statsMonster);
    } else {
      this._mapMonsterKilled.set(id, 1);
    }
  }
}
