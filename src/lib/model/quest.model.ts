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

  get item(): Item {
    return this._item;
  }

  get probability(): number {
    return this._probability;
  }

  get quantity(): number {
    return this._quantity;
  }
}

export class Quest {
  private _id: number;
  private _title: string;
  private _description: string;
  private _status: QuestStatus;
  private _money: number;
  private _startDate: Date;
  private _rewards: QuestReward[];

  constructor(
    id: number,
    titre: string,
    description: string,
    money: number,
    rewards: QuestReward[]
  ) {
    this._id = id;
    this._title = titre;
    this._description = description;
    this._status = QuestStatus.FUTURE;
    this._money = money;
    this._startDate = new Date();
    this._rewards = rewards;
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

  get rewards(): QuestReward[] {
    return this._rewards;
  }
}

// Classe pour les quêtes de combat
export class QuestCombat extends Quest {
  private _actualMonsterIndex: number;
  private _endQuest: boolean;
  private _monsters: Monster[];

  constructor(
    id: number,
    title: string,
    description: string,
    monsters: Monster[],
    rewards: QuestReward[],
    money: number
  ) {
    super(id, title, description, money, rewards);
    this._actualMonsterIndex = 0;
    this._monsters = monsters;
    this._endQuest = false;
  }

  clone(): QuestCombat {
    return new QuestCombat(
      this.id,
      this.title,
      this.description,
      this._monsters.map((monster) => monster.clone()),
      this.rewards.map((reward) => reward.clone()),
      this.money
    );
  }

  get endQuest(): boolean {
    return this._endQuest;
  }

  monsterByIndex(index: number): Monster | undefined {
    if (index >= this._monsters.length) {
      this._endQuest = true;
      return undefined;
    }
    return this._monsters[index];
  }

  nextMonster(): Monster | undefined {
    this._actualMonsterIndex = this._actualMonsterIndex + 1;
    if (this._actualMonsterIndex >= this._monsters.length) {
      this._endQuest = true;
      return undefined;
    }
    return this._monsters[this._actualMonsterIndex];
  }

  generateReward(): Item[] {
    const rewards: Item[] = [];

    this.rewards.forEach((reward) => {
      for (let i = 0; i < reward.quantity; i++) {
        const result = Math.floor(Math.random() * (100 - 0 + 1) + 0);
        if (result <= reward.probability) {
          rewards.push(reward.item.clone());
        }
      }
    });

    return rewards;
  }
}

// Classe pour les quêtes de collecte avec durée
export class QuestCollect extends Quest {
  private _timeTo: number;

  constructor(
    id: number,
    title: string,
    description: string,
    timeTo: number,
    rewards: QuestReward[],
    money: number
  ) {
    super(id, title, description, money, rewards);
    this._timeTo = timeTo;
  }

  clone(): QuestCollect {
    return new QuestCollect(
      this.id,
      this.title,
      this.description,
      this._timeTo,
      this.rewards.map((reward) => reward.clone()),
      this.money
    );
  }

  get timeTo(): number {
    return this._timeTo;
  }
}
