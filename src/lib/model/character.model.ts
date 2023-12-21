import { Armor } from './armor.model';
import { ItemInventory } from './item.model';
import { Weapon } from './weapon.model';

export class Character {
  private attackPower: number = 1;
  private totalAttackPower: number = 1;
  private inventoryItem: ItemInventory[] = [];
  private equipedArmor: string[] = [];
  private equipedWeapon!: Weapon;
  private inventoryArmor: Armor[] = [];
  private inventoryWeapon: Weapon[] = [];

  getTotalAttackPower(): number {
    return this.totalAttackPower;
  }
}
