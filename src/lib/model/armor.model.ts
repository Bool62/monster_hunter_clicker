import { ElementType } from './element.model';
import { Item } from './item.model';
import { Rank } from './rank.model';

export enum ArmorType {
  HEAD = 'head',
  CHEST = 'chest',
  GLOVES = 'gloves',
  WAIST = 'waist',
  LEGS = 'legs',
}

export class ArmorResistance {
  private element!: ElementType;
  private resistance: number = 0;
}

export class ArmorAssets {
  private imageMale: string = '';
  private imageFemale: string = '';
}

export class SetInfo {
  private id: number = 0;
  private name: string = '';
  private rank!: Rank;
  private pieces: number[] = [];
}

export class CraftingCost {
  quantity: number = 0;
  item!: Item;
}

export class Armor {
  private id: number = 0;
  private name: string = '';
  private rank!: Rank;
  private type!: ArmorType;
  private rarity: number = 0;
  private defense: number = 0;
  private resistances: ArmorResistance[] = [];
  // TODO add Skills
  private armorSet!: SetInfo;
  private armorAssets!: ArmorAssets;
  private crafting: CraftingCost[] = [];
}

export class ArmorSet {
  private id: number = 0;
  private name: string = '';
  private rank!: Rank;
  private pieces: Armor[] = [];
  // TODO add Skills
}
