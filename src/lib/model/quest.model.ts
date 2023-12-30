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
}

export class Quest {
  private _id: number;
  private _title: string;
  private _description: string;
  private _status: QuestStatus;

  constructor(id: number, titre: string, description: string) {
    this._id = id;
    this._title = titre;
    this._description = description;
    this._status = QuestStatus.FUTURE;
  }

  start(): void {
    this._status = QuestStatus.WORKING;
  }

  done(): void {
    this._status = QuestStatus.DONE;
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
    rewards: QuestReward[]
  ) {
    super(id, title, description);
    this._monsters = monsters;
    this._rewards = rewards;
  }
}

// Classe pour les quêtes de collecte avec durée
export class QuestCollecte extends Quest {
  private _timeTo: number;
  private _rewards: QuestReward[];

  constructor(
    id: number,
    title: string,
    description: string,
    timeTo: number,
    rewards: QuestReward[]
  ) {
    super(id, title, description);
    this._timeTo = timeTo;
    this._rewards = rewards;
  }
}
