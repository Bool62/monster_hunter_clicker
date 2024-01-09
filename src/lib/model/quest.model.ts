// Classe de base pour toutes les quêtes

import { Item } from "./item.model";
import { Monster, MonsterReward } from "./monster.model";

export enum QuestStatus {
  FUTURE = "future",
  TODO = "todo",
  WORKING = "working",
  DONE = "done",
}

export class QuestReward {
  private _item!: Item;
  private _probability: number = 0;
  private _quantity: number = 0;

  constructor(item: Item, probability: number, quantity: number) {
    this._item = item;
    this._probability = probability;
    this._quantity = quantity;
  }
  clone(): QuestReward {
    return new QuestReward(
      this._item.clone(),
      this._probability,
      this._quantity
    );
  }
}

export class Quest {
  private _id: number;
  private _title: string;
  private _description: string;
  private _status: QuestStatus;
  private _money: number;
  private _startDate: Date;

  constructor(id: number, titre: string, description: string, money: number) {
    this._id = id;
    this._title = titre;
    this._description = description;
    this._status = QuestStatus.FUTURE;
    this._money = money;
    this._startDate = new Date();
  }

  start(): void {
    this._status = QuestStatus.WORKING;
  }

  done(): void {
    this._status = QuestStatus.DONE;
  }

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get status(): QuestStatus {
    return this._status;
  }

  get money(): number {
    return this._money;
  }

  get startDate(): Date {
    return this._startDate;
  }
}

// Classe pour les quêtes de combat
export class QuestCombat extends Quest {
  private _monsters: Monster[];
  private _rewards: QuestReward[];

  constructor(
    id: number,
    title: string,
    description: string,
    monsters: Monster[],
    rewards: QuestReward[],
    money: number
  ) {
    super(id, title, description, money);
    this._monsters = monsters;
    this._rewards = rewards;
  }

  clone(): QuestCombat {
    return new QuestCombat(
      this.id,
      this.title,
      this.description,
      this._monsters.map((monster) => monster.clone()),
      this._rewards.map((reward) => reward.clone()),
      this.money
    );
  }
}

// Classe pour les quêtes de collecte avec durée
export class QuestCollect extends Quest {
  private _timeTo: number;
  private _rewards: QuestReward[];

  constructor(
    id: number,
    title: string,
    description: string,
    timeTo: number,
    rewards: QuestReward[],
    money: number
  ) {
    super(id, title, description, money);
    this._timeTo = timeTo;
    this._rewards = rewards;
  }

  clone(): QuestCollect {
    return new QuestCollect(
      this.id,
      this.title,
      this.description,
      this._timeTo,
      this._rewards.map((reward) => reward.clone()),
      this.money
    );
  }

  get timeTo(): number {
    return this._timeTo;
  }
}
