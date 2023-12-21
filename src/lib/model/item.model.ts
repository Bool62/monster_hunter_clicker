export class Item {
  private id: number = 0;
  private name: string = '';
  private description: string = '';
  private rarity: number = 0;
  private value: number = 0;
  private icon: string = '';

  constructor(
    id: number,
    name: string,
    description: string,
    rarity: number,
    value: number,
    icon: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.rarity = rarity;
    this.value = value;
  }
}

export class ItemInventory extends Item {
  private quantity: number = 0;
}
