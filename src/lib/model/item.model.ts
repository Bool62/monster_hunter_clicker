export class Item {
  private _id: number = 0;
  private _name: string = '';
  private _description: string = '';
  private _rarity: number = 0;
  private _value: number = 0;
  private _icon: string = '';

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
}

export class ItemInventory {
  private _item!: Item
  private _quantity: number = 0;

  constructor(item: Item, quantity: number) {
    this._item = item;
    this._quantity = quantity;
    }

  get item(): Item {
    return this._item;
  }

  get quantity(): number {
    return this._quantity
  }

  set quantity(quantity: number) {
    this._quantity = quantity;
  }  
}
