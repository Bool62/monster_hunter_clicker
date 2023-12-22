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
  private _element!: ElementType;
  private _damage: number = 0;

  constructor(element: ElementType, damage: number) {
    this._damage = damage;
    this._element = element;
  }
}

export class WeaponCraftingInfo {
  private _craftable: boolean = false;
  private _previous: number = 0;
  private _branches: number[] = [];
  private _craftingMaterial: CraftingCost[] = [];

  constructor(craftable: boolean, previous: number, branches: number[], craftingMaterial: CraftingCost[]) {
    this._craftable = craftable;
    this._previous = previous;
    this._branches = branches;
    this._craftingMaterial = craftingMaterial;
  }
}

export class WeaponAssets {
  private _icon: string = '';
  private _image: string = '';

  constructor(icon: string, image: string) {
    this._icon = icon;
    this._image = image;
  }
}

export class Weapon {
  private _id: number = 0;
  private _name: string = '';
  private _type!: WeaponType;
  private _rarity: number = 0;
  private _attack: number = 0;
  private _elements: WeaponElement[] = [];
  private _crafting!: WeaponCraftingInfo;
  private _damageType!: DamageType;
  // TODO add durability / Sharpness
  private _affinity: number = 0;
  private _defense: number = 0;
  private _assets!: WeaponAssets;

  constructor(
    id: number,
    name: string,
    type: WeaponType,
    rarity: number,
    attack: number,
    elements: WeaponElement[],
    crafting: WeaponCraftingInfo,
    damageType: DamageType,
    affinity: number,
    defense: number,
    assets: WeaponAssets
  ) {
    this._id = id;
    this._name = name;
    this._type = type;
    this._rarity = rarity;
    this._attack = attack;
    this._elements = elements;
    this._crafting = crafting;
    this._damageType = damageType;
    this._affinity = affinity;
    this._defense = defense;
    this._assets = assets;
  }
}

