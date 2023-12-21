import { CraftingCost } from './armor.model';
import { ElementType } from './element.model';

export enum WeaponType {
  GREAT_SWORD = 'great-sword',
  LONG_SWORD = 'long-sword',
  SWORD_AND_SHIELD = 'sword-and-shield',
  DUAL_BLADES = 'dual-blades',
  HAMMER = 'hammer',
  HUNTING_HORN = 'hunting-horn',
  LANCE = 'lance',
  GUNLANCE = 'gunlance',
  SWITCH_AXE = 'switch-axe',
  CHARGE_BLADE = 'charge-blade',
  INSECT_GLAIVE = 'insect-glaive',
  LIGHT_BOWGUN = 'light-bowgun',
  HEAVY_BOWGUN = 'heavy-bowgun',
  BOW = 'bow',
}

export enum DamageType {
  BLUNT = 'blunt',
  PIERCING = 'piercing',
  SLASHING = 'slashing',
}

export class WeaponElement {
  private element!: ElementType;
  private damage: number = 0;
}

export class WeaponCraftingInfo {
  private craftable: boolean = false;
  private previous: number = 0;
  private branches: number[] = [];
  private craftingMaterial: CraftingCost[] = [];
}

export class WeaponAssets {
  private icon: string = '';
  private image: string = '';
}

export class Weapon {
  private id: number = 0;
  private name: string = '';
  private type!: WeaponType;
  private rarity: number = 0;
  private attack: number = 0;
  private elements: WeaponElement[] = [];
  private crafting!: WeaponCraftingInfo;
  private damageType!: DamageType;
  // TODO add durability / Sharpness
  private affinity: number = 0;
  private defense: number = 0;
}
