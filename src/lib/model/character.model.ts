import { Armor } from './armor.model';
import { ItemInventory } from './item.model';
import { Weapon } from './weapon.model';

export class Character {
  private _attackPower: number = 40;
  private _totalAttackPower: number = 40;
  private _inventoryItem: Map<number,ItemInventory> = new Map();
  private _equipedArmor: string[] = [];
  private _equipedWeapon!: Weapon;
  private _inventoryArmor: Armor[] = [];
  private _inventoryWeapon: Weapon[] = [];

  get totalAttackPower(): number {
    return this._totalAttackPower;
  }

  get inventoryItem(): Map<number,ItemInventory> {
    return this._inventoryItem;
  }
}
