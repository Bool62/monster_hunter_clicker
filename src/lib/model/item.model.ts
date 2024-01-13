export class Item {
  private _id: number = 0;
  private _name: string = "";
  private _description: string = "";
  private _rarity: number = 0;
  private _value: number = 0;
  private _icon: string = "";

  constructor(
    id: number,
    name: string,
    description: string,
    rarity: number,
    value: number,
    icon: string
  ) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._rarity = rarity;
    this._value = value;
    this._icon = icon;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get rarity(): number {
    return this._rarity;
  }

  get value(): number {
    return this._value;
  }

  get icon(): string {
    return this._icon;
  }

  clone(): Item {
    return new Item(
      this._id,
      this._name,
      this._description,
      this._rarity,
      this._value,
      this._icon
    );
  }
}

export class ItemInventory {
  private _item!: Item;
  private _quantity: number = 0;

  constructor(item: Item, quantity: number) {
    this._item = item;
    this._quantity = quantity;
  }

  get item(): Item {
    return this._item;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(quantity: number) {
    this._quantity = quantity;
  }
}
