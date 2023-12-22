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
  private _element!: ElementType;
  private _resistance: number = 0;

  constructor(element: ElementType, resistance: number) {
    this._element = element;
    this._resistance = resistance;
  }
}

export class ArmorAssets {
  private _imageMale: string = '';
  private _imageFemale: string = '';

  constructor(imageMale: string, imageFemale: string) {
    this._imageFemale = imageFemale;
    this._imageMale = imageMale;
  }
}

export class SetInfo {
  private _id: number = 0;
  private _name: string = '';
  private _rank!: Rank;
  private _pieces: number[] = [];

  constructor(id: number, name: string, rank: Rank, pieces: number[]) {
    this._id = id;
    this._name = name;
    this._rank = rank;
    this._pieces = pieces;
  }

}

export class CraftingCost {
  private _quantity: number = 0;
  private _item!: Item;

  constructor(quantity: number, item: Item) {
    this._item = item;
    this._quantity = quantity;
  }
}

export class Armor {
  private _id: number = 0;
  private _name: string = '';
  private _rank!: Rank;
  private _type!: ArmorType;
  private _rarity: number = 0;
  private _defense: number = 0;
  private _resistances: ArmorResistance[] = [];
  // TODO add Skills
  private _armorSet!: SetInfo;
  private _armorAssets!: ArmorAssets;
  private _crafting: CraftingCost[] = [];

  constructor(
    id: number,
    name: string,
    rank: Rank,
    type: ArmorType,
    rarity: number,
    defense: number,
    resistances: ArmorResistance[],
    armorSet: SetInfo,
    armorAssets: ArmorAssets,
    crafting: CraftingCost[]
  ) {
    this._id = id;
    this._name = name;
    this._rank = rank;
    this._type = type;
    this._rarity = rarity;
    this._defense = defense;
    this._resistances = resistances;
    this._armorSet = armorSet;
    this._armorAssets = armorAssets;
    this._crafting = crafting;
  }
}

export class ArmorSet {
  private _id: number = 0;
  private _name: string = '';
  private _rank!: Rank;
  private _pieces: Armor[] = [];
  // TODO add Skills

  constructor(id: number, name: string, rank: Rank, pieces: Armor[]) {
    this._id = id;
    this._name = name;
    this._rank = rank;
    this._pieces = pieces;
  }
}
